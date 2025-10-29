const defaultConfig = {
  accentColor: "#ff86d5",
  accentColorSecondary: "#ff9ae1",
  backgroundGradientStart: "#371052",
  backgroundGradientEnd: "#120022",
  messageGradientStart: "rgba(255, 227, 246, 0.95)",
  messageGradientEnd: "rgba(255, 193, 229, 0.88)",
  messageBorderColor: "rgba(255, 255, 255, 0.55)",
  messageShadowColor: "rgba(255, 138, 209, 0.38)",
  usernameColor: "#fff1ff",
  headerTextColor: "#fff1ff",
  headerIconColor: "#ff9ae1",
  headerIconShadow: "rgba(255, 123, 212, 0.5)",
  messageTextColor: "#451633",
  pronounTextColor: "rgba(255, 255, 255, 0.72)",
  rolePillBackground: "rgba(255, 255, 255, 0.22)",
  badgeTextColor: "#ffffff",
  badgeGlowColor: "rgba(255, 174, 235, 0.55)",
  badgeBorderColor: "rgba(255, 255, 255, 0.65)",
  indicatorColor: "#ff9ae1",
  indicatorBackground: "linear-gradient(145deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))",
  roleViewerColor: "#ff86d5",
  roleSubscriberColor: "#ff9ae1",
  roleModeratorColor: "#9ef7d8",
  roleVipColor: "#f7bbff",
  roleBroadcasterColor: "#ffbe9f",
  roleStaffColor: "#c7d2ff",
  roleBotColor: "#9ad7ff",
  eventLabelColor: "#ffffff",
  eventTextColor: "#fff6ff",
  eventIconBackground: "rgba(255, 255, 255, 0.65)",
  eventIconColor: "#ff86d5",
  eventFollowerColor: "#ff8ed6",
  eventSubscriberColor: "#ff7ec4",
  eventGiftColor: "#ff9ff0",
  eventRaidColor: "#d58dff",
  eventCheerColor: "#ffd17f",
  eventTipColor: "#ffa96b",
  eventDefaultColor: "#f7a7ff",
  showPronouns: true,
  showBadges: true,
  showRolePill: true,
  showRoleIcon: true,
  showEventIcon: true,
  showEventLabel: true,
  messageLimit: 8,
  alignMessages: "bottom",
  ignoreUsers: [],
  eventDuration: 8000,
  fadeOutEvents: true,
  decoration: true,
  indicatorIcon: "♡",
  titleText: "chatbox",
  titleIcon: "⋆⋆⋆"
};

