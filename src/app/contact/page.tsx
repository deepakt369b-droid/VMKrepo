"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Threads from '@/components/Threads';
import Glass3DIcon from '@/components/Glass3DIcon';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTACT_SETTINGS } from '@/lib/contactSettings';

function toWaMeNumber(value: string): string {
    return value.replace(/\D/g, '');
}

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Project Enquiry from ${form.name}`);
        const body = encodeURIComponent(
            `Hi VMK Construction,\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
        );
        const waText = encodeURIComponent(`Hi VMK Construction, my name is ${form.name}. I'd like to discuss a project.`);
        const waNumber = toWaMeNumber(CONTACT_SETTINGS.whatsappNumber);

        // Send server-side notification if SMTP is configured (best-effort)
        fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        }).catch(() => { });

        // Open email client
        window.open(`mailto:info@vmkconstruction.ae?subject=${subject}&body=${body}`);
        // Open WhatsApp
        window.open(`https://wa.me/${waNumber}?text=${waText}`, '_blank');

        setSubmitted(true);
    };

    const contactCards = [
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Visit Our Office",
            lines: ["Business Bay, Dubai", "United Arab Emirates"],
            action: null
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Call Us",
            lines: ["+971 4 000 0000", "Mon - Fri, 8am - 6pm"],
            action: "tel:+97140000000"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email Us",
            lines: ["info@vmkconstruction.ae", "quotes@vmkconstruction.ae"],
            action: "mailto:info@vmkconstruction.ae"
        }
    ];

    return (
        <main className="min-h-screen bg-black text-white">

            {/* ── Hero ── */}
            <section className="relative pt-40 pb-20 px-6 overflow-hidden gold-texture-bg">
                <div className="absolute inset-0 z-0 opacity-60">
                    <Threads amplitude={2} distance={0} color={[0.25, 0.18, 0.05]} />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-px w-12 bg-white/60" />
                        <span className="text-white text-xs font-bold tracking-[0.3em] uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">Get In Touch</span>
                        <div className="h-px w-12 bg-white/60" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                        Let's Build Something {' '}
                        <span className="text-white drop-shadow-lg">
                            Extraordinary
                        </span>
                    </h1>
                    <p className="text-xl text-white/85 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] max-w-2xl mx-auto leading-relaxed">
                        Whether you have a project ready to go or just want to explore options — our team responds within 24 hours.
                    </p>
                </div>
            </section>

            {/* ── Contact Info & Form ── */}
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

                    {/* Left Column: Info Cards */}
                    <div>
                        <h2 className="text-3xl font-bold font-serif mb-8">Direct Contact</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6 mb-12">
                            {contactCards.map((card) => (
                                <div key={card.title} className="group p-6 bg-neutral-950/80 border border-white/5 rounded-2xl hover:border-amber-500/30 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.02)]">
                                    <Glass3DIcon className="w-12 h-12 rounded-xl mb-4 group-hover:-translate-y-1 transition-all duration-300">
                                        {card.icon}
                                    </Glass3DIcon>
                                    <h3 className="font-bold text-white mb-2 text-lg">{card.title}</h3>
                                    {card.lines.map((line, i) => (
                                        <p key={i} className="text-neutral-400 text-sm">{line}</p>
                                    ))}
                                    {card.action && (
                                        <a href={card.action} className="mt-4 inline-block text-amber-500 text-sm font-semibold hover:text-amber-400 transition-colors">Connect &rarr;</a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-neutral-950/80 border border-white/5 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(212,175,55,0.03)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

                        <div className="relative z-10">
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                                    <Glass3DIcon className="w-20 h-20 rounded-full mb-6 relative group-hover:scale-105">
                                        <svg className="w-10 h-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </Glass3DIcon>
                                    <h3 className="text-3xl font-bold text-amber-500 mb-4">Request Sent!</h3>
                                    <p className="text-neutral-400 max-w-sm mx-auto">
                                        Your email client and WhatsApp have been prompted. We look forward to connecting with you shortly!
                                    </p>
                                    <button onClick={() => setSubmitted(false)} className="mt-8 text-neutral-500 hover:text-white transition-colors text-sm">
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <h2 className="text-2xl font-bold font-serif mb-8">Send an Enquiry</h2>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-neutral-400">Full Name</label>
                                            <input required type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-colors" placeholder="John Doe" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-neutral-400">Email Address</label>
                                            <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-colors" placeholder="john@company.com" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-neutral-400">Phone Number</label>
                                        <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-colors" placeholder="+971 50 000 0000" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-neutral-400">Project Details</label>
                                        <textarea required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-colors resize-none" placeholder="Tell us about what you want to build..."></textarea>
                                    </div>

                                    <button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all hover:-translate-y-0.5 mt-4">
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Google Map Embed ── */}
            <section className="w-full h-96 relative border-t border-white/5 opacity-80 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.47596061325!2d55.14539825595304!3d25.074282305596482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </main>
    );
}
