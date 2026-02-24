---
must_haves:
  - Consolidate 'Planning', 'Construction', and 'Handover' into a dropdown array within the 'Services' object in `Navbar.tsx`.
  - The 'Services' parent link remains functional to direct users to the main services page.
  - Implement a mobile-friendly/desktop group-hover dropdown UI using Tailwind CSS.
---

# Quick Task 8: Services Dropdown Navbar

## Enhanced Prompt Logic
The user instruction specifies creating a nested architecture under the 'Services' global link for the 'Planning', 'Construction', and 'Handover' pathways. This declutters the primary navbar while allowing those child sections/pages to retain their dedicated URIs.

## Tasks

<tasks>

<task>
  <id>refactor_navlinks</id>
  <description>Update Navbar array structure</description>
  <files>
    - src/components/Navbar.tsx
  </files>
  <action>
    Modify `navLinks` variable to embed `dropdown` items for the sub-pages without modifying their `href` structures, ensuring they still link to their exclusive pages.
  </action>
  <verify>Nav array has dropdown child array under Services.</verify>
  <done>false</done>
</task>

<task>
  <id>render_dropdown</id>
  <description>Implement dropdown UI</description>
  <files>
    - src/components/Navbar.tsx
  </files>
  <action>
    Iterate over `link.dropdown` using React and Tailwind's `group` and `group-hover:block` utility classes to expose the sub-menu organically visually.
  </action>
  <verify>Hovering over Services reveals the dropdown menu with correct links.</verify>
  <done>false</done>
</task>

</tasks>