const widgetFieldGroups = [
  {
    group: "Header",
    description: "Customize the widget title, indicator icons, and header colors.",
    fields: [
      { type: "text", label: "Title text", name: "titleText", defaultValue: defaultConfig.titleText },
      { type: "text", label: "Title icon", name: "titleIcon", defaultValue: defaultConfig.titleIcon },
      { type: "text", label: "Indicator icon", name: "indicatorIcon", defaultValue: defaultConfig.indicatorIcon },
      { type: "color", label: "Header text color", name: "headerTextColor", defaultValue: defaultConfig.headerTextColor },
      { type: "color", label: "Header icon color", name: "headerIconColor", defaultValue: defaultConfig.headerIconColor },
      { type: "color", label: "Header icon glow", name: "headerIconShadow", defaultValue: defaultConfig.headerIconShadow },
      {
        type: "color",
        label: "Indicator color",
        name: "indicatorColor",
        defaultValue: defaultConfig.indicatorColor
      },
      {
        type: "text",
        label: "Indicator background",
        name: "indicatorBackground",
        defaultValue: defaultConfig.indicatorBackground,
        help: "Accepts any CSS color or gradient. Use 'auto' to fall back to the preset."
      }
    ]
  },
  {
    group: "Background & Bubbles",
    description: "Control the widget backdrop and chat bubble palette.",
    fields: [
      { type: "color", label: "Accent color", name: "accentColor", defaultValue: defaultConfig.accentColor },
      {
        type: "color",
        label: "Accent secondary",
        name: "accentColorSecondary",
        defaultValue: defaultConfig.accentColorSecondary
      },
      {
        type: "color",
        label: "Background gradient start",
        name: "backgroundGradientStart",
        defaultValue: defaultConfig.backgroundGradientStart
      },
      {
        type: "color",
        label: "Background gradient end",
        name: "backgroundGradientEnd",
        defaultValue: defaultConfig.backgroundGradientEnd
      },
      {
        type: "text",
        label: "Bubble gradient start",
        name: "messageGradientStart",
        defaultValue: defaultConfig.messageGradientStart
      },
      {
        type: "text",
        label: "Bubble gradient end",
        name: "messageGradientEnd",
        defaultValue: defaultConfig.messageGradientEnd
      },
      {
        type: "color",
        label: "Bubble border color",
        name: "messageBorderColor",
        defaultValue: defaultConfig.messageBorderColor
      },
      {
        type: "color",
        label: "Bubble shadow",
        name: "messageShadowColor",
        defaultValue: defaultConfig.messageShadowColor
      },
      { type: "color", label: "Username color", name: "usernameColor", defaultValue: defaultConfig.usernameColor },
      {
        type: "color",
        label: "Message text color",
        name: "messageTextColor",
        defaultValue: defaultConfig.messageTextColor
      },
      {
        type: "color",
        label: "Pronoun text color",
        name: "pronounTextColor",
        defaultValue: defaultConfig.pronounTextColor
      }
    ]
  },
  {
    group: "Badges & Roles",
    description: "Fine tune badge, role pill, and per-role accent colors.",
    fields: [
      {
        type: "color",
        label: "Role pill background",
        name: "rolePillBackground",
        defaultValue: defaultConfig.rolePillBackground
      },
      { type: "color", label: "Badge text", name: "badgeTextColor", defaultValue: defaultConfig.badgeTextColor },
      { type: "color", label: "Badge glow", name: "badgeGlowColor", defaultValue: defaultConfig.badgeGlowColor },
      { type: "color", label: "Badge border", name: "badgeBorderColor", defaultValue: defaultConfig.badgeBorderColor },
      { type: "color", label: "Viewer color", name: "roleViewerColor", defaultValue: defaultConfig.roleViewerColor },
      {
        type: "color",
        label: "Subscriber color",
        name: "roleSubscriberColor",
        defaultValue: defaultConfig.roleSubscriberColor
      },
      {
        type: "color",
        label: "Moderator color",
        name: "roleModeratorColor",
        defaultValue: defaultConfig.roleModeratorColor
      },
      { type: "color", label: "VIP color", name: "roleVipColor", defaultValue: defaultConfig.roleVipColor },
      {
        type: "color",
        label: "Broadcaster color",
        name: "roleBroadcasterColor",
        defaultValue: defaultConfig.roleBroadcasterColor
      },
      { type: "color", label: "Staff color", name: "roleStaffColor", defaultValue: defaultConfig.roleStaffColor },
      { type: "color", label: "Bot color", name: "roleBotColor", defaultValue: defaultConfig.roleBotColor }
    ]
  },
  {
    group: "Events",
    description: "Customize alert typography and gradient colors.",
    fields: [
      {
        type: "color",
        label: "Event label color",
        name: "eventLabelColor",
        defaultValue: defaultConfig.eventLabelColor
      },
      {
        type: "color",
        label: "Event text color",
        name: "eventTextColor",
        defaultValue: defaultConfig.eventTextColor
      },
      {
        type: "text",
        label: "Event icon background",
        name: "eventIconBackground",
        defaultValue: defaultConfig.eventIconBackground,
        help: "Enter a color, gradient, or 'auto' for palette-driven lighting."
      },
      {
        type: "text",
        label: "Event icon color",
        name: "eventIconColor",
        defaultValue: defaultConfig.eventIconColor,
        help: "Use 'auto' to inherit each alert color."
      },
      { type: "color", label: "Follower alert", name: "eventFollowerColor", defaultValue: defaultConfig.eventFollowerColor },
      {
        type: "color",
        label: "Subscriber alert",
        name: "eventSubscriberColor",
        defaultValue: defaultConfig.eventSubscriberColor
      },
      { type: "color", label: "Gift alert", name: "eventGiftColor", defaultValue: defaultConfig.eventGiftColor },
      { type: "color", label: "Raid alert", name: "eventRaidColor", defaultValue: defaultConfig.eventRaidColor },
      { type: "color", label: "Cheer alert", name: "eventCheerColor", defaultValue: defaultConfig.eventCheerColor },
      { type: "color", label: "Tip alert", name: "eventTipColor", defaultValue: defaultConfig.eventTipColor },
      { type: "color", label: "Default alert", name: "eventDefaultColor", defaultValue: defaultConfig.eventDefaultColor }
    ]
  },
  {
    group: "Behavior",
    description: "Toggle optional UI elements and tune message flow.",
    fields: [
      { type: "toggle", label: "Show pronouns", name: "showPronouns", defaultValue: defaultConfig.showPronouns },
      { type: "toggle", label: "Show badges", name: "showBadges", defaultValue: defaultConfig.showBadges },
      { type: "toggle", label: "Show role pill", name: "showRolePill", defaultValue: defaultConfig.showRolePill },
      { type: "toggle", label: "Show role icon", name: "showRoleIcon", defaultValue: defaultConfig.showRoleIcon },
      { type: "toggle", label: "Show event icon", name: "showEventIcon", defaultValue: defaultConfig.showEventIcon },
      { type: "toggle", label: "Show event label", name: "showEventLabel", defaultValue: defaultConfig.showEventLabel },
      { type: "toggle", label: "Show sparkles", name: "decoration", defaultValue: defaultConfig.decoration },
      { type: "toggle", label: "Fade alerts", name: "fadeOutEvents", defaultValue: defaultConfig.fadeOutEvents },
      {
        type: "select",
        label: "Message alignment",
        name: "alignMessages",
        defaultValue: defaultConfig.alignMessages,
        options: [
          { label: "Bottom", value: "bottom" },
          { label: "Top", value: "top" }
        ]
      },
      {
        type: "number",
        label: "Message limit",
        name: "messageLimit",
        defaultValue: defaultConfig.messageLimit,
        min: 1,
        step: 1
      },
      {
        type: "number",
        label: "Alert duration (ms)",
        name: "eventDuration",
        defaultValue: defaultConfig.eventDuration,
        min: 0,
        step: 100
      },
      {
        type: "text",
        label: "Ignore users",
        name: "ignoreUsers",
        defaultValue: defaultConfig.ignoreUsers.join(", "),
        help: "Comma or space separated usernames to hide."
      }
    ]
  }
];

if (typeof window !== "undefined") {
  window.widgetFieldGroups = widgetFieldGroups;
  window.widgetFields = widgetFieldGroups;
  window.fieldDefinitions = widgetFieldGroups;
  window.widgetSettings = {
    ...(window.widgetSettings || {}),
    settingsVersion: 2,
    fields: widgetFieldGroups
  };
}

const roleIcons = {
  broadcaster: "💖",
  moderator: "🌙",
  vip: "💎",
  subscriber: "💝",
  founder: "💝",
  staff: "⭐",
  bot: "🤖",
  viewer: "💬"
};

const roleLabels = {
  broadcaster: "Broadcaster",
  moderator: "Moderator",
  vip: "VIP",
  subscriber: "Subscriber",
  founder: "Founder",
  staff: "Staff",
  bot: "Helper",
  viewer: "Community"
};

const badgeLabels = {
  broadcaster: "Host",
  moderator: "Mod",
  vip: "VIP",
  subscriber: "Sub",
  founder: "Founder",
  partner: "Partner",
  premium: "Prime",
  bits: "Bits",
  staff: "Staff"
};

const roleColorKeys = {
  viewer: "roleViewerColor",
  subscriber: "roleSubscriberColor",
  founder: "roleSubscriberColor",
  moderator: "roleModeratorColor",
  vip: "roleVipColor",
  broadcaster: "roleBroadcasterColor",
  staff: "roleStaffColor",
  bot: "roleBotColor"
};

