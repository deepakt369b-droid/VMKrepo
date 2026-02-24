---
must_haves:
  - The ScrollAnimation correctly preloads and scrubs video frames based on user scroll.
  - WhatsAppButton is changed from a 3D cylinder/coin to a more recognizable floating CTA button (either an angled 3D icon or an enhanced 2D HTML/CSS button).
  - The ColorHunt palette (#213448, #485460, #779294, #b4c1ea, #eae0cf) is globally applied to the themes, replacing previous bg-black and text-amber-500 references where suitable.
---

# Quick Task 1: UI Fixes & Palette

## Tasks

<tasks>

<task>
  <id>color_palette</id>
  <description>Apply new color palette globally via CSS</description>
  <files>
    - src/app/globals.css
  </files>
  <action>
    Add CSS variables for the color palette (`--color-hunt-1` through `5` or use Tailwind v4 `@theme` directives) to `src/app/globals.css`. Update `src/app/layout.tsx` background colors to match the darkest palette color (`#213448`).
  </action>
  <verify>Check localhost for updated background colors.</verify>
  <done>false</done>
</task>

<task>
  <id>scroll_animation</id>
  <description>Fix ScrollAnimation component</description>
  <files>
    - src/components/ScrollAnimation.tsx
  </files>
  <action>
    Investigate why image URLs might be 404ing or the canvas is unmounting. Ensure `/video-frames/frame_...` exists. Actually, the issue might be React State or GSAP pin context. Fix the static image issue by ensuring `images[currentFrameIndex]` renders tightly in requestAnimationFrame. *Note: As `video-frames` directory names might differ, check exact names.* Ensure `pointer-events-none` allows scrolling over it. Update amber/black colors to the new palette.
  </action>
  <verify>Scroll down; canvas should update.</verify>
  <done>false</done>
</task>

<task>
  <id>whatsapp_cta</id>
  <description>Improve WhatsApp Button</description>
  <files>
    - src/components/WhatsAppButton.tsx
  </files>
  <action>
    Remove the generic Cylinder 3D mesh that looks like an edge-on coin. Replace with a recognizable WhatsApp green HTML/CSS FAB (Floating Action Button) or a properly textured 3D plane that constantly faces the camera (`Billboard`) so the user knows it's a chat CTA. Add a tooltip.
  </action>
  <verify>Button clearly indicates WhatsApp chat action.</verify>
  <done>false</done>
</task>

</tasks>
