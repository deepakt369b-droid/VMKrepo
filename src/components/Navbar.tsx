"use client";

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUI } from '@/contexts/UIContext';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';

export default function Navbar() {
    const { openQuoteModal, isAudioPlaying, toggleAudio } = useUI();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = React.useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            if (isAudioPlaying) {
                audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
            } else {
                audioRef.current.pause();
            }
        }
    }, [isAudioPlaying]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        {
            name: 'Services',
            href: '/services',
            dropdown: [
                { name: 'Planning', href: '/planning' },
                { name: 'Construction', href: '/construction' },
                { name: 'Handover', href: '/handover' },
            ]
        },
        { name: 'Contact', href: '/contact' },
        { name: 'Blog', href: '/blog' },
    ];

    const handleLogoClick = (e: React.MouseEvent) => {
        if (typeof window !== 'undefined' && pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-transparent backdrop-blur-sm transition-all duration-300" suppressHydrationWarning>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4" suppressHydrationWarning>
                <Link 
                    href="/" 
                    onClick={handleLogoClick}
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img src="/vmk-logo-new.png" alt="VMK Construction" className="h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-transform hover:scale-105" />
                </Link>
                <div className="flex items-center md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse" suppressHydrationWarning>
                    <audio
                        ref={audioRef}
                        loop
                        src="/audio/ambient.mp3"
                        preload="none"
                    />
                    <button
                        type="button"
                        onClick={toggleAudio}
                        className="text-neutral-400 hover:text-amber-500 p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                        aria-label={isAudioPlaying ? "Mute music" : "Play music"}
                    >
                        {isAudioPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                    </button>
                    <button
                        type="button"
                        onClick={openQuoteModal}
                        className="text-black bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:via-amber-300 hover:to-amber-500 font-bold rounded-full text-sm px-6 py-2 text-center transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transform hover:-translate-y-0.5"
                    >
                        Get a Quote
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-600"
                        aria-controls="navbar-sticky"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
                <div className={`items-center justify-between ${isOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky" suppressHydrationWarning>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-neutral-800 rounded-lg bg-black/80 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent w-full">
                        {navLinks.map((link) => (
                            <li key={link.name} className={link.dropdown ? "relative group" : ""}>
                                {link.dropdown ? (
                                    <>
                                        <Link
                                            href={link.href}
                                            className="flex items-center justify-between py-2 px-3 text-gray-300 rounded hover:bg-neutral-800 md:hover:bg-transparent md:hover:text-amber-500 md:p-0 transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                            <svg className="w-2.5 h-2.5 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </Link>
                                        <div className="hidden group-hover:block md:absolute left-0 top-full pt-4 min-w-[200px] z-50">
                                            <div className="font-normal bg-neutral-950/90 backdrop-blur-md divide-y divide-white/5 rounded-xl shadow-2xl border border-white/10 md:opacity-0 md:-translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 overflow-hidden">
                                                <ul className="py-2 text-sm text-gray-300">
                                                    {link.dropdown.map((sublink) => (
                                                        <li key={sublink.name}>
                                                            <Link
                                                                href={sublink.href}
                                                                className="block px-4 py-3 hover:bg-white/5 hover:text-amber-500 transition-colors"
                                                                onClick={() => setIsOpen(false)}
                                                            >
                                                                {sublink.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="block py-2 px-3 text-gray-300 rounded hover:bg-neutral-800 md:hover:bg-transparent md:hover:text-amber-500 md:p-0 transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