const eventDefinitions = {
  follower: {
    icon: "🩷",
    label: "New follow",
    colorKey: "eventFollowerColor",
    message: ({ name }) => `${name} just followed!`
  },
  subscriber: {
    icon: "💝",
    label: "New sub",
    colorKey: "eventSubscriberColor",
    message: ({ name, tier }) => {
      const tierLabel = describeTier(tier);
      return tierLabel ? `${name} subscribed (${tierLabel})!` : `${name} subscribed!`;
    }
  },
  resub: {
    icon: "💘",
    label: "Resub hype",
    colorKey: "eventSubscriberColor",
    message: ({ name, monthsNumber, streakNumber }) => {
      const count = monthsNumber || streakNumber || 1;
      return `${name} resubbed for ${count} ${pluralize("month", count)}!`;
    }
  },
  gift: {
    icon: "🎁",
    label: "Gift sub",
    colorKey: "eventGiftColor",
    message: ({ name, recipient, giftTotal, quantityNumber }) => {
      const count = giftTotal || quantityNumber || 1;
      if (count > 1) {
        return `${name} gifted ${count} subs!`;
      }
      if (recipient) {
        return `${name} gifted a sub to ${recipient}!`;
      }
      return `${name} gifted a sub!`;
    }
  },
  communitygift: {
    icon: "🎁",
    label: "Community gift",
    colorKey: "eventGiftColor",
    message: ({ name, giftTotal, quantityNumber }) => {
      const count = giftTotal || quantityNumber || 1;
      return `${name} dropped ${count} community gifts!`;
    }
  },
  cheer: {
    icon: "💎",
    label: "Cheer sparkle",
    colorKey: "eventCheerColor",
    message: ({ name, bitsNumber, amountNumber }) => {
      const bits = bitsNumber || amountNumber || 0;
      if (bits > 0) {
        return `${name} cheered ${bits} ${pluralize("bit", bits)}!`;
      }
      return `${name} cheered some bits!`;
    }
  },
  tip: {
    icon: "💖",
    label: "Tip love",
    colorKey: "eventTipColor",
    message: ({ name, formattedAmount, amountNumber, amountRaw, currency }) => {
      const value = formattedAmount || formatCurrency(amountNumber ?? amountRaw, currency);
      if (!value || value === "a tip") {
        return `${name} left a cozy tip!`;
      }
      return `${name} tipped ${value}!`;
    }
  },
  raid: {
    icon: "🦋",
    label: "Raid party",
    colorKey: "eventRaidColor",
    message: ({ name, viewersNumber }) => {
      const count = viewersNumber || 0;
      return count > 0
        ? `${name} raided with ${count} ${pluralize("friend", count)}!`
        : `${name} brought the raid vibes!`;
    }
  },
  host: {
    icon: "🌙",
    label: "Host",
    colorKey: "eventRaidColor",
    message: ({ name, viewersNumber }) => {
      if (viewersNumber && viewersNumber > 0) {
        return `${name} hosted for ${viewersNumber} ${pluralize("friend", viewersNumber)}!`;
      }
      return `${name} is now hosting!`;
    }
  },
  redemption: {
    icon: "✨",
    label: "Channel points",
    colorKey: "eventDefaultColor",
    message: ({ name, raw }) => {
      const reward = raw?.item || raw?.reward || raw?.title || raw?.name || "a reward";
      return `${name} redeemed ${reward}!`;
    }
  },
  merch: {
    icon: "🛍️",
    label: "Merch pickup",
    colorKey: "eventDefaultColor",
    message: ({ name, raw }) => {
      const item = raw?.item || raw?.product || raw?.name || "some merch";
      return `${name} grabbed ${item}!`;
    }
  },
  charity: {
    icon: "🎗️",
    label: "Charity love",
    colorKey: "eventDefaultColor",
    message: ({ name, amountNumber, amountRaw, formattedAmount, currency }) => {
      const value = formattedAmount || formatCurrency(amountNumber ?? amountRaw, currency);
      return `${name} donated ${value} to charity!`;
    }
  },
  other: {
    icon: "⭐",
    label: "Alert",
    colorKey: "eventDefaultColor",
    message: ({ name }) => `${name} made something magical happen!`
  },
  default: {
    icon: "⭐",
    label: "Alert",
    colorKey: "eventDefaultColor",
    message: ({ name }) => `${name} made something magical happen!`
  }
};

const container = document.getElementById("message-container");
const overlay = document.querySelector(".chat-overlay");
const messageTemplate = document.getElementById("chat-message-template");
const eventTemplate = document.getElementById("event-alert-template");
const decorationRoot = document.querySelector(".stream-decoration");
const titleTextEl = document.querySelector(".chat-overlay__title-text");
const titleIconEl = document.querySelector(".chat-overlay__title-icon");
const indicatorHearts = Array.from(
  document.querySelectorAll(".chat-overlay__indicator-heart")
);

let config = { ...defaultConfig };

function clamp01(value) {
  return Math.min(1, Math.max(0, value));
}

function toNumber(value) {
  if (value == null || value === "") return null;
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : null;
}

function toCssValue(value) {
  if (value == null) return null;
  if (typeof value === "string") return value;
  if (typeof value === "number") {
    return Number.isFinite(value) ? String(value) : null;
  }

  if (Array.isArray(value)) {
    return value
      .map((entry) => toCssValue(entry))
      .filter((entry) => typeof entry === "string" && entry.trim())
      .join(", ");
  }

  if (typeof value === "object") {
    const stringKeys = ["value", "hex", "color", "raw", "data"];
    for (const key of stringKeys) {
      const candidate = value[key];
      if (typeof candidate === "string" && candidate.trim()) {
        return candidate;
      }
    }

    const r = toNumber(value.r ?? value.red);
    const g = toNumber(value.g ?? value.green);
    const b = toNumber(value.b ?? value.blue);

    if ([r, g, b].every((channel) => Number.isFinite(channel))) {
      const alphaCandidate =
        value.a ?? value.alpha ?? value.opacity ?? value.transparent ?? null;
      const alpha = toNumber(alphaCandidate);
      if (alpha == null || alpha >= 1) {
        return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
      }
      const normalized = clamp01(alpha);
      const roundedAlpha = Math.round(normalized * 100) / 100;
      return `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${roundedAlpha})`;
    }
  }

  return null;
}

