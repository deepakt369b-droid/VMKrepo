import sharp from 'sharp';

await sharp('C:/Users/SAHARA/Desktop/Scroll-Work/assets/images/gold-golden-texture-background-shiny-gloss-2026-01-07-02-29-37-utc.jpg')
  .resize(1920)
  .webp({ quality: 80 })
  .toFile('public/images/gold-texture-bg.webp');

await sharp('C:/Users/SAHARA/Desktop/Scroll-Work/assets/images/gold-golden-texture-background-shiny-gloss-2026-01-07-02-29-37-utc.jpg')
  .resize(1920)
  .jpeg({ quality: 75 })
  .toFile('public/images/gold-texture-bg.jpg');

console.log('Done — optimized images saved to public/images/');
