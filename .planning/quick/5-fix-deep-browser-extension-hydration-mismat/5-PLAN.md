---
must_haves:
  - Add `suppressHydrationWarning` to the `<body>` tag in `src/app/layout.tsx`.
  - Add `suppressHydrationWarning` to the root element returned by `TextType` component.
  - Add `suppressHydrationWarning` to problematic wrapper divs in `ScrollAnimation` and `Navbar`.
---

# Quick Task 5: Deep Hydration Mismatch Fix

## Tasks

<tasks>

<task>
  <id>suppress_body</id>
  <description>Add suppressHydrationWarning to Layout Body</description>
  <files>
    - src/app/layout.tsx
  </files>
  <action>
    The initial fix applied it to `<html>`, but the error specifically flags `<body __processed_...>`. Add `suppressHydrationWarning` to `<body>` as well.
  </action>
  <verify>Check component.</verify>
  <done>false</done>
</task>

<task>
  <id>suppress_components</id>
  <description>Add suppressHydrationWarning to injected DOM nodes</description>
  <files>
    - src/components/ui/TextType.tsx
    - src/components/ScrollAnimation.tsx
    - src/components/Navbar.tsx
  </files>
  <action>
    Add `suppressHydrationWarning` to `createElement` in `TextType.tsx`, the root `<nav>` in `Navbar`, and the hero overlay `<div>` in `ScrollAnimation` where `bis_skin_checked` was flagged.
  </action>
  <verify>Check components for warning flag.</verify>
  <done>false</done>
</task>

</tasks>
