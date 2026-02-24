import React from 'react';

export default function ConstructionPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 px-4 md:px-8 bg-neutral-950 text-white">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-amber-500 mb-6">Construction & Execution</h1>
                <p className="text-xl text-neutral-300 mb-12 leading-relaxed">
                    Where blueprints become reality. Our expert teams manage the entire on-site execution phase, bringing precision engineering and premium finishing to your Dubai project.
                </p>

                <div className="space-y-8">
                    <div className="bg-black p-8 rounded-2xl border border-neutral-800">
                        <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/20 text-amber-500 text-sm">1</span>
                            Site Preparation & Foundation
                        </h3>
                        <p className="text-neutral-400">Earthworks, grading, piling, and laying the robust foundation required for stability in varying soil conditions.</p>
                    </div>

                    <div className="bg-black p-8 rounded-2xl border border-neutral-800">
                        <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/20 text-amber-500 text-sm">2</span>
                            Superstructure & MEP
                        </h3>
                        <p className="text-neutral-400">Erecting the structural frame, concrete pouring, and integrating complex Mechanical, Electrical, and Plumbing systems.</p>
                    </div>

                    <div className="bg-black p-8 rounded-2xl border border-neutral-800">
                        <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/20 text-amber-500 text-sm">3</span>
                            Fit-out & Finishing
                        </h3>
                        <p className="text-neutral-400">Interior partitions, flooring, ceilings, bespoke joinery, and the premium architectural finishes that define the build quality.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
