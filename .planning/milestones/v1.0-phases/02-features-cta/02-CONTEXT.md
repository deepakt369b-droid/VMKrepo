# Phase 2: Features & CTA Delivery - Context

**Gathered:** 2026-02-24
**Status:** Ready for planning

<domain>
## Phase Boundary

Building out the inner pages, navigation structure, Lead Capture elements ("Get a Quote" modal), and the interactive 3D WhatsApp Call-to-Action.
</domain>

<decisions>
## Implementation Decisions

### Routing Strategy (UI-03)
- User selected **Separate Routes**.
- We will create dedicated Next.js app routes for `/about`, `/services`, `/planning`, `/construction`, `/handover`, and `/contact`. This ensures maximum SEO surface area for Dubai-specific construction keywords.

### "Get a Quote" CTA (LEAD-01)
- User selected **Sleek Popup Modal Form**.
- The form will open over the current page without a redirect.

### WhatsApp Float Button (LEAD-02)
- User selected **High-quality rotating 3D asset**.
- We will integrate a 3D WhatsApp icon (using `@splinetool/react-spline` or Triplex/Three.js) that continuously rotates and acts as the floating contact button.

### Claude's Discretion
- The exact layout of the inner pages (using VMK branding and TailwindCSS).
- The form fields for the "Get a Quote" modal (e.g., Name, Email, Service Type, Message).
</decisions>

<specifics>
## Specific Ideas
- The 3D WhatsApp button must be performant. If a predefined Spline scene isn't available, we will scaffold a basic Three.js/React Three Fiber rotating 3D logo of the WhatsApp icon.

</specifics>

<deferred>
## Deferred Ideas
None — discussion stayed within phase scope.
</deferred>

---

*Phase: 02-features-cta*
*Context gathered: 2026-02-24*
