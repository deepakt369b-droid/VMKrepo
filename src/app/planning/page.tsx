import React from 'react';

export default function PlanningPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 px-4 md:px-8 bg-neutral-950 text-white">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-amber-500 mb-6">Planning & Approvals</h1>
                <p className="text-xl text-neutral-300 mb-12">
                    Navigating the regulatory landscape in Dubai requires expertise. We handle DM, DCD, and DEWA approvals efficiently.
                </p>

                <div className="bg-black border border-neutral-800 rounded-2xl overflow-hidden">
                    <div className="p-8 border-b border-neutral-800 hover:bg-neutral-900/50 transition-colors">
                        <h3 className="text-2xl font-bold text-white mb-2">Dubai Municipality (DM)</h3>
                        <p className="text-neutral-400">Concept design approval, structural clearance, and modification permits for residential villas and commercial spaces.</p>
                    </div>
                    <div className="p-8 border-b border-neutral-800 hover:bg-neutral-900/50 transition-colors">
                        <h3 className="text-2xl font-bold text-white mb-2">Dubai Civil Defense (DCD)</h3>
                        <p className="text-neutral-400">Fire and life safety drawings, material approvals, and final inspection scheduling to ensure 100% compliance.</p>
                    </div>
                    <div className="p-8 hover:bg-neutral-900/50 transition-colors">
                        <h3 className="text-2xl font-bold text-white mb-2">DEWA & Utilities</h3>
                        <p className="text-neutral-400">Electrical load scheduling, water connection approvals, and green building standard compliance.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
