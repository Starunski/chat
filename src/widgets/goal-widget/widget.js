const defaultGoalConfig = {
  title: "Garden Goal",
  type: "Followers",
  current: 0,
  goal: 100,
  accent: "#B0766C",
  background: "rgba(28, 22, 20, 0.65)",
  fill: "linear-gradient(90deg, #e0a39b, #b0766c)",
  animateFirefly: true
};

const goalWidget = document.querySelector(".goal-widget");
const titleEl = document.getElementById("goal-title");
const typeEl = document.getElementById("goal-type");
const valueEl = document.getElementById("goal-value");
const remainingEl = document.getElementById("goal-remaining");
const fillEl = document.getElementById("goal-fill");
const fireflyEl = document.querySelector(".goal-widget__firefly");

let config = { ...defaultGoalConfig };

function parseGoalConfig() {
  const params = new URLSearchParams(window.location.search);
  const fieldData = window.fieldData ?? {};

  config = {
    ...config,
    ...Object.fromEntries(
      Object.entries(fieldData).filter(([key]) => key in defaultGoalConfig)
    )
  };

  if (params.has("title")) config.title = params.get("title");
  if (params.has("type")) config.type = params.get("type");
  if (params.has("current")) config.current = Number(params.get("current"));
  if (params.has("goal")) config.goal = Number(params.get("goal"));
  if (params.has("accent")) config.accent = params.get("accent");
  if (params.has("background")) config.background = params.get("background");
  if (params.has("fill")) config.fill = params.get("fill");
  if (params.has("firefly")) config.animateFirefly = params.get("firefly") !== "false";

  config.current = Number.isFinite(config.current) ? config.current : 0;
  config.goal = Number.isFinite(config.goal) ? config.goal : 100;
  config.goal = Math.max(config.goal, 1);
  config.current = Math.max(config.current, 0);
}

function applyGoalTheme() {
  document.documentElement.style.setProperty("--goal-accent", config.accent);
  document.documentElement.style.setProperty("--goal-background", config.background);
  document.documentElement.style.setProperty("--goal-fill", config.fill);
  fireflyEl.style.display = config.animateFirefly ? "block" : "none";
}

function updateDisplay() {
  const percent = Math.min((config.current / config.goal) * 100, 100);
  const remaining = Math.max(Math.ceil(config.goal - config.current), 0);

  titleEl.textContent = config.title;
  typeEl.textContent = config.type;
  valueEl.textContent = `${Math.floor(config.current)} / ${config.goal}`;
  remainingEl.textContent = remaining > 0 ? `${remaining} to go` : `Goal reached!`;

  fillEl.style.width = `${percent}%`;
  goalWidget.setAttribute("aria-valuenow", percent.toFixed(0));
}

const goalKeywords = {
  "follower-latest": ["follow"],
  "subscriber-latest": ["sub", "member"],
  "cheer-latest": ["cheer", "bit"],
  "tip-latest": ["tip", "donation", "donate"],
  "raid-latest": ["raid"]
};

function incrementForListener(listener, event) {
  switch (listener) {
    case "follower-latest":
      return 1;
    case "subscriber-latest":
      return Number(event?.amount ?? event?.quantity ?? 1) || 1;
    case "cheer-latest":
      return Number(event?.amount ?? event?.bits ?? 1) || 1;
    case "tip-latest":
      return Number(event?.amount ?? event?.value ?? 1) || 1;
    case "raid-latest":
      return Number(event?.amount ?? event?.raiders ?? 1) || 1;
    default:
      return 0;
  }
}

function matchesGoalType(listener) {
  const keywords = goalKeywords[listener];
  if (!keywords) return false;
  const normalized = config.type.toLowerCase();
  return keywords.some((keyword) => normalized.includes(keyword));
}

function handleEvent(detail) {
  if (!detail) return;
  const { listener, event } = detail;

  if (listener === "message") return;
  if (!listener || !event) return;
  if (!matchesGoalType(listener)) return;

  const increment = incrementForListener(listener, event);
  if (increment <= 0) return;

  config.current += increment;
  updateDisplay();
}

function handleWidgetLoad({ detail }) {
  const { fieldData } = detail || {};
  window.fieldData = fieldData;
  parseGoalConfig();
  applyGoalTheme();
  updateDisplay();
}

parseGoalConfig();
applyGoalTheme();
updateDisplay();

window.addEventListener("onWidgetLoad", handleWidgetLoad);
window.addEventListener("onEventReceived", ({ detail }) => handleEvent(detail));

if (!window.StreamElements) {
  let progress = config.current;
  const demo = setInterval(() => {
    progress += Math.random() * 5;
    config.current = Math.min(progress, config.goal);
    updateDisplay();
    if (progress >= config.goal) clearInterval(demo);
  }, 1200);
}
