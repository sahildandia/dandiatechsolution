"use client";

import { motion } from "framer-motion";
import { aiExperiments } from "@/data/aiLab";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

const StatusBadge = ({ status }: { status: string }) => {
  const getStatusColor = (s: string) => {
    switch(s) {
      case "LIVE": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "IN DEVELOPMENT": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "EXPERIMENT": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "COMING SOON": return "bg-gray-500/20 text-gray-400 border-gray-500/30";
      default: return "bg-white/10 text-white border-white/20";
    }
  };

  const getStatusDot = (s: string) => {
    switch(s) {
      case "LIVE": return "🟢";
      case "IN DEVELOPMENT": return "🟡";
      case "EXPERIMENT": return "🔵";
      case "COMING SOON": return "⚪";
      default: return "";
    }
  };

  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold border ${getStatusColor(status)} uppercase tracking-wider`}>
      <span>{getStatusDot(status)}</span> {status}
    </div>
  );
};

export default function AILab() {
  return (
    <section id="ai-lab" className="py-32 relative bg-[#050505] overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00f0ff]/5 via-[#050505] to-[#050505]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
        
        {/* Animated Particles/Nodes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00f0ff] rounded-full blur-[1px]"
            animate={{
              x: ["0vw", "100vw", "50vw"],
              y: ["0vh", "100vh", "20vh"],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-[#00f0ff]/20 rounded-full text-xs font-bold tracking-widest text-[#00f0ff] uppercase mb-6 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse"></span> AI Research
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tight">Dandia AI Lab</h2>
            <p className="text-xl text-gray-400">
              Experiments, prototypes and ideas exploring the future of AI. We test the boundaries of what's possible before bringing it to production.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
          {aiExperiments.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-8 bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-[#00f0ff]/40 transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#00f0ff] transition-colors">{exp.name}</h3>
                  <StatusBadge status={exp.status} />
                </div>
                
                <p className="text-gray-400 text-lg mb-8 flex-grow">{exp.shortExplanation}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {exp.technology.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/5 rounded-md text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto border-t border-white/10 pt-6">
                  {exp.demoUrl ? (
                    <a href={exp.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#00f0ff] transition-colors group/btn">
                      View Demo <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-gray-500 font-medium">
                      Details Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="#build-solution" className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors gap-2">
            Build an AI Solution <ArrowRight size={18} className="text-[#00f0ff]" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
