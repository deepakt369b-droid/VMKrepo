---
must_haves:
  - Add internal state `isComplete` to `TextType` component.
  - Set `isComplete` to true when the typing logic determines it has finished.
  - Hide the cursor DOM node if `isComplete` is true.
---

# Quick Task 6: Disable Cursor After Typing

## Tasks

<tasks>

<task>
  <id>cursor_state</id>
  <description>Add isComplete state to TextType</description>
  <files>
    - src/components/ui/TextType.tsx
  </files>
  <action>
    Introduce `const [isComplete, setIsComplete] = useState(false);` into `TextType.tsx`. Update the animation logic so that when `!loop && currentTextIndex === textArray.length - 1` and all characters are typed, `isComplete` is statically set to true instead of just returning out of the timeout.
    Update the `shouldHideCursor` logic to immediately force hide if `isComplete`.
  </action>
  <verify>Cursor stops blinking on the landing page after the text phrases fully finish typing.</verify>
  <done>false</done>
</task>

</tasks>
