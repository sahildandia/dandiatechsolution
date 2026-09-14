"use client";

import { motion } from "framer-motion";

const capabilities = [
  { title: "BUILD", desc: "Websites & Software" },
  { title: "DESIGN", desc: "UI/UX & Digital Experiences" },
  { title: "INTELLIGENT", desc: "AI & AI-Powered Solutions" },
  { title: "AUTOMATE", desc: "Workflows & Integrations" },
];

export default function Introduction() {
  return (
    <section className="py-24 relative z-10 border-t border-white/5 bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              TECHNOLOGY THAT <br />
              <span className="text-gray-500">SOLVES REAL PROBLEMS.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              At Dandia Tech Solutions, we combine development, design, artificial intelligence, and automation to transform ideas into practical digital products.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl glass border border-white/5 hover:border-white/20 transition-colors"
              >
                <div className="text-xs font-bold tracking-widest text-[#00f0ff] mb-2">
                  {cap.title}
                </div>
                <div className="text-white font-medium text-lg">
                  {cap.desc}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
