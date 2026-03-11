# Quick Task 15: 3D Bold Typography for Hero

## Objective
Update the landing page's main hero section typography ("Building Dubai's Future") to feature a bold, 3D aesthetic that contrasts beautifully against the scrolling video background while retaining its cinematic JS typing animation.

## Implementation Details
1. **CSS Text-Shadow Extrusion (`src/components/ScrollAnimation.tsx`)**: Replaced the standard drop shadow/flat text on the `TextType` component playing the H1 tag with an advanced, layered CSS text-shadow string inside an arbitrary Tailwind class: `[text-shadow:0_1px_0_rgb(204,204,204),0_2px_0_rgb(201,201,201)...]`.
2. **Layering Approach**: This technique stacks descending shadows with slightly varying gray tones (from `#ccc` down to `#aaa`) to artificially create a crisp 3D depth map, followed by a diffused black shadow array `rgba(0,0,0,x)` to ground the 3D text against the light/chaotic video background.
3. **Animation Preservation**: Because the new styling leverages deep CSS native rendering rather than complex DOM-duplication, the React `TextType` component retains full control of mounting character keystrokes, preserving the exact timing and blinking cursor effect currently in use.

## Verification
- Confirmed there are no spaces within the arbitrary bracket notation that would break the Tailwind compiler.
- Build (`npm run build`) succeeded without error.
