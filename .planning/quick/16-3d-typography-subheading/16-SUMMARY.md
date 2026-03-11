# Quick Task 16: 3D Typography for Subheading

## Objective
Apply a matching 3D aesthetic to the "Construction & Authority Approvals" subheading in the landing page's main scroll animation, ensuring it visually cohesive with the main golden/amber color theme without breaking the `TextType` component.

## Implementation Details
1. **Targeted Subheading Styling (`src/components/ScrollAnimation.tsx`)**: Selected the secondary `<TextType>` element.
2. **Golden Extrusion Stack**: Rather than copying the grayscale shadow stack from the main `<h1>` heading, a new custom CSS `text-shadow` was calculated to complement the `text-amber-500` class. The layered extrusion uses descending RGB values from bright warm bronze (`rgb(180,110,0)`) to dark brown (`rgb(100,50,0)`), concluding in the same diffused translucent black drop shadow to ensure legibility across bright and dark video frames. 
3. **Execution**: The tailwind arbitrary value `[text-shadow:0_1px_0_rgb(180,110,0)...]` was successfully injected into the element while carefully preserving both `italic` and `font-serif` properties.

## Verification
- Confirmed the Tailwind JIT compiler executed correctly on the complex bracket notations.
- Build (`npm run build`) passed successfully with 0 errors.
