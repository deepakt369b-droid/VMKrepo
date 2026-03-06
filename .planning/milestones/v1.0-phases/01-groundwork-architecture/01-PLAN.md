---
wave: 1
depends_on: []
files_modified: ["package.json", "app/layout.tsx", "app/page.tsx", "components/ScrollAnimation.tsx"]
autonomous: true
---

# Phase 1: Groundwork & Architecture

## Objective
Initialize the React SEO skeleton using Next.js, configure Tailwind CSS, and implement the GSAP scroll-driven animation using the 160 frames in the `video-frames` directory.

## Requirements
- ARCH-01: Next.js SSR/SSG skeleton.
- ARCH-02: Optimized meta tags for Dubai construction.
- ARCH-03: Strong Core Web Vitals.
- UI-01: Scroll-driven 3D animation using video-frames.
- UI-02: Premium VMK Dubai design aesthetic.

## Tasks

<tasks>

<task>
  <id>init-nextjs</id>
  <description>Initialize Next.js App Router with Tailwind CSS (if not already fully initialized in the root) and install GSAP.</description>
  <instructions>
  1. If `package.json` is missing Next.js, run `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir false --import-alias "@/*" --use-npm` in the root. If `--force` is needed, use it, or manually set up Next.js.
  2. Install GSAP: `npm install gsap @gsap/react`.
  3. Ensure the project structure is clean (remove boilerplate from `app/page.tsx` and `app/globals.css`).
  4. Move the existing `video-frames` folder into `public/video-frames` so they can be served as static assets.
  </instructions>
</task>

<task>
  <id>setup-seo</id>
  <description>Configure global SEO metadata in `app/layout.tsx`.</description>
  <instructions>
  1. Update the `metadata` export in `app/layout.tsx`.
  2. Set the Title to "VMK Construction - Building Approvals & Contracting in Dubai".
  3. Set a strong Description targeting construction and authority approval keywords in Dubai.
  </instructions>
</task>

<task>
  <id>implement-scroll-anim</id>
  <description>Create the `ScrollAnimation.tsx` component to render the video frames on a canvas using GSAP ScrollTrigger.</description>
  <instructions>
  1. Create `components/ScrollAnimation.tsx` (use `"use client"`).
  2. Implement a `<canvas>` that fills the viewport (`w-full h-screen object-cover`).
  3. Create an array of 160 image paths pointing to `/video-frames/frame_XXX_delay-0.04s.jpg` (padding numbers properly, e.g., 000 to 158).
  4. Write a GSAP ScrollTrigger timeline that scrubs through the images as the user scrolls, drawing the active image to the canvas `2d` context.
  </instructions>
</task>

<task>
  <id>integrate-home</id>
  <description>Integrate the animation into the main landing page.</description>
  <instructions>
  1. Update `app/page.tsx` to import and render `ScrollAnimation.tsx`.
  2. Add dummy structure to the page so it has enough scroll height (e.g., `h-[500vh]`) to allow the ScrollTrigger to scrub through all 160 frames smoothly.
  3. Add a placeholder Hero text overlay to establish branding (UI-02).
  </instructions>
</task>

</tasks>

## Verification

<must_haves>
- The project runs via `npm run dev` without errors.
- The `/video-frames` folder is inside the `public` directory.
- The compiled HTML contains the "VMK Construction" title and description.
- Scrolling down the page triggers the GSAP ScrollTrigger canvas animation smoothly changing the video frames.
- No React hydration errors in the console.
</must_haves>
