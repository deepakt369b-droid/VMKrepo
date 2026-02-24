"use client";

import React, { useState } from 'react';
import { useUI } from '@/contexts/UIContext';
import { X } from 'lucide-react';

export default function QuoteModal() {
    const { isQuoteModalOpen, closeQuoteModal } = useUI();

    // Basic submission state
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    if (!isQuoteModalOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => {
                closeQuoteModal();
                setStatus('idle');
            }, 2000);
        }, 1000);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div
                className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative animate-in slide-in-from-bottom-4 duration-300"
            >
                <button
                    onClick={closeQuoteModal}
                    className="absolute right-4 top-4 text-neutral-400 hover:text-white transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="p-8">
                    <h2 className="text-2xl font-bold text-amber-500 mb-2">Request a Quote</h2>
                    <p className="text-neutral-400 mb-6 text-sm">
                        Fill out the form below and our team will get back to you with a comprehensive proposal tailored for your Dubai project.
                    </p>

                    {status === 'success' ? (
                        <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-lg text-center h-48 flex items-center justify-center">
                            <div>
                                <svg className="w-12 h-12 mx-auto mb-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <p className="font-medium">Request Sent Successfully</p>
                                <p className="text-sm opacity-80 mt-1">We'll be in touch shortly.</p>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-neutral-300 mb-1">Full Name</label>
                                <input required type="text" className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all placeholder:text-neutral-600" placeholder="John Doe" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-300 mb-1">Email</label>
                                    <input required type="email" className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all placeholder:text-neutral-600" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-300 mb-1">Phone</label>
                                    <input required type="tel" className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all placeholder:text-neutral-600" placeholder="+971 50 000 0000" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-neutral-300 mb-1">Project Type</label>
                                <select className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all appearance-none cursor-pointer">
                                    <option>Commercial Fit-out</option>
                                    <option>Residential Construction</option>
                                    <option>Authority Approvals Only</option>
                                    <option>Turnkey Project</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-neutral-300 mb-1">Project Details</label>
                                <textarea required rows={3} className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all placeholder:text-neutral-600 resize-none" placeholder="Briefly describe your requirements..."></textarea>
                            </div>

                            <div className="pt-2">
                                <button
                                    disabled={status === 'submitting'}
                                    type="submit"
                                    className="w-full bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-lg px-4 py-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center justify-between"
                                >
                                    {status === 'submitting' ? 'Sending via our secure system...' : 'Submit Request'}
                                    {status !== 'submitting' && <span aria-hidden="true">&rarr;</span>}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
