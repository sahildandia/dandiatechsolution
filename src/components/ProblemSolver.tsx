"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const problems = [
  { problem: `"I need a professional website"`, solution: "Web Development" },
  { problem: `"My business has repetitive work"`, solution: "Automation" },
  { problem: `"I want to use AI in my business"`, solution: "AI Solutions" },
  { problem: `"I have an app idea"`, solution: "MVP Development" },
  { problem: `"My website looks outdated"`, solution: "UI/UX Redesign" },
  { problem: `"I need custom software"`, solution: "Software Development" },
];

export default function ProblemSolver() {
  return (
    <section className="py-24 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">WHAT ARE YOU TRYING TO SOLVE?</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We don't just write code. We build solutions to real-world challenges.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {problems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 bg-[#050505] border border-white/5 rounded-2xl hover:border-white/20 transition-all duration-300"
              >
                <div className="text-gray-300 font-medium mb-4 sm:mb-0 italic">{item.problem}</div>
                <div className="flex items-center gap-3">
                  <div className="h-[1px] w-8 bg-white/20 hidden sm:block group-hover:w-12 transition-all"></div>
                  <div className="text-[#00f0ff] font-bold text-sm tracking-wide uppercase flex items-center gap-2">
                    {item.solution} <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="#build-solution" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#00f0ff] transition-colors pb-1 border-b border-white/30 hover:border-[#00f0ff]">
              Have a different problem? Let's discuss it <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
