"use client";

import React from 'react';
import { PARTNER_DATA } from '@/lib/partnerData';
import { CAROUSEL_SETTINGS, CarouselSettings } from '@/lib/carouselSettings';

export default function PartnerMarquee({ overrideSettings }: { overrideSettings?: Partial<CarouselSettings> }) {
    const settings: CarouselSettings = { ...CAROUSEL_SETTINGS, ...overrideSettings };

    return (
        <section className="py-24 border-t border-white/5 bg-black overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center text-neutral-500 uppercase tracking-widest text-sm font-bold">
                Trusted by leading authorities & developers
            </div>

            <div className="flex w-fit animate-marquee hover:pause whitespace-nowrap">
                {/* First set of logos */}
                <div className={`flex items-center px-12 md:px-16 ${settings.gap}`}>
                    {PARTNER_DATA.map((partner, i) => (
                        <div key={`set1-${i}`} className={`flex-shrink-0 transition-all duration-300 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-white/10 hover:scale-105 ${settings.padding} ${settings.fill} ${settings.opacity}`}>
                            <img
                                src={partner.src}
                                alt={partner.name}
                                className="h-16 md:h-20 w-auto object-contain max-w-[200px]"
                            />
                        </div>
                    ))}
                </div>
                {/* Duplicate set for seamless scrolling */}
                <div className={`flex items-center px-12 md:px-16 ${settings.gap}`}>
                    {PARTNER_DATA.map((partner, i) => (
                        <div key={`set2-${i}`} className={`flex-shrink-0 transition-all duration-300 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-white/10 hover:scale-105 ${settings.padding} ${settings.fill} ${settings.opacity}`}>
                            <img
                                src={partner.src}
                                alt={partner.name}
                                className="h-16 md:h-20 w-auto object-contain max-w-[200px]"
                            />
                        </div>
                    ))}
                </div>
                {/* Triple set just to ensure the marquee doesn't break on ultrawide screens */}
                <div className={`flex items-center px-12 md:px-16 ${settings.gap}`}>
                    {PARTNER_DATA.map((partner, i) => (
                        <div key={`set3-${i}`} className={`flex-shrink-0 transition-all duration-300 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-white/10 hover:scale-105 ${settings.padding} ${settings.fill} ${settings.opacity}`}>
                            <img
                                src={partner.src}
                                alt={partner.name}
                                className="h-16 md:h-20 w-auto object-contain max-w-[200px]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
