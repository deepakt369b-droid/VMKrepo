# Phase 3: Experience & Optimization - Research

## Context and Requirements
- **Audio Integration (UI-05):** A background music player that starts muted by default, using a placeholder track, and features a toggle button in the top-right Navbar.
- **Global Theme Enforcement (UI-04):** Ensure all elements abide by the Dark/Amber premium VMK branding.
- **Performance & SEO (ARCH-04):** Ensure the application passes PageSpeed Insights with a 90+ score and maintains excellent local SEO tags.

## Technical Strategy

1. **Audio Player Implementation:**
   - We will create an `AudioContext` or enhance the existing `UIContext` to hold the `isAudioPlaying` state.
   - We will add an HTML5 `<audio>` element to the root layout or directly inside the `Navbar.tsx` component.
   - Using a royalty-free or base64 placeholder audio source, the `audioRef` will be commanded to play() or pause() based on the user clicking a new `Volume2` / `VolumeX` icon (from `lucide-react`) placed in the desktop and mobile navigation bar.
   - The audio element will have `loop` enabled and omit `autoPlay` to satisfy the "start muted" requirement and avoid browser audio-context blocking errors.

2. **Performance Optimization (PageSpeed):**
   - The GSAP Canvas animation (`ScrollAnimation.tsx`) is currently loading 180 JPEGs. This is very heavy for the initial page load. 
   - We need to ensure these images are preloaded gracefully and do not block the First Contentful Paint.
   - Move inline styles to Tailwind classes where applicable. 
   - Audit `layout.tsx` for font loading strategies (Geist is currently used via Next.js `next/font`, which is already optimal).

3. **Global Theme Enforcement:**
   - Review Tailwind config to ensure `#171717` (neutral-900) or pure black is the background, and `amber-500` is the primary accent.
   - Verify focus states on all form elements and links (`focus:ring-amber-500`).

## Validation Architecture

### 1. Verification Goals
- Verify the Audio toggle appears in the Navbar.
- Verify clicking the toggle plays audio, and clicking it again pauses it.
- Verify the build passes Lighthouse/PageSpeed metrics natively (as a proxy during local testing).

### 2. Required Tests
- **Audio Interaction Test:** Load the site (audio should be silent). Click the speaker icon in the Navbar. Audio should play. Click again, audio should pause.
- **Theme Consistency:** Manually inspect buttons, inputs, and links for Amber/Dark Mode consistency.
- **Performance Audit:** Run `npm run build` and evaluate the static bundle sizes. If possible, run a local Lighthouse audit on `http://localhost:3000`.
