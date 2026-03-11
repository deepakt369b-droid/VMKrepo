"use client";

import React, { useState } from 'react';

import { FAQ_DATA } from '@/lib/faqData';

const faqs = FAQ_DATA;

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-neutral-950 border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Frequently Asked Questions</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full mb-6 relative">
                        <div className="absolute inset-0 bg-amber-500 blur-sm opacity-50"></div>
                    </div>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                        Everything you need to know about working with VMK Construction in Dubai.
                    </p>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`rounded-xl border transition-all duration-300 overflow-hidden ${isOpen
                                    ? 'border-amber-500/40 bg-black/60 shadow-[0_0_20px_rgba(212,175,55,0.08)]'
                                    : 'border-white/5 bg-black/30 hover:border-white/10'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between text-left px-6 py-5 group cursor-pointer"
                                    aria-expanded={isOpen}
                                >
                                    <span className={`font-semibold text-base transition-colors ${isOpen ? 'text-amber-400' : 'text-white group-hover:text-amber-400'}`}>
                                        {faq.question}
                                    </span>
                                    <span className={`ml-4 shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-amber-500 rotate-45' : 'bg-white/5 group-hover:bg-white/10'}`}>
                                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <p className="px-6 pb-6 text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
