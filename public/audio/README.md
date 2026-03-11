# Audio Asset — Place your .mp3 here

This `public/audio/` folder is served at `/audio/` by Next.js.

The Navbar background music player expects the file to be at:

```
public/audio/ambient.mp3
```

## How to add your audio file

1. Obtain a royalty-free ambient .mp3 (e.g. from Pixabay, Freesound, etc.)
2. Name it `ambient.mp3`
3. Drop it into this folder
4. The site will automatically serve it at `/audio/ambient.mp3`

> **Keep file size reasonable** — ideally under 8 MB for fast initial load.
> Since `preload="none"` is set in the player, audio is only fetched when
> the user clicks the play button.
