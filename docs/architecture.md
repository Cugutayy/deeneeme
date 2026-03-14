# ALSANCAK RUNNERS — Site Architecture

## Experience Principles
- Story first, sections second: every block behaves like a scene.
- Editorial photo dominance over UI chrome.
- Motion as narrative (reveal, parallax, scroll-driven route, hover depth).

## Information Architecture
- Home: cinematic storytelling journey.
- Runs: upcoming + past runs with route and recaps.
- Collaborations: campaign case-study pages.
- Gallery: editorial wall with filters + fullscreen viewer.
- About: manifesto + mission + team.
- Join: frictionless community onboarding form.

## Component System
- `Navbar`: persistent transparent nav shell.
- `Hero`: video-first opening scene.
- `RunCard`: reusable run metadata + image card.
- `MasonryGrid` / Editorial Grid: photo storytelling units.
- `MotionReveal`: reusable reveal primitive.

## Signature Interactions
1. Cursor tilt distortion on key imagery/cards.
2. Scroll-drawn running route map with moving runner indicator.
3. Slow zoom/parallax treatment on major scene photography.

## CMS Content Model (Sanity)
- `run`: title, date, location, distance, recap.
- `photo`: title, category, image.
- `collaboration`: title, description, hero image, video URL.
- `team`: name, role, photo.

## Phase Verification Checklist
- Phase 1: tokens + wireframe + components reviewed for visual consistency.
- Phase 2: homepage scenes validate hierarchy and storytelling flow.
- Phase 3: motion pass checks smoothness on desktop/mobile.
- Phase 4: CMS schema parity with UI sections.
- Phase 5: performance pass (lazy loading, media weight, Lighthouse target).
