"use client";

import { motion } from "framer-motion";
import { Sparkles, Terminal, Cpu, Network } from "lucide-react";

const experiments = [
  { icon: Sparkles, name: "Claude Code Workflow", status: "Active" },
  { icon: Terminal, name: "AI Calling Agent", status: "Active" },
  { icon: Cpu, name: "Computer Vision CCTV", status: "Building" },
  { icon: Network, name: "Multi-Agent Systems", status: "Research" },
];

export default function AILab() {
  return (
    <section className="py-24 relative bg-[#050505] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold tracking-widest text-[#00f0ff] uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse"></span> Experiments
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">DANDIA AI LAB</h2>
            <p className="text-xl text-gray-400 max-w-xl">
              A space for continuous research, prototyping, and active experimentation with modern AI technologies.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiments.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-6 bg-[#0a0a0a] border border-white/10 rounded-2xl hover:border-[#00f0ff]/40 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-[#00f0ff]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4">{exp.name}</h3>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    <span className={`w-1.5 h-1.5 rounded-full ${exp.status === 'Active' ? 'bg-green-500' : exp.status === 'Building' ? 'bg-yellow-500' : 'bg-purple-500'}`}></span>
                    {exp.status}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
