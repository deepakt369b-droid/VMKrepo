"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextType from "./ui/TextType";

// Register ScrollTrigger. It's safe to do this multiple times.
gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 158;

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
                img.onerror = () => {
                    loadedCount++;
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
        <div ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden z-0" suppressHydrationWarning>
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
            {/* Absolute overlay content would go here */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 pointer-events-none p-4 text-center mt-20" suppressHydrationWarning>
                <TextType
                    as="p"
                    text="Operating Across All Dubai Authorities"
                    className="text-sm font-bold tracking-[0.3em] mb-4 text-white uppercase"
                    typingSpeed={30}
                    showCursor={false}
                    loop={false}
                />
                <TextType
                    as="h1"
                    text="Building Dubai's Future"
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-widest mb-4 text-white uppercase font-sans [text-shadow:0_1px_0_rgb(204,204,204),0_2px_0_rgb(201,201,201),0_3px_0_rgb(187,187,187),0_4px_0_rgb(185,185,185),0_5px_0_rgb(170,170,170),0_6px_1px_rgba(0,0,0,0.1),0_0_5px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.3),0_3px_5px_rgba(0,0,0,0.2),0_5px_10px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.2),0_20px_20px_rgba(0,0,0,0.15)]"
                    typingSpeed={60}
                    initialDelay={1200}
                    showCursor={true}
                    cursorBlinkDuration={0.8}
                    loop={false}
                    hideCursorWhileTyping={true}
                />
                <TextType
                    as="p"
                    text="Construction & Authority Approvals"
                    className="text-3xl md:text-5xl italic text-amber-500 font-serif lowercase [text-shadow:0_1px_0_rgb(180,110,0),0_2px_0_rgb(160,95,0),0_3px_0_rgb(140,80,0),0_4px_0_rgb(120,65,0),0_5px_0_rgb(100,50,0),0_6px_1px_rgba(0,0,0,0.1),0_0_5px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.3),0_3px_5px_rgba(0,0,0,0.2),0_5px_10px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.2),0_20px_20px_rgba(0,0,0,0.15)]"
                    style={{ textTransform: 'capitalize' }}
                    typingSpeed={40}
                    initialDelay={2800}
                    showCursor={false}
                    loop={false}
                />

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center" suppressHydrationWarning>
                    <span className="text-xs uppercase tracking-[0.3em] text-white/70 mb-2" suppressHydrationWarning>Scroll</span>
                    <div className="w-[1px] h-16 bg-white/30 relative overflow-hidden" suppressHydrationWarning>
                        <div className="absolute top-0 left-0 w-full h-full bg-white animate-pulse" suppressHydrationWarning></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
