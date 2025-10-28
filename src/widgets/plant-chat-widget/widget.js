const defaultConfig = {
  accentColor: "#B0766C",
  backgroundColor: "rgba(32, 26, 23, 0.7)",
  messageBackground: "rgba(245, 234, 224, 0.85)",
  showPronouns: true,
  showBadges: true,
  showRolePill: true,
  messageLimit: 8,
  alignMessages: "bottom",
  ignoreUsers: [],
  eventDuration: 6000,
  fadeOutEvents: true,
  decoration: true
};

const roleIcons = {
  broadcaster: "👑",
  moderator: "🌿",
  vip: "💎",
  subscriber: "🌸",
  founder: "🌱",
  staff: "🛡️",
  streamer: "🦋",
  bot: "🤖",
  viewer: "🦋"
};

const container = document.getElementById("message-container");
const overlay = document.querySelector(".chat-overlay");
const messageTemplate = document.getElementById("chat-message-template");
const eventTemplate = document.getElementById("event-alert-template");
const decorationRoot = document.querySelector(".stream-decoration");

let config = { ...defaultConfig };

function parseWidgetParams() {
  const fieldData = window.fieldData ?? {};
  const params = new URLSearchParams(window.location.search);
  const ignoreUsers = fieldData.ignoreUsers || params.get("ignore") || "";

  config = {
    ...config,
    ...Object.fromEntries(
      Object.entries(fieldData).filter(([key]) => key in defaultConfig)
    )
  };

  if (params.has("accent")) {
    config.accentColor = params.get("accent");
  }
  if (params.has("background")) {
    config.backgroundColor = params.get("background");
  }
  if (params.has("messageBackground")) {
    config.messageBackground = params.get("messageBackground");
  }
  if (params.has("align")) {
    config.alignMessages = params.get("align");
  }
  if (params.has("limit")) {
    const limit = Number(params.get("limit"));
    if (!Number.isNaN(limit)) {
      config.messageLimit = Math.max(1, limit);
    }
  }
  if (params.has("badges")) {
    config.showBadges = params.get("badges") === "true";
  }
  if (params.has("pronouns")) {
    config.showPronouns = params.get("pronouns") === "true";
  }
  if (params.has("rolepill")) {
    config.showRolePill = params.get("rolepill") === "true";
  }
  if (params.has("decoration")) {
    config.decoration = params.get("decoration") !== "false";
  }

  config.ignoreUsers = (Array.isArray(fieldData.ignoreUsers)
    ? fieldData.ignoreUsers
    : String(ignoreUsers)
  )
    .split(/[,\s]+/)
    .map((user) => user.trim().toLowerCase())
    .filter(Boolean);
}

function applyTheme() {
  const root = document.documentElement;
  root.style.setProperty("--accent-color", config.accentColor);
  root.style.setProperty("--background-color", config.backgroundColor);
  root.style.setProperty("--message-background", config.messageBackground);
  overlay.dataset.align = config.alignMessages === "top" ? "top" : "bottom";
  decorationRoot.style.display = config.decoration ? "block" : "none";
}

function extractBadgeNames(data) {
  const badges =
    data?.badges ??
    data?.tags?.badges ??
    data?.tags?.badgeInfo ??
    data?.tags?.badgeInfoParsed ??
    [];

  if (typeof badges === "string") {
    return badges.split(",").map((badge) => badge.trim());
  }

  if (Array.isArray(badges)) {
    return badges
      .map((badge) => {
        if (!badge) return "";
        if (typeof badge === "string") return badge;
        return badge.type || badge.name || badge.id || "";
      })
      .filter(Boolean);
  }

  return [];
}

function getRole(data) {
  const badges = extractBadgeNames(data).map((badge) => badge.toLowerCase());
  if (badges.includes("broadcaster")) return "broadcaster";
  if (badges.includes("moderator")) return "moderator";
  if (badges.includes("vip")) return "vip";
  if (badges.includes("founder")) return "founder";
  if (badges.includes("subscriber")) return "subscriber";
  if ((data?.nick || "").toLowerCase() === "streamelements") return "bot";
  return "viewer";
}

function formatBadges(data) {
  const badges = extractBadgeNames(data);
  if (badges.length === 0) return null;
  return badges[0];
}

function shouldIgnore(username) {
  return config.ignoreUsers.includes(String(username ?? "").toLowerCase());
}

