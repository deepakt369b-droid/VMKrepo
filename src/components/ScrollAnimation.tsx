"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger. It's safe to do this multiple times.
gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 159;

export default function ScrollAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);

    // Create an object to hold the current frame number so GSAP can animate the property "frame"
    const animState = useRef({ frame: 0 });

    useEffect(() => {
        // 1. Preload images
        const loadImages = () => {
            const loadedImages: HTMLImageElement[] = [];
            let loadedCount = 0;

            for (let i = 0; i <= FRAME_COUNT; i++) {
                const img = new Image();
                const paddedIndex = i.toString().padStart(3, "0");
                img.src = `/video-frames/frame_${paddedIndex}_delay-0.04s.jpg`;

                img.onload = () => {
                    loadedCount++;
                    // When the first image loads, draw it immediately.
                    if (i === 0 && canvasRef.current) {
                        renderFrame(img);
                    }
                    if (loadedCount === FRAME_COUNT + 1) {
                        setImages(loadedImages);
                    }
                };
                loadedImages.push(img);
            }
        };

        loadImages();
    }, []);

    const renderFrame = (img: HTMLImageElement) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Ensure dimensions match container size exactly to calculate aspect ratio properly
        const { innerWidth: width, innerHeight: height } = window;
        canvas.width = width;
        canvas.height = height;

        // Calculate aspect ratio covering
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height, x, y, img.width * scale, img.height * scale);
    };

    useEffect(() => {
        if (images.length === 0) return;

        // Set up GSAP ScrollTrigger
        const trigger = gsap.to(animState.current, {
            frame: FRAME_COUNT,
            snap: "frame",
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=3000", // The scroll duration / distance to scrub through all frames
                scrub: 0.5,
                pin: true,
            },
            onUpdate: () => {
                const currentFrameIndex = Math.round(animState.current.frame);
                if (images[currentFrameIndex]) {
                    // Wrap drawing in rAF for smoothness
                    requestAnimationFrame(() => {
                        renderFrame(images[currentFrameIndex]);
                    });
                }
            },
        });

        // Handle resize
        const handleResize = () => {
            if (images.length > 0) {
                renderFrame(images[Math.round(animState.current.frame)]);
            }
        };
        window.addEventListener("resize", handleResize);

        return () => {
            trigger.scrollTrigger?.kill();
            trigger.kill();
            window.removeEventListener("resize", handleResize);
        };
    }, [images]);

    return (
        <div ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden z-0">
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
            {/* Absolute overlay content would go here */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 pointer-events-none p-4 text-center">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">VMK Construction</h1>
                <p className="text-xl md:text-2xl font-light text-gray-200 max-w-2xl bg-black bg-opacity-40 p-4 rounded-xl backdrop-blur-sm">Premium Building Approvals & Contracting in Dubai</p>
            </div>
        </div>
    );
}
