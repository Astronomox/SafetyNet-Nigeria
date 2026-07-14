# CLAUDE_CONTEXT — SafetyNet Nigeria UI Rebuild
Updated: 2026-07-14 (rev 2)

## What happened this session
Full UI destroy-and-rebuild. New design system "National Ops Console" replaces the old glassmorphism/random-gradient UI.

## Design system (index.html)
- Palette: ink #060A08, panel #0B120F, panel-2 #101A15, bone #E9F2EC, ash #8CA396, mint #6CF0B4, naija #00915B, flare #FF4433, amber #FFB020
- Legacy tokens (brand-dark, surface-dark, primary-blue, primary-red, danger/success/warning) REMAPPED to the new palette so untouched pages inherit it automatically
- Type: Archivo (display, .display class = 900/uppercase/tight), IBM Plex Sans (body), IBM Plex Mono (.eyebrow, telemetry)
- Utility classes: .display, .eyebrow, .ops-panel, .ops-panel-solid, .ticks (corner brackets), .scanline
- Sharp corners (4px radius max) everywhere, no glassmorphism blobs

## New/rebuilt files
- components/SignalField.tsx — raw WebGL shader (terrain contours + radar pings). Zero deps, DPR capped 1.5, pauses offscreen/hidden, prefers-reduced-motion renders static frame, graceful null-context fallback
- components/Shell.tsx — responsive nav: BottomDock (<lg) / SideRail 240px (lg+). Replaces old BottomNav (deleted from components/ and pages/)
- App.tsx — ShellLayout wraps Home/Alerts/Profile/Library/History/Impact; FullScreen wraps Map/Chat/Report/Donate/Responder
- Rebuilt pages: Login, Signup, ForgotPassword (split-screen WebGL on desktop), Home (console hero + threat board + quick ops + live feed), Alerts (filterable feed + urgent banner), Profile (operator card + settings)

## Untouched (logic preserved, restyled via token remap only)
Chat, MapDashboard, Report, Donate, Impact, History, Responder, Library

## Known pre-existing issues (not introduced)
- index.tsx ErrorBoundary TS errors (missing state/props typing)
- import.meta.env TS errors (needs vite/client types in tsconfig)
- Bundle 2.2MB (mapbox-gl + leaflet both imported; consider code-splitting)

## Next candidates
- Restyle the 8 untouched pages into the ops system fully
- vite-env.d.ts to kill import.meta.env errors
- Code-split mapbox/leaflet

## Rev 2 changes (same day)
- Root cause of black/white screens: (a) geminiService.ts throws at module load without VITE_GEMINI_API_KEY, killing the app — user given lazy-init fix + .env.local instructions; (b) SignalField shader failed to compile on user's Windows GPU (highp fragment precision) with no compile check and no dark clear, leaving a WHITE canvas under white text
- SignalField hardened: clearColor(ink)+clear immediately on context creation, compile/link status checks with warn+bail (canvas stays ink), precision mediump
- Auth pages: SignalField REMOVED, replaced with components/AuthPanel.tsx — Wikimedia Commons photo (flooded house, Lagos Island, CC BY-SA, via Special:FilePath URL) under ink gradient overlays; solid ink base so text is readable even if image fails
- Login/Signup: image panel hidden below lg; mobile is a compact one-screen form (min-h-svh, tightened spacing)
- New pages/Landing.tsx at /welcome (RoutePath.LANDING added to types.ts): public landing with hero, stats strip, features, CTA
- Routing: catch-all and ProtectedRoute redirect now go to LANDING instead of LOGIN
- package-lock.json removed from repo — user is on pnpm (pnpm-lock.yaml is source of truth); esbuild needs pnpm approve-builds

## Rev 3 (landing polish)
- pages/Landing.tsx rebuilt: hero type clamped (text-4xl -> lg:text-6xl, min-h-[85svh]) to stop overflow; stats strip removed; page now long-form: hero -> ticker -> problem section (image) -> 3-step how-it-works -> 6 capabilities -> quote image break -> citizens/responders/agencies -> coverage grid -> CTA -> footer
- Three distinct Wikimedia images (flooded road Niamey hero, water house Lagos, Cms Odunlami street) via shared Photo component
- components/Icons.tsx: original stroke SVG icon set (13 icons: beacon, shield-pulse, route, tower, scan, airdrop, community, siren, sms, flood, fire, collapse, barrier) — square caps/miter joins to match ops aesthetic; brand mark switched from Material Symbol to IconBeacon on landing
