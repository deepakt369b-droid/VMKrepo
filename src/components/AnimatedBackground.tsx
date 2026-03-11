"use client";
import React, { ReactNode } from "react";

interface AuroraProps {
    colorStops?: string[];
    amplitude?: number;
    blend?: number;
    speed?: number;
    children?: ReactNode;
}

export default function Aurora({
    colorStops = ["#3A29ff", "#ff94b4", "#ff3232"],
    amplitude = 1.0,
    blend = 0.5,
    speed = 1.0,
    children,
}: AuroraProps) {
    return (
        <div className="relative w-full h-full overflow-hidden bg-black isolation-auto">
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen aurora-bg">
                <style>{`
                    .aurora-bg {
                        background: linear-gradient(
                            45deg,
                            ${colorStops[0]},
                            ${colorStops[1]},
                            ${colorStops[2]}
                        );
                        background-size: 400% 400%;
                        animation: aurora-move ${20 / speed}s ease infinite;
                        filter: blur(${50 * blend}px) contrast(${1 + amplitude * 0.5});
                    }

                    @keyframes aurora-move {
                        0% { background-position: 0% 50%; border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%; }
                        25% { background-position: 50% 50%; border-radius: 60% 40% 60% 40% / 40% 60% 40% 60%; transform: scale(1.1) rotate(5deg); }
                        50% { background-position: 100% 50%; border-radius: 40% 60% 40% 60% / 60% 40% 60% 40%; transform: scale(0.9) rotate(-5deg); }
                        75% { background-position: 50% 50%; border-radius: 60% 40% 60% 40% / 40% 60% 40% 60%; transform: scale(1.1) rotate(5deg); }
                        100% { background-position: 0% 50%; border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%; transform: scale(1) rotate(0deg); }
                    }
                `}</style>
            </div>
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
}