function parseColorToRgb(color) {
  if (typeof color !== "string") return null;
  const trimmed = color.trim();
  const hexMatch = trimmed.match(/^#([a-f0-9]{3,8})$/i);
  if (hexMatch) {
    let hex = hexMatch[1];
    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((char) => char + char)
        .join("");
    }
    if (hex.length === 4) {
      hex = hex
        .slice(0, 3)
        .split("")
        .map((char) => char + char)
        .join("");
    }
    if (hex.length >= 6) {
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      if ([r, g, b].every((channel) => Number.isFinite(channel))) {
        return { r, g, b };
      }
    }
  }

  const rgbMatch = trimmed.match(/^rgba?\(([^)]+)\)$/i);
  if (rgbMatch) {
    const parts = rgbMatch[1].split(/[\s,]+/).filter(Boolean);
    if (parts.length >= 3) {
      const [r, g, b] = parts.slice(0, 3).map((part) => Number(part));
      if ([r, g, b].every((channel) => Number.isFinite(channel))) {
        return { r, g, b };
      }
    }
  }

  return null;
}

function rgbToHsl({ r, g, b }) {
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;
  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  const delta = max - min;

  let h = 0;
  if (delta !== 0) {
    if (max === rNorm) {
      h = ((gNorm - bNorm) / delta) % 6;
    } else if (max === gNorm) {
      h = (bNorm - rNorm) / delta + 2;
    } else {
      h = (rNorm - gNorm) / delta + 4;
    }
  }

  const l = (max + min) / 2;
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  return { h: (h * 60 + 360) % 360, s: clamp01(s), l: clamp01(l) };
}

function hslToRgb({ h, s, l }) {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let rPrime = 0;
  let gPrime = 0;
  let bPrime = 0;

  if (h < 60) {
    rPrime = c;
    gPrime = x;
  } else if (h < 120) {
    rPrime = x;
    gPrime = c;
  } else if (h < 180) {
    gPrime = c;
    bPrime = x;
  } else if (h < 240) {
    gPrime = x;
    bPrime = c;
  } else if (h < 300) {
    rPrime = x;
    bPrime = c;
  } else {
    rPrime = c;
    bPrime = x;
  }

  return {
    r: Math.round((rPrime + m) * 255),
    g: Math.round((gPrime + m) * 255),
    b: Math.round((bPrime + m) * 255)
  };
}

function adjustLightness(rgb, amount) {
  const hsl = rgbToHsl(rgb);
  const adjusted = { ...hsl, l: clamp01(hsl.l + amount) };
  return hslToRgb(adjusted);
}

function formatRgb(rgb, alpha = 1) {
  const { r, g, b } = rgb;
  return `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${alpha})`;
}

function createPalette(color, fallback) {
  const fallbackRgb =
    parseColorToRgb(fallback) || parseColorToRgb(defaultConfig.accentColor) || {
      r: 255,
      g: 192,
      b: 220
    };
  const baseRgb = parseColorToRgb(color) || fallbackRgb;
  const soft = adjustLightness(baseRgb, 0.18);
  const strong = adjustLightness(baseRgb, -0.05);
  const border = adjustLightness(baseRgb, 0.25);
  const shadow = adjustLightness(baseRgb, -0.45);
  const glow = adjustLightness(baseRgb, 0.35);

  return {
    base: formatRgb(baseRgb),
    soft: formatRgb(soft),
    strong: formatRgb(strong),
    border: formatRgb(border),
    shadow: formatRgb(shadow, 0.55),
    glow: formatRgb(glow, 0.45)
  };
}

function sanitizeBoolean(value, fallback) {
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value !== 0;
  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    if (["true", "1", "yes", "on"].includes(normalized)) return true;
    if (["false", "0", "no", "off"].includes(normalized)) return false;
  }
  return fallback;
}

function sanitizeNumber(value, fallback) {
  const numeric = toNumber(value);
  return numeric != null ? numeric : fallback;
}

function normalizeConfigValue(key, value, fallback) {
  const defaultValue = fallback ?? defaultConfig[key];
  if (value == null || value === "") {
    return defaultValue;
  }
  if (typeof defaultConfig[key] === "boolean") {
    return sanitizeBoolean(value, defaultValue);
  }
  if (typeof defaultConfig[key] === "number") {
    return sanitizeNumber(value, defaultValue);
  }
  const coerced = toCssValue(value);
  if (coerced == null || coerced === "") {
    return defaultValue;
  }
  return coerced;
}

function parseIgnoreList(value) {
  if (!value) return [];
  if (Array.isArray(value)) {
    return Array.from(
      new Set(
        value
          .map((entry) => String(entry ?? "").trim().toLowerCase())
          .filter(Boolean)
      )
    );
  }
  return Array.from(
    new Set(
      String(value)
        .split(/[\s,]+/)
        .map((entry) => entry.trim().toLowerCase())
        .filter(Boolean)
    )
  );
}

const paramMap = {
  accent: "accentColor",
  accentsecondary: "accentColorSecondary",
  bgstart: "backgroundGradientStart",
  bgend: "backgroundGradientEnd",
  bubblestart: "messageGradientStart",
  bubbleend: "messageGradientEnd",
  border: "messageBorderColor",
  shadow: "messageShadowColor",
  username: "usernameColor",
  headercolor: "headerTextColor",
  headericoncolor: "headerIconColor",
  headericonshadow: "headerIconShadow",
  messagecolor: "messageTextColor",
  pronouncolor: "pronounTextColor",
  rolepillcolor: "rolePillBackground",
  badgecolor: "badgeTextColor",
  badgeglow: "badgeGlowColor",
  badgeborder: "badgeBorderColor",
  indicatorcolor: "indicatorColor",
  indicatorbg: "indicatorBackground",
  viewercolor: "roleViewerColor",
  subcolor: "roleSubscriberColor",
  modcolor: "roleModeratorColor",
  vipcolor: "roleVipColor",
  broadcastercolor: "roleBroadcasterColor",
  staffcolor: "roleStaffColor",
  botcolor: "roleBotColor",
  eventlabelcolor: "eventLabelColor",
  eventtextcolor: "eventTextColor",
  eventiconcolor: "eventIconColor",
  eventiconbg: "eventIconBackground",
  followcolor: "eventFollowerColor",
  subeventcolor: "eventSubscriberColor",
  gifteventcolor: "eventGiftColor",
  raideventcolor: "eventRaidColor",
  cheereventcolor: "eventCheerColor",
  tipeventcolor: "eventTipColor",
  defaulteventcolor: "eventDefaultColor",
  indicator: "indicatorIcon",
  title: "titleText",
  titleicon: "titleIcon"
};

