# Quick Task 7: Disable Loop on TextType

## Summary

1. **Tagline Fixed:** The hero section text "Operating Across All Dubai Authorities" was typing and deleting in a continuous loop, causing unintended blinking for the user.
2. **Prop Sent:** Standardized the behavior by adding the boolean `loop={false}` prop to the first `TextType` instance in `ScrollAnimation.tsx`, matching the behavior of the Headline and Subheadline.

The tagline now types out once dynamically, completes its string interpolation, triggers `isComplete`, and stays totally static.
