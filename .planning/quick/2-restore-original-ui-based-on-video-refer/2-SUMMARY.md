# Quick Task 2: Restore Original UI

## Summary

1. **Video Analysis Reference:** Booted a browser subagent alongside the LLM prompt to review the UI details presented in the provided Google Drive video. Identified original assets: transparent navbar, white typography, heavy sans-serif headings ("BUILDING DUBAI'S FUTURE"), gold italicized serif subheadings ("Construction & Authority Approvals"), and a specific inner-page theme contrast.
2. **Typography Imports:** Updated `src/app/layout.tsx` to pull `Montserrat` and `Playfair Display` fonts from `next/font/google`, mapping them to `font-sans` and `font-serif` respectively in Tailwind via `globals.css`.
3. **Hero Animation Redesign:** Modified `ScrollAnimation.tsx` to stack the correct typography hierarchy over the video-frame scroller. Added a vertical animating "SCROLL" bar to visually map user intent to the GSAP trigger. 
4. **Navbar Adjustments:** Converted the navbar to a sleek transparent overlay with centered navigation links. Rebuilt the "Get a Quote" generic button into a pill-shaped, white-bordered transparent button (`border border-white bg-transparent rounded-full text-white`), significantly elevating the premium feel.

All changes have been successfully implemented and tested on localhost.
