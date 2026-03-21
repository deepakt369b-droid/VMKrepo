import React from 'react';
import Link from 'next/link';
import Threads from '@/components/Threads';
import Glass3DIcon from '@/components/Glass3DIcon';

const authorities = [
    {
        name: 'Dubai Municipality',
        abbr: 'DM',
        color: 'from-green-500/20 to-green-600/5',
        border: 'border-green-500/20 group-hover:border-green-500/50',
        accent: 'text-green-400',
        glow: 'group-hover:shadow-[0_0_25px_rgba(34,197,94,0.15)]',
        desc: 'Concept design approval, structural clearance, and modification permits for residential and commercial projects.',
        scope: ['New Build Permits', 'Structural Modifications', 'Change of Use', 'NOC Applications', 'Building Completion Certificate'],
        icon: (
            <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="currentColor" fillOpacity="0.15" />
                <path d="M8 32V16l12-8 12 8v16H8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M16 32v-8h8v8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M20 8v4M8 20h24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        name: 'Dubai Civil Defense',
        abbr: 'DCD',
        color: 'from-red-500/20 to-red-600/5',
        border: 'border-red-500/20 group-hover:border-red-500/50',
        accent: 'text-red-400',
        glow: 'group-hover:shadow-[0_0_25px_rgba(239,68,68,0.15)]',
        desc: 'Fire & life safety drawings, emergency exit planning, material approvals, and final inspection scheduling.',
        scope: ['Fire Detection Systems', 'Suppression Systems', 'Emergency Lighting & Exits', 'DCD Inspections & Sign-off', 'Safety Compliance Certificates'],
        icon: (
            <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="currentColor" fillOpacity="0.15" />
                <path d="M20 6c-2 6-8 8-8 14a8 8 0 0016 0c0-6-6-8-8-14z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M20 22a4 4 0 00-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="20" cy="27" r="2" fill="currentColor" />
            </svg>
        ),
    },
    {
        name: 'DEWA & Utilities',
        abbr: 'DEWA',
        color: 'from-amber-500/20 to-amber-600/5',
        border: 'border-amber-500/20 group-hover:border-amber-500/50',
        accent: 'text-amber-400',
        glow: 'group-hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]',
        desc: 'Electrical load scheduling, water & drainage connections, smart meter installation, and green building compliance.',
        scope: ['Electrical Load Approval', 'Water Connection NOC', 'Drainage & Sewerage', 'Smart Meter Installation', 'Green Building Standards'],
        icon: (
            <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="currentColor" fillOpacity="0.15" />
                <path d="M22 6l-8 16h8l-2 12 10-18h-8L22 6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        name: 'Trakhees / Free Zones',
        abbr: 'TRAKHEES',
        color: 'from-purple-500/20 to-purple-600/5',
        border: 'border-purple-500/20 group-hover:border-purple-500/50',
        accent: 'text-purple-400',
        glow: 'group-hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]',
        desc: 'Free zone development approvals for Palm Jumeirah, JAFZA, DMCC, Dubai South, and all offshore zones.',
        scope: ['JAFZA Approvals', 'DMCC Fit-out Permits', 'Dubai South NOCs', 'Palm Jumeirah Compliance', 'Free Zone BCC'],
        icon: (
            <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="currentColor" fillOpacity="0.15" />
                <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M20 10v20M10 20h20M13 13l14 14M27 13L13 27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
];

const approvalSteps = [
    { num: '01', title: 'Initial Consultation', desc: 'VMK conducts a site assessment and reviews your architectural drawings and project scope.' },
    { num: '02', title: 'Document Preparation', desc: 'Our team prepares all required submission packages — concept designs, NOC applications, and authority forms.' },
    { num: '03', title: 'Authority Submission', desc: 'We submit to the relevant authorities on your behalf and track the status daily.' },
    { num: '04', title: 'Site Inspections', desc: 'We coordinate and attend all authority site visits, handling queries on-the-spot.' },
    { num: '05', title: 'Approval & Permits', desc: 'Once approvals are granted, we deliver all certificates and documents to you ready for construction.' },
];

export default function PlanningPage() {
    return (
        <main className="min-h-screen bg-black text-white">

            {/* ── Hero ── */}
            <section className="relative pt-40 pb-20 px-6 overflow-hidden gold-texture-bg">
                <div className="absolute inset-0 z-0 opacity-60">
                    <Threads amplitude={2} distance={0} color={[0.25, 0.18, 0.05]} />
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px w-12 bg-white/60" />
                        <span className="text-white text-xs font-bold tracking-[0.3em] uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">Planning & Approvals</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight max-w-4xl">
                        Authority Approvals{' '}
                        <span className="text-white drop-shadow-lg">
                            Done Right
                        </span>
                    </h1>
                    <p className="text-xl text-white/85 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] max-w-3xl leading-relaxed mb-10">
                        Navigating Dubai&apos;s regulatory landscape requires deep experience and established relationships. VMK handles every authority from DM to DEWA — so you can focus on your vision.
                    </p>
                    <div className="flex flex-wrap gap-6">
                        {[
                            { label: '500+', sub: 'Permits Secured' },
                            { label: '15+', sub: 'Authorities Handled' },
                            { label: '21 Days', sub: 'Avg. DM Approval' },
                        ].map((s) => (
                            <div key={s.sub} className="text-center">
                                <div className="text-3xl font-bold text-white drop-shadow-lg">{s.label}</div>
                                <div className="text-white/70 text-xs uppercase tracking-wider mt-1">{s.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Authority Cards ── */}
            <section className="py-16 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Authorities We Work With</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {authorities.map((auth) => (
                            <div
                                key={auth.name}
                                className={`group relative p-8 rounded-2xl border bg-gradient-to-br ${auth.color} ${auth.border} transition-all duration-400 ${auth.glow} hover:-translate-y-1`}
                            >
                                <Glass3DIcon className={`${auth.accent} w-16 h-16 rounded-2xl mb-5`}>{auth.icon}</Glass3DIcon>
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <span className={`text-xs font-bold tracking-widest uppercase ${auth.accent} mb-1 block`}>{auth.abbr}</span>
                                        <h3 className="text-xl font-bold text-white">{auth.name}</h3>
                                    </div>
                                </div>
                                <p className="text-neutral-400 text-sm leading-relaxed mb-6">{auth.desc}</p>
                                <ul className="space-y-2">
                                    {auth.scope.map((item) => (
                                        <li key={item} className="flex items-center text-xs text-neutral-300 gap-2">
                                            <span className={`w-1.5 h-1.5 rounded-full ${auth.accent.replace('text-', 'bg-')} shrink-0`} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Approval Process Timeline ── */}
            <section className="py-20 px-6 bg-neutral-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Our Approval Process</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full" />
                    </div>
                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/60 via-amber-500/20 to-transparent" />
                        <div className="space-y-10">
                            {approvalSteps.map((step, i) => (
                                <div key={step.num} className="group relative flex gap-8 items-start">
                                    <div className="relative z-10 w-16 h-16 shrink-0 rounded-full border-2 border-amber-500/40 bg-black flex items-center justify-center group-hover:border-amber-500 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300">
                                        <span className="text-amber-500 font-bold text-sm">{step.num}</span>
                                    </div>
                                    <div className="pb-2 pt-3 flex-1 bg-black/30 group-hover:bg-black/60 rounded-xl px-6 border border-white/0 group-hover:border-white/5 transition-all duration-300">
                                        <h3 className="font-bold text-white text-lg mb-2 group-hover:text-amber-400 transition-colors">{step.title}</h3>
                                        <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-20 px-6 text-center border-t border-white/5">
                <h2 className="text-3xl font-serif font-bold text-white mb-4">Need Approvals Fast?</h2>
                <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Share your project details and our approvals team will respond within 24 hours.</p>
                <Link href="/contact" className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold uppercase tracking-widest text-sm rounded-full shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all duration-300 hover:-translate-y-0.5">
                    Start Your Approval
                </Link>
            </section>

        </main>
    );
}
