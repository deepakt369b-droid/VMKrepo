import React from 'react';
import Link from 'next/link';
import Threads from '@/components/Threads';
import Glass3DIcon from '@/components/Glass3DIcon';

const phases = [
    {
        num: '01',
        title: 'Site Preparation & Foundation',
        desc: 'Earthworks, grading, dewatering, piling, and laying the robust foundation system required for structural stability in Dubai\'s varied soil conditions.',
        items: ['Excavation & Earthworks', 'Piling & Ground Improvement', 'Foundation Concrete Pour', 'Waterproofing & Drainage'],
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 17h18" />
            </svg>
        ),
    },
    {
        num: '02',
        title: 'Superstructure & Structural Frame',
        desc: 'Erecting the structural frame with precision-cast concrete columns, beams, and slabs — from podium to rooftop — meeting all DM structural standards.',
        items: ['Concrete Formwork & Reinforcement', 'Structural Columns & Beams', 'Slab Casting & Curing', 'Post-tension & Specialist Structures'],
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        num: '03',
        title: 'MEP Systems Installation',
        desc: 'Full integration of Mechanical, Electrical, and Plumbing systems — designed and executed to DEWA, SEWA, and Civil Defense specifications.',
        items: ['Electrical & Lighting Systems', 'HVAC & Ventilation', 'Plumbing & Fire Suppression', 'Smart Building & BMS Integration'],
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        num: '04',
        title: 'Fit-out & Interior Finishing',
        desc: 'Bespoke interior partitions, premium flooring, custom joinery and the architectural finishing touches that define the final character of your build.',
        items: ['Drylining & Gypsum Partitions', 'High-End Flooring & Tiling', 'Custom Joinery & Millwork', 'Façade & External Works'],
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
        ),
    },
];

const capabilities = [
    'Residential Villas', 'High-Rise Towers', 'Commercial Office Buildings',
    'Retail & Mall Fit-outs', 'Hotel & Hospitality', 'Mixed-Use Developments',
    'Warehouse & Industrial', 'Healthcare Facilities', 'Educational Buildings',
    'Free Zone Projects',
];

export default function ConstructionPage() {
    return (
        <main className="min-h-screen bg-black text-white">

            {/* ── Hero ── */}
            <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Threads amplitude={2} distance={0} color={[1, 1, 1]} />
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px w-12 bg-amber-500/60" />
                        <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">Construction & Execution</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight max-w-4xl">
                        Where Blueprints Become{' '}
                        <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                            Reality
                        </span>
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-3xl leading-relaxed mb-12">
                        Our expert site teams manage the entire on-site execution phase — from the first concrete pour to the final coat of paint — with precision engineering and premium craftsmanship.
                    </p>
                    <div className="flex flex-wrap gap-8">
                        {[
                            { value: '200+', label: 'Projects Built' },
                            { value: 'AED 2B+', label: 'Project Value' },
                            { value: '98%', label: 'On-Time Completion' },
                        ].map((s) => (
                            <div key={s.label}>
                                <div className="text-3xl font-bold bg-gradient-to-b from-amber-400 to-amber-600 bg-clip-text text-transparent">{s.value}</div>
                                <div className="text-neutral-500 text-xs uppercase tracking-wider mt-1">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Phase Cards ── */}
            <section className="py-16 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Construction Phases</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {phases.map((phase) => (
                            <div
                                key={phase.num}
                                className="group relative p-8 bg-neutral-950/80 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.08)] overflow-hidden"
                            >
                                {/* Gradient number watermark */}
                                <div className="absolute top-4 right-6 text-8xl font-black text-white/3 select-none pointer-events-none leading-none">
                                    {phase.num}
                                </div>

                                <Glass3DIcon className="w-14 h-14 rounded-xl mb-6 relative z-10 group-hover:-translate-y-1 transition-all duration-300">
                                    {phase.icon}
                                </Glass3DIcon>

                                <div className="relative z-10">
                                    <span className="text-amber-500/70 text-xs font-bold tracking-widest uppercase mb-1 block">Phase {phase.num}</span>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{phase.title}</h3>
                                    <p className="text-neutral-500 text-sm leading-relaxed mb-6">{phase.desc}</p>
                                    <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                                        {phase.items.map((item) => (
                                            <li key={item} className="flex items-center text-xs text-neutral-400 gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Capabilities Banner ── */}
            <section className="py-16 px-6 bg-neutral-950 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-serif text-white mb-3">Project Types We Build</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {capabilities.map((cap) => (
                            <span
                                key={cap}
                                className="px-4 py-2 rounded-full text-sm bg-black/60 border border-white/5 text-neutral-400 hover:border-amber-500/30 hover:text-amber-400 transition-all duration-200 cursor-default"
                            >
                                {cap}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Quality Standards Strip ── */}
            <section className="py-16 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'ISO Certified', desc: 'All site operations follow ISO 9001 quality management standards.', icon: '🏆' },
                            { title: 'Accredited Engineers', desc: 'UAE-licensed structural, MEP, and civil engineers on every project.', icon: '📋' },
                            { title: 'Safety First', desc: 'Zero-incident culture — full OSHA compliance on all active sites.', icon: '🦺' },
                        ].map((q) => (
                            <div key={q.title} className="flex gap-5 p-6 bg-neutral-950/80 rounded-2xl border border-white/5 hover:border-amber-500/20 transition-all">
                                <div className="text-2xl shrink-0">{q.icon}</div>
                                <div>
                                    <h3 className="font-bold text-white mb-1">{q.title}</h3>
                                    <p className="text-neutral-500 text-sm leading-relaxed">{q.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-20 px-6 text-center border-t border-white/5">
                <h2 className="text-3xl font-serif font-bold text-white mb-4">Ready to Break Ground?</h2>
                <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Get a comprehensive construction quote from our team within 24 hours.</p>
                <Link href="/contact" className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold uppercase tracking-widest text-sm rounded-full shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all duration-300 hover:-translate-y-0.5">
                    Request a Quote
                </Link>
            </section>

        </main>
    );
}
