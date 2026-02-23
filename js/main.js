import ScrubEngine from './scrubEngine.js';
import CanvasRenderer from './canvasRenderer.js';

// Configuration
const TOTAL_FRAMES = 159; // Updated frame count
const FRAME_PATH = './video-frames/frame_%03d_delay-0.04s.jpg'; // Updated for new JPG assets

document.addEventListener('DOMContentLoaded', () => {
    // 1. Init Components
    const canvas = document.getElementById('hero-canvas');
    const renderer = new CanvasRenderer(canvas);
    const scrubEngine = new ScrubEngine(TOTAL_FRAMES, FRAME_PATH);

    // 2. Preloader Logic
    const preloader = document.getElementById('preloader');
    const progressFill = document.querySelector('.progress-fill');
    const loaderText = document.querySelector('.loader-text');

    scrubEngine.onProgress = (ratio) => {
        progressFill.style.width = `${ratio * 100}%`;
    };

    scrubEngine.onComplete = () => {
        // Hide preloader
        gsap.to(preloader, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => preloader.style.display = 'none'
        });

        // Start Animations
        initScrollAnimations();
    };

    // Start loading
    scrubEngine.load();

    // 3. Loop / Render Loop
    // We don't need a constant requestAnimationFrame loop if we only update on scroll,
    // but GSAP ticker is good for smoothness.
    gsap.ticker.add(() => {
        // Optional: Add idle animation or similar here
    });

    // 4. Scroll Interactions
    function initScrollAnimations() {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Pinning & Scrubbing
        ScrollTrigger.create({
            trigger: '.hero',
            start: 'top top',
            end: '+=400%', // Pin for 4 screen heights
            pin: true,
            scrub: 0.5, // Smooth scrubbing
            onUpdate: (self) => {
                const progress = self.progress;
                const frame = scrubEngine.getFrame(progress);
                if (frame) {
                    renderer.setFrame(frame);
                }
            }
        });

        // Text Parallax / Fade Out
        gsap.to('.hero-overlay', {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: '20% top',
                scrub: true
            },
            opacity: 0,
            y: -50,
            ease: 'none'
        });

        // Animate Hero Content In (Initial Reveal)
        const tl = gsap.timeline();
        tl.to('.hero-title', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
            .to('.hero-subtitle', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.8')
            .to('.hero-tagline', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.8');

        // Expertise Section - Card Reveals
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: '.expertise',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: index * 0.2,
                ease: 'power2.out'
            });
        });
    }
});
