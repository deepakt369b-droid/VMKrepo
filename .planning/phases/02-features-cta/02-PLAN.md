---
wave: 1
depends_on: []
files_modified: ["src/app/layout.tsx", "src/components/Navbar.tsx", "src/app/(routes)/[slug]/page.tsx", "src/components/QuoteModal.tsx", "src/components/WhatsAppButton.tsx"]
autonomous: true
---

# Phase 2: Features & CTA Execution Plan

## Objective
Build out the inner pages for Dubai construction SEO, implement the global navigation, create the interactive Quote Modal, and add the 3D WhatsApp Call-to-Action.

## Requirements
- UI-03: Route navigation to secondary static pages.
- LEAD-01: "Get a Quote" modal form.
- LEAD-02: 3D WhatsApp floating button.
- LEAD-03: Contact page with operational details.

## Tasks

<tasks>

<task>
  <id>global-navbar</id>
  <description>Create the global navigation bar and wrap it in the root layout.</description>
  <instructions>
  1. Create `src/components/Navbar.tsx`.
  2. Implement a responsive glassmorphism header using Tailwind (fixed top, z-50).
  3. Include links to: Home, About, Services, Planning, Construction, Handover, Contact.
  4. Include a prominent "Get a Quote" button that triggers a global UI state or context to open the Quote Modal.
  5. Add the `Navbar` to `src/app/layout.tsx` above `{children}`.
  </instructions>
</task>

<task>
  <id>quote-modal</id>
  <description>Create the interactive "Get a Quote" modal form.</description>
  <instructions>
  1. Create `src/components/QuoteModal.tsx` (client component).
  2. Use fixed positioning overlaying the whole screen when active. Include a dark backdrop with blur.
  3. Provide fields: Name, Email, Phone, Required Service (Dropdown), Message.
  4. Add an "X" button to close it.
  5. Include it in `app/layout.tsx` so it can be triggered from anywhere (or manage state via a React Context).
  </instructions>
</task>

<task>
  <id>whatsapp-3d</id>
  <description>Implement the 3D WhatsApp floating action button.</description>
  <instructions>
  1. Install three.js dependencies: `npm install three @react-three/fiber @react-three/drei`.
  2. Create `src/components/WhatsAppButton.tsx`.
  3. Set up a mini R3F `<Canvas>` fixed at the bottom right of the screen (e.g., `bottom-8 right-8`).
  4. Create a rotating 3D Mesh (e.g., a Cylinder mimicking a coin) adorned with a greenish WhatsApp-like material or an imported texture. Use `useFrame` to rotate it slowly.
  5. Wrap the canvas in an `<a>` tag pointing to `https://wa.me/971XXXXXXXXX` (dummy Dubai number).
  6. Add to `src/app/layout.tsx`.
  </instructions>
</task>

<task>
  <id>inner-pages</id>
  <description>Scaffold the inner SEO pages.</description>
  <instructions>
  1. Create directories and `page.tsx` files for:
     - `src/app/about/page.tsx`
     - `src/app/services/page.tsx`
     - `src/app/planning/page.tsx`
     - `src/app/construction/page.tsx`
     - `src/app/handover/page.tsx`
     - `src/app/contact/page.tsx`
  2. Fill each page with a standard VMK branded Hero section and placeholder text representing the specific service (using TailwindCSS for layout, e.g. `min-h-screen pt-32`).
  </instructions>
</task>

</tasks>

## Verification

<must_haves>
- The top Navbar renders on all pages and links correctly route to the new inner pages without 404s.
- Clicking "Get a Quote" opens a centered modal with form fields.
- The modal can be closed via an X button or clicking the backdrop.
- A 3D object successfully renders in the bottom right corner of the screen acting as the WhatsApp button.
- Build compiles (`npm run build`) without TypeScript or App Router structural errors.
</must_haves>
