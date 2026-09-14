import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Dandia Tech Solutions | Web, AI, Software & Automation",
  description: "Dandia Tech Solutions builds modern websites, software, AI solutions, automation systems, UI/UX experiences, and digital products for businesses, startups, and individuals.",
  openGraph: {
    title: "Dandia Tech Solutions",
    description: "Turning Ideas Into Digital Solutions.",
    url: "https://dandiatechsolutions.com",
    siteName: "Dandia Tech Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased bg-[#050505] text-white overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
