import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VMK Construction - Building Approvals & Contracting in Dubai",
  description: "Comprehensive construction and authority approval services in Dubai focusing on quality, speed, and premium real estate development.",
  keywords: "Dubai Construction, Authority Approvals, DM Approval, DCD Approval, Fit-out Dubai, Contracting Company UAE",
  openGraph: {
    title: "VMK Construction | Premium Dubai Contractors",
    description: "Expert building approvals and high-end contracting in Dubai.",
    type: "website",
    locale: "en_AE",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { UIProvider } from "@/contexts/UIContext";
import LayoutWrapper from "@/components/LayoutWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${playfair.variable} font-sans antialiased bg-black text-white`}
        suppressHydrationWarning
      >
        <UIProvider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </UIProvider>
      </body>
    </html>
  );
}
