"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Solutions", href: "#solutions" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="pt-24 pb-8 bg-[#050505] border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <Link href="/" className="flex flex-col mb-6">
              <span className="text-2xl font-bold tracking-wider text-white leading-none">
                DANDIA
              </span>
              <span className="text-sm tracking-[0.2em] text-gray-500 font-medium">
                TECH SOLUTIONS
              </span>
            </Link>
            <p className="text-xl text-gray-400 max-w-sm">
              Turning Ideas Into Digital Solutions.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest text-white mb-6 uppercase">Navigation</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#00f0ff] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest text-white mb-6 uppercase">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:dandiasahil@gmail.com" className="text-gray-400 hover:text-white transition-colors flex items-center justify-between group">
                  <span>dandiasahil@gmail.com</span>
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://wa.me/9186028286" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center justify-between group">
                  <span>+91 86028 28286</span>
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center justify-between group">
                  <span>LinkedIn</span>
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© 2026 Dandia Tech Solutions. All rights reserved.</p>
          <p>Built with technology, creativity, and curiosity.</p>
        </div>
      </div>
    </footer>
  );
}
