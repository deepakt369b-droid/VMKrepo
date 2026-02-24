"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/971500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[90] bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center animate-bounce group"
            aria-label="Chat with us on WhatsApp"
        >
            <MessageCircle className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" />

            {/* Helper tooltip text on hover */}
            <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-semibold px-3 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Chat with us
            </span>

            {/* Helper pulse behind it */}
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-30 -z-10" style={{ animationDuration: '3s' }}></div>
        </a>
    );
}