const booleanParamMap = {
  badges: "showBadges",
  pronouns: "showPronouns",
  rolepill: "showRolePill",
  roleicon: "showRoleIcon",
  eventicon: "showEventIcon",
  eventlabel: "showEventLabel",
  decoration: "decoration",
  fade: "fadeOutEvents"
};

const numericParamMap = {
  limit: "messageLimit",
  duration: "eventDuration"
};

function parseWidgetParams() {
  const fieldData = window.fieldData ?? {};
  const params = new URLSearchParams(window.location.search);
  const previousConfig = { ...config };

  const sanitizedEntries = Object.entries(fieldData)
    .filter(([key]) => key in defaultConfig)
    .map(([key, value]) => [
      key,
      normalizeConfigValue(key, value, previousConfig[key] ?? defaultConfig[key])
    ]);

  let nextConfig = {
    ...defaultConfig,
    ...previousConfig,
    ...Object.fromEntries(sanitizedEntries)
  };

  const overrides = {};

  Object.entries(paramMap).forEach(([param, key]) => {
    if (params.has(param)) {
      overrides[key] = normalizeConfigValue(
        key,
        params.get(param),
        nextConfig[key]
      );
    }
  });

  Object.entries(booleanParamMap).forEach(([param, key]) => {
    if (params.has(param)) {
      overrides[key] = sanitizeBoolean(params.get(param), nextConfig[key]);
    }
  });

  Object.entries(numericParamMap).forEach(([param, key]) => {
    if (params.has(param)) {
      overrides[key] = sanitizeNumber(params.get(param), nextConfig[key]);
    }
  });

  if (params.has("align")) {
    overrides.alignMessages = params.get("align");
  }

  nextConfig = {
    ...nextConfig,
    ...overrides
  };

  const ignoreValue =
    fieldData.ignoreUsers ?? params.get("ignore") ?? nextConfig.ignoreUsers;
  nextConfig.ignoreUsers = parseIgnoreList(ignoreValue);

  nextConfig.messageLimit = Math.max(1, Math.round(nextConfig.messageLimit));
  nextConfig.eventDuration = Math.max(0, Math.round(nextConfig.eventDuration));
  nextConfig.alignMessages = nextConfig.alignMessages === "top" ? "top" : "bottom";
  nextConfig.indicatorIcon =
    (nextConfig.indicatorIcon || defaultConfig.indicatorIcon).trim() ||
    defaultConfig.indicatorIcon;

  config = nextConfig;
}

function applyTheme() {
  const root = document.documentElement;
  const set = (variable, value) => {
    if (value == null) return;
    if (typeof value === "string" && value.trim().toLowerCase() === "auto") {
      root.style.removeProperty(variable);
      return;
    }
    root.style.setProperty(variable, value);
  };

  set("--accent-color", config.accentColor);
  set("--accent-color-secondary", config.accentColorSecondary);
  const accentPalette = createPalette(config.accentColor, defaultConfig.accentColor);
  if (accentPalette) {
    set("--accent-color-soft", accentPalette.soft);
    set("--role-default-shadow", accentPalette.shadow);
  }

  set("--background-gradient-start", config.backgroundGradientStart);
  set("--background-gradient-end", config.backgroundGradientEnd);
  set("--message-gradient-start", config.messageGradientStart);
  set("--message-gradient-end", config.messageGradientEnd);
  set("--message-border-color", config.messageBorderColor);
  set("--message-shadow-color", config.messageShadowColor);
  set("--username-color", config.usernameColor);
  set("--header-text-color", config.headerTextColor);
  set("--header-icon-color", config.headerIconColor);
  set("--header-icon-shadow", config.headerIconShadow);
  set("--message-text-color", config.messageTextColor);
  set("--pronoun-text-color", config.pronounTextColor);
  set("--role-pill-background", config.rolePillBackground);
  set("--badge-text-color", config.badgeTextColor);
  set("--badge-glow-color", config.badgeGlowColor);
  set("--badge-border-color", config.badgeBorderColor);
  set("--indicator-color", config.indicatorColor);
  set("--indicator-background", config.indicatorBackground);

  set("--role-viewer-color", config.roleViewerColor);
  set("--role-subscriber-color", config.roleSubscriberColor);
  set("--role-moderator-color", config.roleModeratorColor);
  set("--role-vip-color", config.roleVipColor);
  set("--role-broadcaster-color", config.roleBroadcasterColor);
  set("--role-staff-color", config.roleStaffColor);
  set("--role-bot-color", config.roleBotColor);

  set("--event-label-color", config.eventLabelColor);
  set("--event-text-color", config.eventTextColor);
  set("--event-icon-background", config.eventIconBackground);
  set("--event-icon-color", config.eventIconColor);
  set("--event-follower-color", config.eventFollowerColor);
  set("--event-subscriber-color", config.eventSubscriberColor);
  set("--event-gift-color", config.eventGiftColor);
  set("--event-raid-color", config.eventRaidColor);
  set("--event-cheer-color", config.eventCheerColor);
  set("--event-tip-color", config.eventTipColor);
  set("--event-default-color", config.eventDefaultColor);

  if (overlay) {
    overlay.dataset.align = config.alignMessages === "top" ? "top" : "bottom";
  }

  if (decorationRoot) {
    decorationRoot.style.display = config.decoration ? "block" : "none";
  }

  if (titleTextEl) {
    titleTextEl.textContent = config.titleText;
  }

  if (titleIconEl) {
    titleIconEl.textContent = config.titleIcon;
  }

  indicatorHearts.forEach((heart) => {
    heart.textContent = config.indicatorIcon;
  });

  refreshExistingMessages();
  refreshExistingEvents();
  enforceMessageLimit();
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

function formatBadgeLabel(badge) {
  if (!badge) return null;
  const [name] = String(badge).toLowerCase().split("/");
  const label = badgeLabels[name] || name;
  return label.toUpperCase();
}

function getDisplayName(data) {
  return (
    data?.displayName ||
    data?.name ||
    data?.nick ||
    data?.user ||
    data?.username ||
    data?.from ||
    "Someone"
  );
}

function getMessageText(data) {
  if (!data) return "";
  if (typeof data.renderedText === "string" && data.renderedText.trim()) {
    return data.renderedText;
  }
  if (typeof data.text === "string" && data.text.trim()) {
    return data.text;
  }
  if (typeof data.message === "string" && data.message.trim()) {
    return data.message;
  }
  if (Array.isArray(data.messageArray)) {
    return data.messageArray.map((part) => part?.text ?? "").join("");
  }
  if (Array.isArray(data.fragments)) {
    return data.fragments.map((part) => part?.text ?? "").join("");
  }
  return "";
}

function getRole(data) {
  const badges = extractBadgeNames(data).map((badge) => badge.toLowerCase());
  if (badges.some((badge) => badge.startsWith("broadcaster"))) return "broadcaster";
  if (badges.some((badge) => badge.startsWith("moderator"))) return "moderator";
  if (badges.some((badge) => badge.startsWith("vip"))) return "vip";
  if (badges.some((badge) => badge.startsWith("founder"))) return "founder";
  if (badges.some((badge) => badge.startsWith("staff"))) return "staff";
  if (badges.some((badge) => badge.startsWith("subscriber"))) return "subscriber";
  if ((data?.nick || "").toLowerCase() === "streamelements") return "bot";
  if (String(data?.tags?.mod) === "1") return "moderator";
  if (String(data?.tags?.vip) === "1") return "vip";
  if (String(data?.tags?.subscriber) === "1") return "subscriber";
  return "viewer";
}

function shouldIgnore(username) {
  return config.ignoreUsers.includes(String(username ?? "").toLowerCase());
}

function determineMessageSize(message) {
  if (!message) return "sm";
  if (message.length > 160) return "xl";
  if (message.length > 90) return "lg";
  if (message.length > 45) return "md";
  return "sm";
}

function describeTier(value) {
  if (!value) return "";
  const raw = String(value);
  const digits = raw.replace(/[^0-9]/g, "");
  if (!digits) return raw.toUpperCase();
  const numeric = Number(digits);
  if (!Number.isFinite(numeric) || numeric <= 0) return raw.toUpperCase();
  if (numeric >= 1000) {
    const tier = Math.round(numeric / 1000);
    return `Tier ${tier}`;
  }
  return `Tier ${numeric}`;
}

function pluralize(word, count) {
  return count === 1 ? word : `${word}s`;
}

function formatCurrency(value, currency) {
  if (value == null || value === "") return "a tip";
  const numeric = toNumber(value);
  if (numeric != null) {
    const code = typeof currency === "string" && currency ? currency.toUpperCase() : "USD";
    try {
      return new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: code
      }).format(numeric);
    } catch (error) {
      return `${numeric} ${code}`.trim();
    }
  }
  if (typeof value === "string") {
    return value;
  }
  return String(value);
}

