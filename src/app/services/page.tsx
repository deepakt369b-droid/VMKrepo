import React from 'react';
import Link from 'next/link';
import Threads from '@/components/Threads';
import Glass3DIcon from '@/components/Glass3DIcon';

const services = [
    {
        title: 'Dubai Municipality Approvals',
        shortTitle: 'DM Approvals',
        desc: 'Fast-tracked permit clearance for new builds, structural modifications, and change-of-use projects. We handle all DM paperwork, fee submissions, and on-site inspections.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        link: '/planning',
        items: ['New Build Permits', 'Structural Modifications', 'Change of Use', 'NOC Applications'],
    },
    {
        title: 'Civil Defense Compliance',
        shortTitle: 'DCD',
        desc: 'Comprehensive safety compliance including fire detection, suppression systems, emergency exits, and Civil Defense inspection coordination.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
            </svg>
        ),
        link: '/planning',
        items: ['Fire Safety Systems', 'Emergency Exits', 'DCD Inspections', 'Safety Certificates'],
    },
    {
        title: 'General Contracting',
        shortTitle: 'Build',
        desc: 'End-to-end construction execution for residential villas, commercial towers, and mixed-use developments — with premium craftsmanship at every stage.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        link: '/construction',
        items: ['Residential Villas', 'Commercial Buildings', 'Mixed-Use Projects', 'Structural Works'],
    },
    {
        title: 'Fit-out & Renovation',
        shortTitle: 'Fit-out',
        desc: 'Commercial office fit-outs, retail spaces, hotel renovations, and residential interior upgrades in DIFC, Downtown, and across the UAE.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
        ),
        link: '/construction',
        items: ['Office Fit-outs', 'Retail Fit-outs', 'Hotel Renovation', 'Residential Renovation'],
    },
    {
        title: 'Authority Expediting',
        shortTitle: 'Expediting',
        desc: 'Specialist liaison with DEWA, Etisalat, Trakhees, JAFZA, DMCC, and Dubai South to accelerate utility connections and free zone approvals.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        link: '/planning',
        items: ['DEWA Connections', 'Trakhees Approvals', 'Free Zone NOCs', 'DMCC / JAFZA'],
    },
    {
        title: 'Project Handover',
        shortTitle: 'Handover',
        desc: 'Comprehensive final-mile services including completion inspections, snag-list clearance, final authority sign-offs, and key turnover to the client.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
        link: '/handover',
        items: ['Snag Resolution', 'Final Inspections', 'Authority Sign-offs', 'Key Turnover'],
    },
];

const process = [
    { step: '01', title: 'Consultation', desc: 'We assess your site, scope, and regulatory requirements.' },
    { step: '02', title: 'Planning & Approval', desc: 'We handle all documentation and liaison with Dubai authorities.' },
    { step: '03', title: 'Construction', desc: 'Our certified teams execute the build to specification and schedule.' },
    { step: '04', title: 'Handover', desc: 'Final inspections, certifications, and a seamless handover to you.' },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-black text-white">

            {/* ── Hero ── */}
            <section className="relative pt-40 pb-24 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Threads amplitude={2} distance={0} color={[1, 1, 1]} />
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px w-12 bg-amber-500/60" />
                        <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">What We Offer</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight max-w-4xl">
                        Comprehensive{' '}
                        <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                            Construction Services
                        </span>
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-3xl leading-relaxed">
                        From authority approvals to project handover — every service you need to build in Dubai, under one roof.
                    </p>
                </div>
            </section>

            {/* ── Services Grid ── */}
            <section className="py-16 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((srv) => (
                            <Link href={srv.link} key={srv.title} className="block group">
                                <div className="h-full bg-neutral-950/80 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.08)]">
                                    <Glass3DIcon className="w-14 h-14 rounded-xl mb-6 group-hover:-translate-y-1 transition-all duration-300">
                                        {srv.icon}
                                    </Glass3DIcon>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{srv.title}</h3>
                                    <p className="text-neutral-500 text-sm leading-relaxed mb-6">{srv.desc}</p>
                                    <ul className="space-y-2">
                                        {srv.items.map((item) => (
                                            <li key={item} className="flex items-center text-xs text-neutral-400 gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-6 flex items-center text-amber-500/70 text-sm font-semibold group-hover:text-amber-500 transition-colors">
                                        Learn more
                                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Process Timeline ── */}
            <section className="py-24 px-6 bg-neutral-950 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Our Process</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-neutral-400 max-w-2xl mx-auto">A streamlined four-step journey from consultation to completion.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                        {process.map((p, i) => (
                            <div key={p.step} className="relative flex flex-col items-start md:items-center text-left md:text-center px-6 group">
                                {/* Connector line (desktop only) */}
                                {i < process.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-amber-500/40 to-transparent z-0" />
                                )}
                                <div className="relative z-10 w-16 h-16 rounded-full bg-black border-2 border-amber-500/50 flex items-center justify-center mb-6 group-hover:border-amber-500 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300">
                                    <span className="text-amber-500 font-bold text-lg">{p.step}</span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{p.title}</h3>
                                <p className="text-neutral-500 text-sm">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-20 px-6 text-center border-t border-white/5">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Ready to Start Your Project?</h2>
                <p className="text-neutral-400 mb-8 max-w-xl mx-auto">Get a comprehensive quote from our team within 24 hours.</p>
                <Link href="/contact" className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold uppercase tracking-widest text-sm rounded-full shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all duration-300 hover:-translate-y-0.5">
                    Request a Quote
                </Link>
            </section>

        </main>
    );
}
