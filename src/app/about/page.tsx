import React from 'react';
import Link from 'next/link';
import Threads from '@/components/Threads';
import Glass3DIcon from '@/components/Glass3DIcon';

const milestones = [
    { year: '2009', event: 'VMK Construction founded in Dubai with a focus on authority approvals.' },
    { year: '2013', event: 'Expanded into full general contracting — residential and commercial.' },
    { year: '2017', event: 'Completed 100th major project; opened second office in Business Bay.' },
    { year: '2021', event: 'Launched dedicated fit-out division serving DIFC and Downtown Dubai.' },
    { year: '2024', event: 'Recognised as a top-tier contractor by Dubai Municipality.' },
    { year: '2026', event: 'Actively delivering 30+ projects simultaneously across the UAE.' },
];

const values = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: 'Integrity',
        desc: 'Transparent pricing, honest timelines, and zero hidden fees — always.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: 'Speed',
        desc: 'We move fast without cutting corners — approval processes that save you weeks.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
        title: 'Excellence',
        desc: "Premium finishes and engineering standards that exceed every client's expectation.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: 'Partnership',
        desc: 'We treat every project as our own — a true long-term partner, not just a contractor.',
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white">

            {/* ── Hero ── */}
            <section className="relative pt-40 pb-24 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Threads
                        amplitude={2}
                        distance={0}
                        color={[1, 1, 1]} // White color instead of Gold
                    />
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px w-12 bg-white/60" />
                        <span className="text-white text-xs font-bold tracking-[0.3em] uppercase drop-shadow">Our Story</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight max-w-4xl drop-shadow-xl">
                        Building Dubai&apos;s Skyline
                        <br />
                        <span className="text-white drop-shadow-lg">Since 2009</span>
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-3xl leading-relaxed">
                        VMK Construction was founded on one principle: that exceptional construction doesn&apos;t have to be complicated. From our first project in Deira to landmark developments in the heart of DIFC, we have spent 15 years proving that quality and speed can coexist.
                    </p>
                </div>
            </section>

            {/* ── Stats Banner ── */}
            <section className="border-y border-white/5 bg-neutral-950 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '200+', label: 'Projects Delivered' },
                            { value: 'AED 2B+', label: 'Total Project Value' },
                            { value: '50+', label: 'Expert Team Members' },
                            { value: '15+', label: 'Years of Excellence' },
                        ].map((s) => (
                            <div key={s.label} className="text-center group">
                                <div className="text-4xl font-bold bg-gradient-to-b from-amber-400 to-amber-600 bg-clip-text text-transparent mb-2 group-hover:from-amber-300 group-hover:to-amber-500 transition-all duration-300">{s.value}</div>
                                <div className="text-gray-500 text-sm uppercase tracking-wider">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Values ── */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">What Drives Us</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full mb-6">
                            <div className="absolute inset-0 bg-amber-500 blur-sm opacity-50"></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v) => (
                            <div key={v.title} className="group p-8 bg-neutral-950/80 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.08)]">
                                <Glass3DIcon className="w-14 h-14 rounded-xl mb-6 group-hover:-translate-y-1 transition-all duration-300">
                                    {v.icon}
                                </Glass3DIcon>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{v.title}</h3>
                                <p className="text-neutral-500 text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Timeline ── */}
            <section className="py-24 px-6 bg-neutral-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Our Journey</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full mb-6"></div>
                    </div>
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/40 via-amber-500/20 to-transparent" />
                        <div className="space-y-12">
                            {milestones.map((m, i) => (
                                <div key={m.year} className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:gap-0`}>
                                    {/* Content */}
                                    <div className={`ml-20 md:ml-0 md:w-5/12 ${i % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                                        <div className="bg-black/60 backdrop-blur-sm border border-white/5 hover:border-amber-500/30 rounded-xl p-6 transition-all duration-300 group">
                                            <div className="text-amber-500 text-sm font-bold tracking-wider mb-2">{m.year}</div>
                                            <p className="text-neutral-300 text-sm leading-relaxed">{m.event}</p>
                                        </div>
                                    </div>
                                    {/* Dot */}
                                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(212,175,55,0.6)] mt-6 md:mt-5" />
                                    {/* Spacer for alternating layout */}
                                    <div className="hidden md:block md:w-5/12" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-20 px-6 text-center border-t border-white/5">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Let&apos;s Build Together</h2>
                <p className="text-neutral-400 mb-8 max-w-xl mx-auto">Ready to start your next project with a team that truly delivers?</p>
                <Link href="/contact" className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold uppercase tracking-widest text-sm rounded-full shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all duration-300 hover:-translate-y-0.5">
                    Contact Us
                </Link>
            </section>

        </main>
    );
}
