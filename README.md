# Cozy Nature Chat Overlay Pack

A pastel-inspired StreamElements overlay bundle for Twitch. Includes a customizable chat widget, matching goal tracker, animated stream decorations, and a webcam border that keeps your broadcast feeling warm and inviting.

## Contents

- **Plant Chat Widget** – Cozy chat experience with role icons, pronoun display, and celebration alerts.
- **Goal Widget** – Minimal tracker styled to match the chat panel.
- **Looping Animations** – Drop-in CSS layer for drifting firefly particles.
- **Webcam Border** – Soft gradient frame in SVG format.

## Chat Widget Features

The chat widget can be found at `src/widgets/plant-chat-widget/`. It ships with the following features out of the box:

- Twitch role icons for StreamElements (broadcaster, moderator, VIP, subscriber, etc.).
- Toggleable pronouns, badge visibility, and role pills.
- Fully themable pastel gradient background, bubble, badge, and typography colors via CSS variables or widget settings.
- Message alignment controls (top or bottom stacking) and message limit management to keep the panel tidy.
- User ignore list plus toggles for pronouns, badges, role pills, role icons, event icons, and labels.
- Animated alerts for follows, new subs, resubs, sub gifts, cheers, tips, raids, hosts, charity, merch, and channel point redemptions.
- Floating sparkle decorations with optional toggle and customizable header text/indicator icons.

### Usage (StreamElements Overlay)

1. Create a **Custom Widget** in StreamElements and upload the files from `src/widgets/plant-chat-widget/`.
2. Paste `index.html` into the **HTML** tab, `styles.css` into **CSS**, and `widget.js` into **JS**.
3. Adjust widget settings either by editing `fieldData` in StreamElements or via URL parameters on your overlay source. Supported parameters mirror the `defaultConfig` keys in `widget.js` and include:
   - **Core palette:** `accent`, `accentsecondary`, `bgstart`, `bgend`, `bubblestart`, `bubbleend`, `border`, `shadow`
   - **Text & badges:** `username`, `messagecolor`, `pronouncolor`, `rolepillcolor`, `badgecolor`, `badgeglow`, `badgeborder`
   - **Role accents:** `viewercolor`, `subcolor`, `modcolor`, `vipcolor`, `broadcastercolor`, `staffcolor`, `botcolor`
   - **Event accents:** `followcolor`, `subeventcolor`, `gifteventcolor`, `raideventcolor`, `cheereventcolor`, `tipeventcolor`, `defaulteventcolor`
   - **Behavior:** `align=top|bottom`, `limit=NUMBER`, `duration=NUMBER`, `fade=true|false`, `ignore=user1,user2`
   - **Toggles:** `badges`, `pronouns`, `rolepill`, `roleicon`, `eventicon`, `eventlabel`, `decoration` (all `true|false`)
   - **Header flair:** `title`, `titleicon`, `indicator`
4. Optional: include `assets/animations/fireflies.css` and add the `.firefly-layer` markup to layer animated fireflies over the widget.

Every option can also be surfaced inside the StreamElements widget settings UI by mapping the same field names listed above.

## Goal Widget

Located at `src/widgets/goal-widget/`, this tracker mirrors the chat widget aesthetic. It displays a firefly-illuminated progress bar and supports the same StreamElements configuration workflow.

Supported URL parameters / `fieldData` overrides:

- `title` – Goal title (e.g. *New Cozy Emotes*).
- `type` – Text label used to match incoming events (Followers, Subscribers, etc.).
- `current` – Starting progress number.
- `goal` – Target number.
- `accent`, `background`, `fill` – Theme colors.
- `firefly=true|false` – Toggle the animated firefly.

The widget listens for StreamElements events (`follower-latest`, `subscriber-latest`, `cheer-latest`, `tip-latest`, `raid-latest`) and automatically increments progress when the event name matches the configured goal type text.

## Stream Decorations

`assets/animations/fireflies.css` contains a reusable firefly animation layer. Drop the stylesheet into OBS or your StreamElements overlay and add markup similar to:

```html
<link rel="stylesheet" href="fireflies.css" />
<div class="firefly-layer">
  <span class="firefly" style="top:10%;left:15%"></span>
  <span class="firefly" style="top:60%;left:55%"></span>
  <span class="firefly" style="top:30%;left:80%"></span>
</div>
```

The animation loops infinitely for a subtle ambient effect.

## Webcam Border

An SVG frame lives at `assets/webcam/cozy-webcam-border.svg`. Import it into OBS or StreamElements as an image source and resize to frame your camera feed. The design features a soft gradient border with ambient highlights to match the rest of the overlay pack.

## Local Preview

Open the widget HTML files directly in a browser to see demo messages, events, and progress updates. When loaded outside StreamElements the widgets run in **demo mode** with mock data.
