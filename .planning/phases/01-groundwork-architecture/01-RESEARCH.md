# Phase 1: Groundwork & Architecture - Research

## Context and Requirements
- **Framework:** Next.js (App Router recommended for modern SEO).
- **Styling:** TailwindCSS.
- **Animation:** GSAP ScrollTrigger to orchestrate 160 video frames (`frame_000_delay-0.04s.jpg` to `frame_158_delay-0.04s.jpg`).
- **Goal:** Initialize the React SEO skeleton, branding, and scroll animations.
- **Requirements:** ARCH-01, ARCH-02, ARCH-03, UI-01, UI-02.

## Technical Strategy

1. **Next.js Initialization:**
   - Create a standard Next.js 14+ app using `npx create-next-app@latest`.
   - Configure TailwindCSS during setup.
   - Use App Router (`app/`) for layout and page structure.
   - Configure basic SEO metadata in `layout.tsx`.

2. **GSAP + Video Frames Integration (UI-01, UI-02):**
   - The user has 159 frames in the `video-frames` folder.
   - A `<canvas>` element should be used to render the frames sequentially to avoid DOM overload and ensure high performance (ARCH-03).
   - Use `gsap.to()` with `ScrollTrigger` mapped to a proxy object that holds the current frame index.
   - Preload frames efficiently or load them on demand (draw them to canvas) as the user scrolls.

3. **Performance Optimization (ARCH-03):**
   - Preloading 159 images at high resolution can block LCP. We should implement lazy-loading or low-res placeholders if necessary, but since GSAP canvas drawing requires the images to be in memory, we might need a dedicated `ImagePreloader` component or hook.
   - To achieve green Web Vitals, the initial paint must be text/metadata, and JS execution for the heavy canvas should be deferred or handled asynchronously.

## Validation Architecture

### 1. Verification Goals
- Ensure HTML is pre-rendered with text and metadata (ARCH-01, ARCH-02).
- Ensure Web Vitals remain strong (Core Web Vitals check) (ARCH-03).
- Ensure the scroll animation triggers seamlessly (UI-01).

### 2. Required Tests
- **SEO/Pre-rendering Test:** Check the raw HTML output of the root page to verify `title`, `meta` tags, and initial text content are present before JS executes.
- **Animation rendering Test:** Render the page and verify that the canvas element exists and GSAP is hooked up to scroll events.
- **Performance Budget Test:** Run a Lighthouse check on the build to ensure LCP and INP are within bounds.
