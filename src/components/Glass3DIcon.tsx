import React from 'react';

interface Glass3DIconProps {
    children: React.ReactNode;
    className?: string;
}

export default function Glass3DIcon({ children, className = '' }: Glass3DIconProps) {
    return (
        <div className={`relative flex items-center justify-center bg-gradient-to-b from-neutral-800 to-neutral-950 border border-white/10 shadow-[inset_0_2px_3px_rgba(255,255,255,0.15),inset_0_-2px_6px_rgba(0,0,0,0.8),0_10px_20px_rgba(0,0,0,0.6)] z-10 overflow-hidden ${className}`}>
            {/* Top glare / rim light for 3D extrusion */}
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

            {/* Glossy top half overlay */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

            {/* 3D Inner Icon styling with glow */}
            <div className="text-current drop-shadow-[0_2px_8px_currentColor] group-hover:drop-shadow-[0_4px_12px_currentColor] group-hover:scale-110 transition-all duration-300 relative z-20">
                {children}
            </div>

            {/* 3D base reflection beneath the icon */}
            <div className="absolute bottom-1 w-1/2 h-1 bg-amber-500/30 blur-[3px] rounded-full pointer-events-none"></div>
        </div>
    );
}
