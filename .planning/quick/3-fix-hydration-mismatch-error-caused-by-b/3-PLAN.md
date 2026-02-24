---
must_haves:
  - The `layout.tsx` file has `suppressHydrationWarning` on the `html` or `body` tag to prevent hydration errors from browser extensions like `bis_skin_checked`.
---

# Quick Task 3: Fix Hydration Mismatch Error

## Tasks

<tasks>

<task>
  <id>suppress_hydration</id>
  <description>Add suppressHydrationWarning to RootLayout</description>
  <files>
    - src/app/layout.tsx
  </files>
  <action>
    Add `suppressHydrationWarning` to the `<html>` and `<body>` tags in `src/app/layout.tsx`. Browser extensions (like Grammarly or password managers inserting `bis_skin_checked`) inject properties into these roots causing Next.js App Router hydration to fail.
  </action>
  <verify>No console errors regarding mismatch on client load.</verify>
  <done>false</done>
</task>

</tasks>
