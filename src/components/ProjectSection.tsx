import React from 'react';
import Link from 'next/link';

import { PROJECT_DATA } from '@/lib/projectData';

const projects = PROJECT_DATA;

export default function ProjectSection() {
    return (
        <section className="py-24 bg-black relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Our Projects</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full mb-6 relative">
                        <div className="absolute inset-0 bg-amber-500 blur-sm opacity-50"></div>
                    </div>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                        A showcase of our most iconic builds — where precision engineering meets premium craftsmanship.
                    </p>
                </div>

                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`group relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0 rounded-2xl overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.1)]`}
                        >
                            {/* Image */}
                            <div className="relative w-full lg:w-1/2 h-72 lg:h-auto min-h-[320px] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 filter brightness-75 group-hover:brightness-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black lg:block hidden"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent lg:hidden block"></div>

                                {/* Badge */}
                                <span className="absolute top-4 left-4 px-3 py-1 bg-amber-500 text-black text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                                    {project.badge}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="relative w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-neutral-900/80 backdrop-blur-md">
                                <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.2em] mb-3 block">{project.category}</span>
                                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-white mb-4 group-hover:text-amber-300 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-neutral-400 leading-relaxed mb-8">{project.description}</p>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-4 mb-8 pt-6 border-t border-white/5">
                                    {project.stats.map((stat) => (
                                        <div key={stat.label}>
                                            <p className="text-xl font-bold text-amber-500">{stat.value}</p>
                                            <p className="text-gray-500 text-xs uppercase tracking-wider">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center self-start text-white font-semibold border-b border-amber-500/50 pb-1 hover:text-amber-500 hover:border-amber-500 transition-all duration-300 group/link"
                                >
                                    View Details
                                    <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
