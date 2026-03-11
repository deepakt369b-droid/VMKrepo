"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from "@/components/Navbar";
import QuoteModal from "@/components/QuoteModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdmin = pathname?.startsWith('/admin');

    if (isAdmin) {
        return <>{children}</>;
    }

    const isHome = pathname === '/';

    return (
        <>
            <Navbar />
            <main className={`min-h-screen ${!isHome ? 'pt-24' : ''}`}>{children}</main>
            <Footer />
            <QuoteModal />
            <WhatsAppButton />
            <ScrollToTop />
        </>
    );
}
