"use client";

import React from 'react';
import { useUI } from '@/contexts/UIContext';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
    const { openQuoteModal } = useUI();

    return (
        <main className="min-h-screen pt-32 pb-16 px-4 md:px-8 bg-neutral-950 text-white relative flex flex-col items-center">
            <div className="w-full max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-amber-500 mb-6">Get In Touch</h1>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                        Ready to start your next project in Dubai? Contact our team for expert advice, authority approval tracking, or a comprehensive construction quote.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    <div className="bg-black border border-neutral-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-amber-500/30 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
                            <MapPin />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Head Office</h3>
                        <p className="text-neutral-400 text-sm">Business Bay, Dubai<br />United Arab Emirates</p>
                    </div>

                    <div className="bg-black border border-neutral-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-amber-500/30 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
                            <Phone />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Phone Support</h3>
                        <p className="text-neutral-400 text-sm">+971 4 000 0000<br />Mon - Fri, 8am to 6pm</p>
                    </div>

                    <div className="bg-black border border-neutral-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-amber-500/30 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
                            <Mail />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Email Address</h3>
                        <p className="text-neutral-400 text-sm">info@vmkconstruction.ae<br />quotes@vmkconstruction.ae</p>
                    </div>
                </div>

                <div className="bg-amber-500 text-black rounded-3xl p-8 md:p-12 text-center flex flex-col items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.2)]">
                    <h2 className="text-3xl font-bold mb-4">Request a Specific Proposal</h2>
                    <p className="mb-8 font-medium opacity-80 max-w-lg">
                        Skip the email chain. Use our streamlined project inquiry form to give our estimators exactly what they need to cost your project.
                    </p>
                    <button
                        onClick={openQuoteModal}
                        className="bg-black text-amber-500 font-bold px-8 py-4 rounded-xl hover:bg-neutral-900 transition-colors flex items-center gap-2"
                    >
                        Open Quote Form &rarr;
                    </button>
                </div>
            </div>
        </main>
    );
}
