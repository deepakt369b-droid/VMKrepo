---
wave: 1
depends_on: []
files_modified: ["src/contexts/UIContext.tsx", "src/components/Navbar.tsx", "src/app/layout.tsx"]
autonomous: true
---

# Phase 3: Experience & Optimization Plan

## Objective
Integrate the global background music player, enforce the premium Dark/Amber theme, and establish a baseline for PageSpeed optimization.

## Requirements
- UI-04: Global Theme Enforcement.
- UI-05: Background Audio (Muted by default, Top-Right Toggle, Placeholder track).
- ARCH-04: PageSpeed & SEO Enforcement.

## Tasks

<tasks>

<task>
  <id>audio-context</id>
  <description>Enhance UIContext to manage global Audio State.</description>
  <instructions>
  1. Open `src/contexts/UIContext.tsx`.
  2. Add `isAudioPlaying: boolean` and `toggleAudio: () => void` to the `UIContextType`.
  3. Implement the state and toggle function in the `UIProvider`.
  4. Ensure the default state is `false` (muted/paused by default).
  </instructions>
</task>

<task>
  <id>audio-player</id>
  <description>Integrate the Audio Element and Toggle Button in Navbar.</description>
  <instructions>
  1. Open `src/components/Navbar.tsx`.
  2. Import an audio file (or use a stable remote URL placeholder for ambient music).
  3. Add an `<audio>` tag with `ref={audioRef}` and `loop`. Do NOT add `autoPlay`.
  4. Use a `useEffect` hooked to `isAudioPlaying` from `useUI()` to call `audioRef.current.play()` or `audioRef.current.pause()`.
  5. Add a toggle button (using `Volume2` and `VolumeX` from `lucide-react`) to the right side of the Navbar, next to the "Get a Quote" button.
  </instructions>
</task>

<task>
  <id>seo-optimization</id>
  <description>Audit and refine SEO Meta Tags and Theme.</description>
  <instructions>
  1. Open `src/app/layout.tsx`.
  2. Ensure the `metadata` object is fully robust (Title, Description, Keywords, OpenGraph).
  3. Verify that the global layout uses the `bg-black text-white` classes consistently to enforce the premium theme.
  </instructions>
</task>

<task>
  <id>performance-audit</id>
  <description>Review and optimize the Build.</description>
  <instructions>
  1. Ensure there are no large blocking scripts in the `head`.
  2. (Self-Verification) Run `npm run build` to confirm output sizes are minimal and Next.js can successfully statically generate all pages.
  </instructions>
</task>

</tasks>

## Verification

<must_haves>
- A play/mute speaker icon exists in the top right Navbar next to the Quote button.
- Clicking the speaker icon toggles the music on and off.
- The music does not play automatically when the page loads.
- The build completes successfully without errors or massive un-optimized bundle warnings.
</must_haves>
