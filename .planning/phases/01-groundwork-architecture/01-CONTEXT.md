# Phase 1: Groundwork & Architecture - Context

**Gathered:** 2026-02-24
**Status:** Ready for planning

<domain>
## Phase Boundary

Setting up the initial React SEO skeleton using Next.js, integrating the VMK Branding, and porting the scroll-driven animations based on the existing HTML and `video-frames` directory.
</domain>

<decisions>
## Implementation Decisions

### Framework Choice
- User selected **Next.js** for robust SSR/SSG and deep organic SEO indexing out-of-the-box.

### Animation Controller
- User selected **GSAP ScrollTrigger** because it is the industry standard for handling complex video-frame timelines smoothly.

### Styling Approach
- User selected **TailwindCSS** for rapid UI iteration and efficient styling, replacing the previous vanilla CSS approach.

### Claude's Discretion
- Next.js App Router vs Pages Router: (Will default to App Router for modern Next.js 14+ best practices).
- Component structure and specific Tailwind configuration.
</decisions>

<specifics>
## Specific Ideas

The existing `video-frames` directory and the `index.html` structure (which currently relies on `<canvas id="hero-canvas">`) format the basis for the animation. We must port this carefully into a React Context/Component using Next.js and GSAP without losing the smooth scrolling effect, while optimizing the payload.
</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.
</deferred>

---

*Phase: 01-groundwork-architecture*
*Context gathered: 2026-02-24*
