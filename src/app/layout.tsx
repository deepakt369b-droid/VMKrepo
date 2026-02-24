import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VMK Construction - Building Approvals & Contracting in Dubai",
  description: "Comprehensive construction and authority approval services in Dubai focusing on quality, speed, and premium real estate development.",
};

import { UIProvider } from "@/contexts/UIContext";
import Navbar from "@/components/Navbar";
import QuoteModal from "@/components/QuoteModal";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UIProvider>
          <Navbar />
          {children}
          <QuoteModal />
          <WhatsAppButton />
        </UIProvider>
      </body>
    </html>
  );
}
