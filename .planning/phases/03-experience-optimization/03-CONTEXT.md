# Phase 3: Experience & Optimization - Context

**Gathered:** 2026-02-24
**Status:** Ready for planning

<domain>
## Phase Boundary

Integrating background audio (UI-05), enforcing global theme guidelines (UI-04), and running performance optimizations for PageSpeed and SEO (ARCH-04).
</domain>

<decisions>
## Implementation Decisions

### Music Source (UI-05)
- User selected **Placeholder Track**.
- We will integrate a placeholder public domain ambient track (e.g., a lo-fi or corporate audio file URL or base64 placeholder) initially until the client replaces the MP3.

### Auto-play Behavior (UI-05)
- User selected **Start completely muted by default**.
- The audio context will pause/mute upon page load, requiring explicit user interaction to start the background music. This is recommended for professional websites and avoids browser blocking behaviors. 

### Toggle Placement (UI-05)
- User selected **Top Right Navbar**.
- The music toggle (Play/Pause speaker icon) will be placed in the `Navbar.tsx` component, next to the desktop navigation links or mobile hamburger menu.

### Claude's Discretion
- The method of globally managing audio state (e.g., using `UIContext.tsx` or a dedicated `AudioContext`).
- PageSpeed enhancements (lazy loading `<iframe>`, `Image` tags, or script deferment).
</decisions>

<specifics>
## Specific Ideas
- React's `<audio>` tag combined with global state mapping the `volume` and `isPlaying` properties.

</specifics>

<deferred>
## Deferred Ideas
None.
</deferred>

---

*Phase: 03-experience-optimization*
*Context gathered: 2026-02-24*
