import React from 'react';
import Link from 'next/link';
import Threads from '@/components/Threads';
import Glass3DIcon from '@/components/Glass3DIcon';

const checklistItems = [
    {
        title: 'As-Built Drawing Package',
        desc: 'Comprehensive final architectural, structural, and MEP drawings reflecting the exact constructed state of the building.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
        ),
    },
    {
        title: 'Equipment O&M Manuals',
        desc: 'Detailed operation and maintenance manuals for all mechanical, electrical, and plumbing systems installed.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
    },
    {
        title: 'Warranty Certificates',
        desc: 'Indexed collection of all manufacturer warranties and guarantees, fully transferred to the owner.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        title: 'Authority Approval Dossier',
        desc: 'Compilation of the Building Completion Certificate (BCC), DCD compliance, and DEWA clearance forms.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
];

export default function HandoverPage() {
    return (
        <main className="min-h-screen bg-black text-white">

            {/* ── Hero ── */}
            <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Threads amplitude={2} distance={0} color={[1, 1, 1]} />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-px w-12 bg-amber-500/60" />
                        <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">Handover Services</span>
                        <div className="h-px w-12 bg-amber-500/60" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
                        The Final{' '}
                        <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                            Mile
                        </span>
                        , Perfected
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                        The handover phase is where promises are delivered. We secure the Building Completion Certificate, test every system, and hand over the keys with full confidence.
                    </p>
                </div>
            </section>

            {/* ── Process ── */}
            <section className="py-24 px-6 border-t border-white/5 relative bg-neutral-950">
                <div className="max-w-7xl mx-auto">

                    <div className="relative rounded-2xl overflow-hidden border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-black to-black p-10 md:p-14 text-center shadow-[0_0_50px_rgba(212,175,55,0.1)]">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05),transparent_70%)] pointer-events-none" />
                        <div className="relative z-10">
                            <Glass3DIcon className="w-20 h-20 rounded-full mx-auto mb-6">
                                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </Glass3DIcon>

                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Building Completion Certificate (BCC)</h2>
                            <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-8">
                                In Dubai, obtaining the BCC from Dubai Municipality or relevant free zone authority is the critical milestone that marks a building as legally fit for occupancy. VMK expedites this process seamlessly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Deliverables Grid ── */}
            <section className="py-24 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">The Handover Package</h2>
                        <p className="text-lg text-neutral-400 max-w-2xl mx-auto">Everything you need to operate, maintain, and secure your new asset.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {checklistItems.map((item, i) => (
                            <div key={item.title} className="group p-8 bg-neutral-950/80 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-amber-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.08)] relative overflow-hidden">
                                <div className="absolute top-4 right-6 text-8xl font-black text-white/5 select-none pointer-events-none leading-none">
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                                <Glass3DIcon className="w-14 h-14 rounded-xl mb-6 relative z-10">
                                    {item.icon}
                                </Glass3DIcon>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{item.title}</h3>
                                    <p className="text-neutral-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
