# Quick Task 14: Interactive Blog Filters

## Objective
Enable users to filter the `/blog` journal section by clicking on category tags, dynamically updating both the Featured Post block and the standard post layout to only show posts matching the active category.

## Implementation Details
1. **State Conversion (`src/app/blog/page.tsx`)**: Migrated the component from a Server Component to a Client Component by injecting `"use client";` at the top of the file. Imported and instantiated React `useState<string>('All')` to track filter states.
2. **Filtering Logic**: Implemented `filteredPosts` to automatically extract the subset of `BLOG_POSTS` matching `activeCategory` (returning all if "All" is selected). 
3. **Featured Article Routing**: Altered the featured article `posts[0]` to `filteredPosts[0]` (abstracted into a safely checked `featuredPost` constant). The remaining feed below it renders `filteredPosts.slice(1)`.
4. **Resiliency**: Appended an empty-state screen (`filteredPosts.length === 0`) just in case a filter is clicked but no items exist yet for that specific category, providing an interactive reset button back to "All".
5. **UI Wiring**: Attached `onClick={() => setActiveCategory(cat)}` events to the rounded pill tags inside the newly-scrollable horizontal navigation.

## Verification
- Confirmed `onClick` properly toggles the active pill's styling from ghost styling to the primary black-on-amber highlight.
- Build (`npm run build`) succeeded without error regarding the `"use client"` hydration shifts.
