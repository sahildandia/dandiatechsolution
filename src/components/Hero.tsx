"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";

// Dynamically import 3D component so it doesn't break SSR
const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* 3D Background */}
      <Hero3D />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-6 inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300">Available for New Projects</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            TURNING IDEAS INTO <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              DIGITAL SOLUTIONS.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Dandia Tech Solutions helps businesses, startups, and individuals build modern websites, software, AI solutions, automation systems, and digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#build-solution"
              className="w-full sm:w-auto px-8 py-4 bg-[#00f0ff] text-black font-bold rounded-full flex items-center justify-center gap-2 hover:bg-[#00c0cc] transition-colors"
            >
              Start a Project <ArrowRight size={18} />
            </Link>
            <Link
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Explore Our Work
            </Link>
          </div>
          
          <div className="mt-12">
            <Link href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-1">
              Let's Talk <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}
