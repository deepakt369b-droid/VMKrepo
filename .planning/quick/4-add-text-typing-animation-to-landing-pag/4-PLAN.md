---
must_haves:
  - Add the `TextType.tsx` and `TextType.css` components using the provided code from the user.
  - Implement the `TextType` component in `ScrollAnimation.tsx` for the headlines "Building Dubai's Future" and "Construction & Authority Approvals".
---

# Quick Task 4: Add Typing Animation

## Tasks

<tasks>

<task>
  <id>create_text_type</id>
  <description>Create TextType component</description>
  <files>
    - src/components/ui/TextType.tsx
    - src/components/ui/TextType.css
  </files>
  <action>
    Create the files using the snippet provided by the user. Convert the syntax to TypeScript where necessary to match the project configuration (or just use basic typing).
  </action>
  <verify>Component exports correctly without build errors.</verify>
  <done>false</done>
</task>

<task>
  <id>implement_animation</id>
  <description>Implement typing on Landing Page</description>
  <files>
    - src/components/ScrollAnimation.tsx
  </files>
  <action>
    Replace the static `<h1>` and `<p>` tags for the landing page hero text with the new `<TextType>` components to trigger animation. 
  </action>
  <verify>Text types out sequentially or concurrently according to GSAP when the homepage loads.</verify>
  <done>false</done>
</task>

</tasks>
