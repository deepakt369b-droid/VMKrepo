# Quick Task 12: Blog Filter & Footer Update

## Objective
Convert the blog category filter buttons into a horizontally scrolling list to fix mobile layout breaks, and restructure the footer's bottom bar to centrally align the copyright text while appending a hyperlink credit for "Designed By Algoplus".

## Implementation Details
1. **Blog Filter Update (`src/app/blog/page.tsx`)**: Refactored the container for the Category buttons from a standard `flex-wrap` layout to an `overflow-x-auto whitespace-nowrap scrollbar-hide` pattern. This guarantees that on narrow mobile screens, the buttons form an intuitive, swipe-able horizontal list without breaking the page width or dropping characters. On medium screens (`md:flex-wrap md:overflow-visible`), the list returns to its standard desktop wrapping behavior.
2. **Footer Reorganization (`src/components/Footer.tsx`)**: Modified the `{/* Bottom Bar */}` container from a split row design (`justify-between md:flex-row`) to a uniformly centered stacked column (`flex-col items-center justify-center text-center gap-4`).
3. **Hyperlink Credit**: Reordered the elements within the footer so Privacy Policy and Terms sit atop the copyright. Underneath the copyright string, appended the requested text: `Designed By Algoplus` integrating an anchor link (`<a href="https://algoplusit.com" target="_blank" rel="noopener noreferrer">`) directly to the agency's domain with proper hover/amber accent transitions.

## Verification
- Checked that flex/overflow utility classes are valid CSS.
- Build (`npm run build`) passed with zero errors, confirming that no unescaped React elements or SSR hydration collisions were introduced.