function buildEventContext(data = {}) {
  return {
    name: getDisplayName(data),
    amountNumber: toNumber(data.amount),
    amountRaw: data.amount,
    formattedAmount: data.formattedAmount ?? data.message ?? data.tipAmount,
    monthsNumber: toNumber(data.months ?? data.amount),
    streakNumber: toNumber(data.streak ?? data.streakMonths ?? data.monthsStreak),
    bitsNumber: toNumber(data.bits ?? data.amount ?? data.count),
    viewersNumber: toNumber(data.viewers ?? data.raiders ?? data.amount ?? data.count),
    quantityNumber: toNumber(
      data.count ?? data.quantity ?? data.total ?? data.giftAmount ?? data.giftCount
    ),
    giftTotal: toNumber(data.bulkGifted ?? data.communityGift ?? data.giftTotal ?? data.amount),
    recipient:
      data.recipient ??
      data.giftRecipient ??
      data.giftee ??
      data.username ??
      data.to ??
      data.target,
    currency: data.currency ?? data.currencyCode ?? data.code ?? data.symbol,
    tier: data.tier ?? data.plan ?? data.subPlan,
    raw: data
  };
}

function determineEventVariant(listener, data = {}) {
  if (typeof listener !== "string") return "default";
  const normalized = listener.toLowerCase();
  const base = normalized.replace(/-?(latest|event|recent)$/i, "");

  if (base.includes("community") && base.includes("gift")) return "communitygift";
  if (base.includes("gift")) return "gift";

  switch (base) {
    case "follower":
      return "follower";
    case "subscriber":
    case "sub":
      if (data.isCommunityGift || data.bulkGifted || data.communityGift) return "communitygift";
      if (data.gifted || data.isGift || data.giftAmount) return "gift";
      if (toNumber(data.amount) > 1 && !data.gifted) return "resub";
      if (toNumber(data.months) > 1 && !data.gifted) return "resub";
      return "subscriber";
    case "resub":
      return "resub";
    case "raid":
      return "raid";
    case "host":
      return "host";
    case "cheer":
      return "cheer";
    case "tip":
    case "donation":
      return "tip";
    case "merch":
      return "merch";
    case "redemption":
    case "item":
    case "reward":
      return "redemption";
    case "charity":
      return "charity";
    default:
      if (base.includes("raid")) return "raid";
      if (base.includes("cheer")) return "cheer";
      if (base.includes("tip") || base.includes("donat")) return "tip";
      if (base.includes("merch")) return "merch";
      if (base.includes("redemption") || base.includes("redeem")) return "redemption";
      return "default";
  }
}

function getEventDetails(listener, data) {
  const variant = determineEventVariant(listener, data);
  const definition = eventDefinitions[variant] || eventDefinitions.default;
  const context = { ...buildEventContext(data), variant };
  return {
    variant,
    icon: definition.icon,
    label: definition.label,
    colorKey: definition.colorKey,
    message: definition.message(context)
  };
}

