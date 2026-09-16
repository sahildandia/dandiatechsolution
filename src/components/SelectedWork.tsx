"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code, ExternalLink } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

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
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(status)} uppercase tracking-wider`}>
      <span>{getStatusDot(status)}</span> {status}
    </div>
  );
};

export default function SelectedWork() {
  return (
    <section id="projects" className="py-24 relative bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase">Selected Work</h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              Real projects, experiments, and digital products built with modern technology.
            </p>
          </div>
          <Link href="#build-solution" className="inline-flex items-center gap-2 text-[#00f0ff] hover:text-[#00c0cc] transition-colors font-medium">
            Build Something Similar <ArrowUpRight size={18} />
          </Link>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all duration-500 flex flex-col md:flex-row"
            >
              {/* Image Container */}
              <div className="w-full md:w-[55%] h-[300px] md:h-[450px] relative overflow-hidden bg-[#111]">
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-gray-800 opacity-50 mix-blend-overlay z-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="w-[150%] h-[150%] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-[spin_60s_linear_infinite]"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a] md:bg-gradient-to-r z-20"></div>
                
                <div className="absolute top-6 left-6 z-30">
                  <StatusBadge status={project.status} />
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center z-30 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                  <span className="text-4xl font-black tracking-tighter text-white/10 uppercase">{project.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-[45%] p-8 md:p-12 flex flex-col justify-center relative z-30">
                <div className="text-[#00f0ff] text-sm font-bold tracking-wider mb-4 uppercase">{project.category}</div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">{project.shortDescription}</p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 border-t border-white/10">
                  <Link href={`/case-studies/${project.id}`} className="inline-flex items-center justify-between flex-grow py-3 px-4 bg-white/5 rounded-xl text-white font-medium hover:bg-white/10 transition-colors group/btn">
                    <span>View Case Study</span>
                    <ArrowUpRight size={18} className="text-gray-500 group-hover/btn:text-white transition-colors group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </Link>
                  
                  <div className="flex gap-2 shrink-0">
                    {project.demoUrl ? (
                      <a href={project.demoUrl} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors" title="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    ) : (
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 text-gray-600 cursor-not-allowed" title="Coming Soon">
                        <ExternalLink size={20} />
                      </div>
                    )}
                    
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors" title="GitHub Repository">
                        <Code size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
