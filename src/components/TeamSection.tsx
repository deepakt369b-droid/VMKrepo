import React from 'react';

import { TEAM_DATA } from '@/lib/teamData';

const teamMembers = TEAM_DATA;

export default function TeamSection() {
    return (
        <section className="py-24 bg-neutral-950 relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Meet Our Experts</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full mb-6 relative">
                        <div className="absolute inset-0 bg-amber-500 blur-sm opacity-50"></div>
                    </div>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                        The visionary leaders and dedicated professionals driving VMK Construction forward.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="group relative bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
                        >
                            <div className="aspect-[3/4] overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 pointer-events-none scale-100 group-hover:scale-105"
                                />

                                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-amber-500 text-sm tracking-widest uppercase font-semibold mb-4 opacity-100">
                                        {member.role}
                                    </p>
                                    <p className="text-neutral-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {member.description}
                                    </p>

                                    {/* Social links appearing on hover */}
                                    <div className="flex gap-4 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                        <a href="#" className="text-white/50 hover:text-amber-500 transition-colors">
                                            <span className="sr-only">LinkedIn</span>
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                                        </a>
                                        <a href="#" className="text-white/50 hover:text-amber-500 transition-colors">
                                            <span className="sr-only">Twitter</span>
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