function renderMessage(data) {
  if (!messageTemplate) return null;
  const template = messageTemplate.content.cloneNode(true);
  const article = template.querySelector(".chat-message");
  const iconEl = template.querySelector(".chat-message__icon");
  const userEl = template.querySelector(".chat-message__user");
  const pronounEl = template.querySelector(".chat-message__pronouns");
  const textEl = template.querySelector(".chat-message__text");
  const badgeEl = template.querySelector(".chat-message__badge");
  const roleEl = template.querySelector(".chat-message__role");

  const username = getDisplayName(data);
  const messageText = getMessageText(data);
  const pronouns = data?.tags?.pronouns ?? data?.pronouns ?? "";
  const role = getRole(data);
  const themeRole = role === "founder" ? "subscriber" : role;

  article.dataset.role = themeRole;
  article.dataset.originalRole = role;
  article.dataset.messageId = data?.msgId || data?.id || "";
  article.dataset.size = determineMessageSize(messageText);
  article.dataset.pronouns = pronouns || "";

  userEl.textContent = username;
  textEl.textContent = messageText;

  const badgeName = extractBadgeNames(data)[0];
  const badgeLabel = formatBadgeLabel(badgeName);
  const roleLabel = roleLabels[role] || roleLabels.viewer;
  const icon = roleIcons[role] || roleIcons.viewer;

  article.dataset.badgeLabel = badgeLabel || "";
  article.dataset.roleLabel = roleLabel;
  article.dataset.icon = icon;

  pronounEl.textContent = pronouns;
  badgeEl.textContent = badgeLabel ?? "";
  roleEl.textContent = roleLabel;
  iconEl.textContent = icon;

  updateMessageAppearance(article);

  return article;
}

function resolveRolePalette(role) {
  const colorKey = roleColorKeys[role] || null;
  const baseColor = (colorKey && config[colorKey]) || config.accentColor;
  return createPalette(baseColor, config.accentColor);
}

function updateMessageAppearance(article) {
  if (!article) return;

  const iconEl = article.querySelector(".chat-message__icon");
  const pronounEl = article.querySelector(".chat-message__pronouns");
  const badgeEl = article.querySelector(".chat-message__badge");
  const roleEl = article.querySelector(".chat-message__role");

  const themeRole = article.dataset.role || "viewer";
  const originalRole = article.dataset.originalRole || themeRole || "viewer";

  if (iconEl) {
    const icon = article.dataset.icon || roleIcons[originalRole] || roleIcons.viewer;
    if (config.showRoleIcon && icon) {
      iconEl.textContent = icon;
      iconEl.hidden = false;
    } else {
      iconEl.hidden = true;
    }
  }

  if (pronounEl) {
    const pronounText = article.dataset.pronouns || pronounEl.textContent || "";
    if (config.showPronouns && pronounText) {
      pronounEl.textContent = pronounText;
      pronounEl.hidden = false;
    } else {
      pronounEl.hidden = true;
    }
  }

  if (roleEl) {
    const roleLabel = article.dataset.roleLabel || roleLabels[originalRole] || roleLabels.viewer;
    if (!config.showRolePill || themeRole === "viewer") {
      roleEl.hidden = true;
    } else {
      roleEl.textContent = roleLabel;
      roleEl.hidden = false;
    }
  }

  if (badgeEl) {
    const badgeLabel = article.dataset.badgeLabel || badgeEl.textContent || "";
    if (config.showBadges && badgeLabel) {
      badgeEl.textContent = badgeLabel;
      badgeEl.hidden = false;
    } else {
      badgeEl.hidden = true;
    }
  }

  const palette = resolveRolePalette(themeRole);
  if (palette) {
    article.style.setProperty("--role-accent", palette.base);
    article.style.setProperty("--role-accent-soft", palette.soft);
    article.style.setProperty("--role-accent-strong", palette.strong);
    article.style.setProperty("--role-accent-border", palette.border);
    article.style.setProperty("--role-accent-shadow", palette.shadow);
    article.style.setProperty("--role-accent-glow", palette.glow);
  } else {
    article.style.removeProperty("--role-accent");
    article.style.removeProperty("--role-accent-soft");
    article.style.removeProperty("--role-accent-strong");
    article.style.removeProperty("--role-accent-border");
    article.style.removeProperty("--role-accent-shadow");
    article.style.removeProperty("--role-accent-glow");
  }
}

function refreshExistingMessages() {
  if (!container) return;
  const messages = container.querySelectorAll(".chat-message");
  messages.forEach((message) => updateMessageAppearance(message));
}

function appendMessage(element) {
  if (!container || !element) return;
  if (config.alignMessages === "top") {
    container.prepend(element);
  } else {
    container.appendChild(element);
  }
  enforceMessageLimit();
}

function enforceMessageLimit() {
  if (!container) return;
  while (container.children.length > config.messageLimit) {
    const node =
      config.alignMessages === "top"
        ? container.lastElementChild
        : container.firstElementChild;
    node?.remove();
  }
}

function resolveMessagePayload(payload) {
  if (!payload) return null;
  if (payload.data) return payload.data;
  if (payload.event?.data) return payload.event.data;
  if (payload.event) return payload.event;
  return payload;
}

function handleChatMessage(payload) {
  const data = resolveMessagePayload(payload);
  if (!data) return;
  if (shouldIgnore(data.displayName || data.nick || data.user || data.name)) return;
  const element = renderMessage(data);
  appendMessage(element);
}

