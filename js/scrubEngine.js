/**
 * ScrubEngine handles the loading and management of the WebP image sequence.
 * It includes a simple LRU-ish mechanism (if needed) or just efficient preloading.
 */
export default class ScrubEngine {
  constructor(totalFrames, framePathPattern) {
      this.totalFrames = totalFrames;
      this.framePathPattern = framePathPattern; // e.g., "./video-frames/frame_%03d.webp"
      this.images = new Map();
      this.loadedCount = 0;
      this.onProgress = null;
      this.onComplete = null;
  }

  formatPath(index) {
      // pad index with leading zeros to 3 digits
      const paddedLine = String(index).padStart(3, '0');
      return this.framePathPattern.replace('%03d', paddedLine);
  }

  load() {
      const promises = [];
      for (let i = 0; i < this.totalFrames; i++) {
          const p = new Promise((resolve, reject) => {
              const img = new Image();
              img.src = this.formatPath(i);
              
              img.onload = () => {
                  this.images.set(i, img);
                  this.loadedCount++;
                  if (this.onProgress) {
                      this.onProgress(this.loadedCount / this.totalFrames);
                  }
                  resolve();
              };
              
              img.onerror = () => {
                  console.warn(`Failed to load frame ${i}`);
                  // Resolve anyway to avoid blocking everything, but maybe with a placeholder logic?
                  // For now, we just skip it.
                  resolve(); 
              };
          });
          promises.push(p);
      }

      Promise.all(promises).then(() => {
          if (this.onComplete) this.onComplete();
      });
  }

  getFrame(progress) {
      // Input progress is 0.0 to 1.0
      // Map to frame index
      const frameIndex = Math.min(
          this.totalFrames - 1,
          Math.max(0, Math.floor(progress * this.totalFrames))
      );
      
      return this.images.get(frameIndex);
  }
}
