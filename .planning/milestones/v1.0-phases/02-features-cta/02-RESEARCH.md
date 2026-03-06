# Phase 2: Features & CTA - Research

## Context and Requirements
- **Routing:** Separate Next.js routes (`/about`, `/services`, `/planning`, `/construction`, `/contact`, `/handover`) for deep SEO.
- **Get a Quote CTA:** A sleak Popup Modal Form that doesn't trigger a page redirect.
- **WhatsApp Button:** A 3D rotating React Spline or Three.js icon floating on the screen.
- **Requirements Covered:** UI-03 (Navigation), LEAD-01 (Quote CTA), LEAD-02 (WhatsApp CTA), LEAD-03 (Contact form/info).

## Technical Strategy

1. **Next.js App Router for UI-03:**
   - Create directories inside `src/app/` for `about`, `services`, `planning`, `construction`, `contact`, and `handover`.
   - Each will have a `page.tsx` file exporting a React component.
   - We need a global navigation header (e.g., `components/Navbar.tsx`) in `layout.tsx` to link to these routes smoothly.

2. **Modal Form (LEAD-01):**
   - Create a `QuoteModal.tsx` client component.
   - Use React state (`isOpen`, `setIsOpen`) to manage visibility.
   - Since we don't have a backend scope for v1, the form submission should visually succeed and optionally trigger an email via a `mailto:` link or simply show a "Thank you" state.
   - Needs to be highly styled with Tailwind (VMK branding, glassmorphism).

3. **3D WhatsApp Button (LEAD-02):**
   - We will use `@splinetool/react-spline` to load a public 3D WhatsApp icon scene if one is reliably available, OR use `@react-three/fiber` and `@react-three/drei` to render a basic 3D floating icon.
   - Given the need for a reliable, immediate result without custom 3D modeling time, a CSS-enhanced 3D-like button using Framer Motion or pure CSS 3D transforms might be safer, but the user requested a true 3D asset. We will attempt a React Three Fiber `Canvas` with a 3D geometry and a WhatsApp texture mapped onto a rotating coin.
   - Fallback: A highly styled 2D floating action button with 3D CSS shadows and pulse animations.

## Validation Architecture

### 1. Verification Goals
- Verify all routes load without 404s.
- Verify the Quote Modal opens and closes properly on clicking CTA buttons.
- Verify the WhatsApp button is visible globally and anchors properly to the bottom right of the screen.

### 2. Required Tests
- **Navigation Test:** Click through the global header links and ensure the URL changes and the corresponding `page.tsx` renders.
- **Modal Interaction:** Click "Get a Quote", verify the modal overlays the screen, fill dummy data, submit, and close.
- **WhatsApp Test:** Shrink the viewport to mobile and verify the floating button does not block critical UI elements, and clicking it opens `wa.me/...`.