function renderEvent(listener, data) {
  if (!eventTemplate) return;
  const details = getEventDetails(listener, data);
  const template = eventTemplate.content.cloneNode(true);
  const article = template.querySelector(".chat-event");
  const iconEl = template.querySelector(".chat-event__icon");
  const labelEl = template.querySelector(".chat-event__label");
  const textEl = template.querySelector(".chat-event__text");

  article.dataset.variant = details.variant;
  article.dataset.colorKey = details.colorKey;
  article.dataset.icon = details.icon;
  article.dataset.label = details.label;

  iconEl.textContent = details.icon;
  if (labelEl) {
    labelEl.textContent = details.label;
  }

  textEl.textContent = details.message;

  updateEventAppearance(article);

  if (config.alignMessages === "top") {
    container?.prepend(article);
  } else {
    container?.appendChild(article);
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

function updateEventAppearance(article) {
  if (!article) return;

  const iconEl = article.querySelector(".chat-event__icon");
  const labelEl = article.querySelector(".chat-event__label");

  if (iconEl) {
    const icon = article.dataset.icon || iconEl.textContent || "";
    if (config.showEventIcon && icon) {
      iconEl.textContent = icon;
      iconEl.hidden = false;
    } else {
      iconEl.hidden = true;
    }
  }

  if (labelEl) {
    const label = article.dataset.label || labelEl.textContent || "";
    if (config.showEventLabel && label) {
      labelEl.textContent = label;
      labelEl.hidden = false;
    } else {
      labelEl.hidden = true;
    }
  }

  applyEventPalette(article);
}

function applyEventPalette(article) {
  if (!article) return;

  const variant = article.dataset.variant || "default";
  const definition = eventDefinitions[variant] || eventDefinitions.default;
  const colorKey = article.dataset.colorKey || definition.colorKey || "eventDefaultColor";
  const baseColor = config[colorKey] || config.eventDefaultColor;
  const palette = createPalette(baseColor, config.eventDefaultColor);

  if (palette) {
    article.style.setProperty("--event-gradient-start", palette.soft);
    article.style.setProperty("--event-gradient-end", palette.strong);
    article.style.setProperty("--event-border-color", palette.border);
    article.style.setProperty("--event-shadow-color", palette.shadow);
    article.style.setProperty("--event-glow-color", palette.glow);

    const iconBackgroundSetting = String(config.eventIconBackground ?? "").trim().toLowerCase();
    const iconColorSetting = String(config.eventIconColor ?? "").trim().toLowerCase();
    const labelColorSetting = String(config.eventLabelColor ?? "").trim().toLowerCase();
    const textColorSetting = String(config.eventTextColor ?? "").trim().toLowerCase();

    if (!config.eventIconBackground || iconBackgroundSetting === "auto") {
      const fallbackBackground = `linear-gradient(135deg, rgba(255, 255, 255, 0.92), ${palette.soft})`;
      article.style.setProperty("--event-icon-background", fallbackBackground);
    } else {
      article.style.setProperty("--event-icon-background", config.eventIconBackground);
    }

    if (!config.eventIconColor || iconColorSetting === "auto") {
      article.style.setProperty(
        "--event-icon-color",
        palette.base || config.accentColor || defaultConfig.accentColor
      );
    } else {
      article.style.setProperty("--event-icon-color", config.eventIconColor);
    }

    if (config.eventLabelColor && labelColorSetting !== "auto") {
      article.style.setProperty("--event-label-color", config.eventLabelColor);
    } else {
      article.style.removeProperty("--event-label-color");
    }

    if (config.eventTextColor && textColorSetting !== "auto") {
      article.style.setProperty("--event-text-color", config.eventTextColor);
    } else {
      article.style.removeProperty("--event-text-color");
    }
  } else {
    article.style.removeProperty("--event-gradient-start");
    article.style.removeProperty("--event-gradient-end");
    article.style.removeProperty("--event-border-color");
    article.style.removeProperty("--event-shadow-color");
    article.style.removeProperty("--event-glow-color");

    if (config.eventIconBackground) {
      article.style.setProperty("--event-icon-background", config.eventIconBackground);
    } else {
      article.style.removeProperty("--event-icon-background");
    }

    if (config.eventIconColor) {
      article.style.setProperty("--event-icon-color", config.eventIconColor);
    } else {
      article.style.removeProperty("--event-icon-color");
    }

    if (config.eventLabelColor) {
      article.style.setProperty("--event-label-color", config.eventLabelColor);
    } else {
      article.style.removeProperty("--event-label-color");
    }

    if (config.eventTextColor) {
      article.style.setProperty("--event-text-color", config.eventTextColor);
    } else {
      article.style.removeProperty("--event-text-color");
    }
  }
}

function refreshExistingEvents() {
  if (!container) return;
  const events = container.querySelectorAll(".chat-event");
  events.forEach((eventEl) => updateEventAppearance(eventEl));
}

function handleEventReceived(event) {
  const detail = event?.detail;
  if (!detail) return;
  const { listener, event: eventData } = detail;

  if (listener === "message") {
    handleChatMessage(eventData);
    return;
  }

  if (!eventData) return;
  renderEvent(listener, eventData);
}

function handleSettingsUpdate(event) {
  const fieldData = event?.detail?.fieldData;
  if (!fieldData) return;
  window.fieldData = fieldData;
  parseWidgetParams();
  applyTheme();
}

function handleMessageDelete(event) {
  const messageId = event?.detail?.event?.msgId;
  if (!messageId) return;
  const selector = `.chat-message[data-message-id="${messageId}"]`;
  const message = document.querySelector(selector);
  if (message) {
    message.style.transition = "opacity 0.3s ease";
    message.style.opacity = "0";
    setTimeout(() => message.remove(), 300);
  }
}

function ready(event) {
  if (event?.detail?.fieldData) {
    window.fieldData = event.detail.fieldData;
  }
  parseWidgetParams();
  applyTheme();
}

ready();

window.addEventListener("onWidgetLoad", ready);
window.addEventListener("onEventReceived", handleEventReceived);
window.addEventListener("onWidgetSettingsUpdate", handleSettingsUpdate);
window.addEventListener("onEventDeleted", handleMessageDelete);

if (!window.StreamElements) {
  const demoMessages = [
    {
      displayName: "cozysprites",
      text: "All of the box + font colors are fully customizable!",
      tags: { pronouns: "she/her", badges: ["broadcaster"] }
    },
    {
      displayName: "mae",
      text: "This is a sample subscriber message with plenty of cozy vibes.",
      tags: { pronouns: "they/them", badges: ["subscriber"] }
    },
    {
      displayName: "augusta",
      text: "Different chat message sizes look adorable in this layout!",
      tags: { pronouns: "he/him", badges: ["vip"] }
    }
  ];

  demoMessages.forEach((data, index) => {
    setTimeout(() => handleChatMessage({ data }), index * 600 + 250);
  });

  setTimeout(() => {
    renderEvent("follower-latest", { name: "bamby" });
  }, 2400);

  setTimeout(() => {
    renderEvent("subscriber-latest", { name: "cozysprites", amount: 3, tier: "Tier 1" });
  }, 3800);

  setTimeout(() => {
    renderEvent("cheer-latest", { name: "augusta", amount: 150 });
  }, 5200);

  setTimeout(() => {
    renderEvent("raid-latest", { name: "buyer", raiders: 20 });
  }, 6600);
}
