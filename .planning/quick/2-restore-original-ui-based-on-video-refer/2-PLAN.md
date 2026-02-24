---
must_haves:
  - Navbar links are centered, the background starts transparent, and the CTA button is a pill-shaped outlined button.
  - The Hero section typography matches the original video (Heavy Montserrat heading, Serif Gold italic subheading, small Tagline).
  - The Font imports correctly wire `Playfair_Display` and `Montserrat`.
  - The Global theme colors reflect the appropriate contrast.
---

# Quick Task 2: Restore Original UI

## Tasks

<tasks>

<task>
  <id>typography_imports</id>
  <description>Import specific fonts in layout.tsx</description>
  <files>
    - src/app/layout.tsx
    - src/app/globals.css
  </files>
  <action>
    Update layout to include Playfair Display and Montserrat. Provide them via CSS variables. Define the Gold accent color in the CSS themes (`#D4AF37`).
  </action>
  <verify>Fonts apply without error.</verify>
  <done>false</done>
</task>

<task>
  <id>navbar_styling</id>
  <description>Restore Navbar transparency and layout</description>
  <files>
    - src/components/Navbar.tsx
  </files>
  <action>
    Change the wrapper class to be transparent from the start. Center the links container. Update the "Get a Quote" to use `border border-white bg-transparent rounded-full text-white hover:bg-white hover:text-black`.
  </action>
  <verify>Navbar matches original video.</verify>
  <done>false</done>
</task>

<task>
  <id>hero_typography</id>
  <description>Restore Hero layer typography</description>
  <files>
    - src/components/ScrollAnimation.tsx
  </files>
  <action>
    Replace the single headline with the complete hierarchy: Tagline ("OPERATING ACROSS ALL DUBAI AUTHORITIES"), Main Headline ("BUILDING DUBAI'S FUTURE" with Tracking), Subheading ("Construction & Authority Approvals" using Gold and Serif). Add the "SCROLL" vertical line indicator.
  </action>
  <verify>Hero text hierarchy matches video reference.</verify>
  <done>false</done>
</task>

</tasks>
