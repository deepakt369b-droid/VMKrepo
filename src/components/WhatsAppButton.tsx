"use client";

import React from 'react';

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/971500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[90] bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:bg-[#20bc5a] transition-all duration-300 flex items-center justify-center group"
            aria-label="Chat with us on WhatsApp"
        >
            {/* Official WhatsApp SVG icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-8 h-8 md:w-10 md:h-10"
                fill="white"
                aria-hidden="true"
            >
                <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.37.629 4.685 1.823 6.72L2.667 29.333l6.813-1.787A13.254 13.254 0 0016.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm0 24.267a11.005 11.005 0 01-5.643-1.56l-.4-.24-4.043 1.067 1.08-3.947-.267-.413A10.933 10.933 0 015.067 16c0-6.04 4.897-10.933 10.933-10.933S26.933 9.96 26.933 16 22.04 26.933 16.003 26.933zm6-8.2c-.333-.167-1.96-.96-2.267-1.08-.306-.107-.52-.16-.747.16-.226.32-.88 1.08-1.08 1.306-.2.213-.4.24-.733.08-.333-.16-1.413-.52-2.693-1.667-.987-.88-1.667-1.974-1.854-2.307-.186-.333-.013-.507.147-.667.147-.146.333-.373.493-.56.16-.186.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.747-1.8-1.027-2.467-.267-.64-.547-.56-.747-.56-.2 0-.413-.027-.627-.027-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.253 3.44 5.467 4.827.76.32 1.36.52 1.827.667.76.24 1.467.2 2.013.12.613-.093 1.893-.773 2.16-1.52.266-.747.266-1.386.186-1.52-.08-.133-.293-.213-.626-.373z" />
            </svg>

            {/* Tooltip */}
            <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-semibold px-3 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Chat with us
            </span>

            {/* Pulse ring */}
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-30 -z-10" style={{ animationDuration: '3s' }}></div>
        </a>
    );
}
