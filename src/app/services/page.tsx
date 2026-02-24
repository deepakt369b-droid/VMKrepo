import React from 'react';
import Link from 'next/link';

export default function ServicesPage() {
    const services = [
        { title: "Dubai Municipality Approvals", desc: "Fast-tracked clearance for modifications and new builds.", link: "/planning" },
        { title: "Civil Defense Compliance", desc: "Safety regulations and fire prevention system approvals.", link: "/planning" },
        { title: "General Contracting", desc: "End-to-end construction execution with premium finish.", link: "/construction" },
        { title: "Fit-out & Renovation", desc: "Commercial and residential interior upgrades.", link: "/construction" },
        { title: "Project Handover", desc: "Final inspections, deep cleaning, and key turnover.", link: "/handover" }
    ];

    return (
        <main className="min-h-screen pt-32 pb-16 px-4 md:px-8 bg-neutral-950 text-white">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-amber-500 mb-6 text-center">Our Services</h1>
                <p className="text-xl text-neutral-400 mb-16 text-center max-w-2xl mx-auto">
                    Comprehensive construction solutions designed for the Dubai real estate market.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((srv, i) => (
                        <Link href={srv.link} key={i} className="block group">
                            <div className="h-full bg-black border border-neutral-800 p-8 rounded-2xl hover:border-amber-500/50 transition-colors">
                                <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-amber-400 transition-colors">{srv.title}</h3>
                                <p className="text-neutral-400">{srv.desc}</p>
                                <span className="inline-block mt-6 text-amber-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">Learn more &rarr;</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