function renderMessage(data) {
  const template = messageTemplate.content.cloneNode(true);
  const article = template.querySelector(".chat-message");
  const userEl = template.querySelector(".chat-message__user");
  const pronounEl = template.querySelector(".chat-message__pronouns");
  const bodyEl = template.querySelector(".chat-message__body");
  const badgeEl = template.querySelector(".chat-message__badge");
  const roleEl = template.querySelector(".chat-message__role");

  const username = data?.displayName || data?.nick || "Mystery Bean";
  const messageText = data?.text || data?.message || "";
  const pronouns = data?.tags?.pronouns ?? data?.pronouns ?? "";
  const role = getRole(data);

  article.dataset.role = role;
  article.dataset.messageId = data?.msgId || data?.id || "";
  userEl.textContent = username;
  bodyEl.textContent = messageText;

  if (config.showPronouns && pronouns) {
    pronounEl.textContent = `(${pronouns})`;
    pronounEl.hidden = false;
  } else {
    pronounEl.hidden = true;
  }

  if (!config.showRolePill || role === "viewer") {
    roleEl.hidden = true;
  } else {
    roleEl.textContent = role;
    roleEl.hidden = false;
  }

  const badgeText = formatBadges(data) || roleIcons[role] || roleIcons.viewer;
  if (config.showBadges && badgeText) {
    badgeEl.textContent = badgeText;
    badgeEl.hidden = false;
  } else {
    badgeEl.hidden = true;
  }

  return article;
}

function appendMessage(element) {
  if (config.alignMessages === "top") {
    container.prepend(element);
  } else {
    container.appendChild(element);
  }

  enforceMessageLimit();
}

function enforceMessageLimit() {
  while (container.children.length > config.messageLimit) {
    const node =
      config.alignMessages === "top"
        ? container.lastElementChild
        : container.firstElementChild;
    node?.remove();
  }
}

function handleChatMessage({ data }) {
  if (!data) return;
  if (shouldIgnore(data.nick || data.displayName)) return;

  const element = renderMessage(data);
  appendMessage(element);
}

function formatEventText(type, data) {
  const name = data?.name || data?.nick || data?.user || "Someone";
  switch (type) {
    case "follower-latest":
      return `Welcome ${name} to the grove!`;
    case "subscriber-latest": {
      const amount = data?.amount ?? data?.months ?? 1;
      return `${name} tended the garden for ${amount} month${amount > 1 ? "s" : ""}!`;
    }
    case "cheer-latest": {
      const bits = data?.amount || data?.bits || "";
      return `${name} sprinkled ${bits} cozy bits!`;
    }
    case "tip-latest": {
      const amount = data?.amount || data?.formattedAmount || "a tip";
      return `${name} left ${amount} in the tip jar!`;
    }
    case "raid-latest": {
      const viewers = data?.amount || data?.raiders || "new";
      return `${name} brought ${viewers} friends to the clearing!`;
    }
    default:
      return `${name} made something magical happen!`;
  }
}

function renderEvent(type, data) {
  const template = eventTemplate.content.cloneNode(true);
  const article = template.querySelector(".chat-event");
  const textEl = template.querySelector(".chat-event__text");

  article.dataset.type = type;
  article.style.setProperty(
    "border-color",
    `color-mix(in srgb, var(--accent-color) 60%, transparent)`
  );
  article.style.setProperty("background", "rgba(176, 118, 108, 0.35)");
  textEl.textContent = formatEventText(type, data);

  if (config.alignMessages === "top") {
    container.prepend(article);
  } else {
    container.appendChild(article);
  }
  enforceMessageLimit();

  if (config.eventDuration > 0) {
    setTimeout(() => {
      if (config.fadeOutEvents) {
        article.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        article.style.opacity = "0";
        article.style.transform = "translateY(10px)";
        setTimeout(() => article.remove(), 650);
      } else {
        article.remove();
      }
    }, config.eventDuration);
  }
}

function handleEventReceived(event) {
  const { detail } = event || {};
  if (!detail) return;

  const { listener, event: eventData } = detail;

  if (listener === "message") {
    handleChatMessage(detail);
    return;
  }

  if (!eventData) return;

  if (typeof listener === "string" && listener.endsWith("-latest")) {
    renderEvent(listener, eventData);
  }
}

function handleMessageDelete({ detail }) {
  const { event } = detail ?? {};
  if (!event?.msgId) return;
  const selector = `.chat-message[data-message-id="${event.msgId}"]`;
  const message = document.querySelector(selector);
  if (message) {
    message.style.transition = "opacity 0.3s ease";
    message.style.opacity = "0";
    setTimeout(() => message.remove(), 300);
  }
}

function ready() {
  parseWidgetParams();
  applyTheme();
}

ready();

window.addEventListener("onWidgetLoad", ready);
window.addEventListener("onEventReceived", handleEventReceived);
window.addEventListener("onEventDeleted", handleMessageDelete);

// Demo mode for offline preview
if (!window.StreamElements) {
  const demoMessages = [
    {
      displayName: "FernFriend",
      text: "Welcome in everyone! Grab a blanket and a warm drink.",
      tags: { pronouns: "she/her", badges: ["moderator", "founder"] }
    },
    {
      displayName: "MushroomMage",
      text: "This overlay is so cozy!",
      tags: { pronouns: "they/them", badges: ["vip"] }
    },
    {
      displayName: "AcornArtist",
      text: "Don't forget to hydrate!",
      tags: { pronouns: "he/him", badges: ["subscriber"] }
    }
  ];

  demoMessages.forEach((data, index) => {
    setTimeout(() => handleChatMessage({ data }), 400 * (index + 1));
  });

  setTimeout(() => {
    renderEvent("follower-latest", { name: "AutumnLeaf" });
  }, 2500);
}
