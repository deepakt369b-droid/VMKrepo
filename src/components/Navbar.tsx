"use client";

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { useUI } from '@/contexts/UIContext';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';

export default function Navbar() {
    const { openQuoteModal, isAudioPlaying, toggleAudio } = useUI();
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
    ];

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-transparent backdrop-blur-sm transition-all duration-300" suppressHydrationWarning>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-3xl font-black whitespace-nowrap text-white uppercase font-sans">VMK</span>
                </Link>
                <div className="flex items-center md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse">
                    <audio
                        ref={audioRef}
                        loop
                        src="https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=ambient-piano-ampamp-strings-10711.mp3"
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
                        className="text-white bg-transparent border border-white hover:bg-white hover:text-black font-medium rounded-full text-sm px-6 py-2 text-center transition-colors"
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
                <div className={`items-center justify-between ${isOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
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
                                        <div className="hidden group-hover:block md:absolute left-0 mt-2 font-normal bg-black/95 divide-y divide-gray-100 rounded-lg shadow min-w-[200px] border border-white/10 md:opacity-0 md:-translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-200">
                                            <ul className="py-2 text-sm text-gray-300">
                                                {link.dropdown.map((sublink) => (
                                                    <li key={sublink.name}>
                                                        <Link
                                                            href={sublink.href}
                                                            className="block px-4 py-2 hover:bg-neutral-800 hover:text-amber-500 transition-colors"
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            {sublink.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
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
