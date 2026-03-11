"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (typeof window !== 'undefined' && window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-24 right-8 z-[85] p-3 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 rounded-full shadow-lg hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 transform hover:-translate-y-1 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
            aria-label="Scroll to top"
        >
            <ArrowUp className="w-5 h-5 text-black group-hover:scale-110 transition-transform" />
        </button>
    );
}
