"use client";

import React from 'react';
import Link from 'next/link';
import { useUI } from '@/contexts/UIContext';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const { openQuoteModal } = useUI();
    const [isOpen, setIsOpen] = React.useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Planning', href: '/planning' },
        { name: 'Construction', href: '/construction' },
        { name: 'Handover', href: '/handover' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-neutral-800 bg-black/60 backdrop-blur-md">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-bold whitespace-nowrap text-amber-500">VMK</span>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                        type="button"
                        onClick={openQuoteModal}
                        className="text-black bg-amber-500 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors"
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
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="block py-2 px-3 text-gray-300 rounded hover:bg-neutral-800 md:hover:bg-transparent md:hover:text-amber-500 md:p-0 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
