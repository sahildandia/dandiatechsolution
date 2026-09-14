"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "AI Business Assistant",
    category: "AI",
    tech: ["Next.js", "Python", "OpenAI API", "TailwindCSS"],
    desc: "An intelligent business assistant capable of automating customer support and internal queries.",
    image: "/project-placeholder-1.jpg", // Placeholder
  },
  {
    title: "Enterprise SaaS Dashboard",
    category: "UI/UX & Web Development",
    tech: ["React", "TypeScript", "Framer Motion", "Node.js"],
    desc: "A scalable dashboard for enterprise analytics with real-time data visualization.",
    image: "/project-placeholder-2.jpg",
  },
  {
    title: "Automated Workflow System",
    category: "Automation",
    tech: ["Python", "FastAPI", "Webhooks", "Docker"],
    desc: "Custom internal automation tool that reduced manual data entry by 80% for a logistics client.",
    image: "/project-placeholder-3.jpg",
  }
];

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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">SELECTED WORK</h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              Real projects, experiments, and digital products built with modern technology.
            </p>
          </div>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all duration-500 flex flex-col md:flex-row"
            >
              {/* Image Container */}
              <div className="w-full md:w-[55%] h-[300px] md:h-[450px] relative overflow-hidden bg-[#111]">
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-gray-800 opacity-50 mix-blend-overlay z-10 group-hover:opacity-20 transition-opacity"></div>
                {/* Fallback pattern since we don't have actual images yet */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="w-[150%] h-[150%] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-[spin_60s_linear_infinite]"></div>
                </div>
                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a] md:bg-gradient-to-r z-20"></div>
                
                <div className="absolute inset-0 flex items-center justify-center z-30 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                  <span className="text-4xl font-black tracking-tighter text-white/10 uppercase">{project.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-[45%] p-8 md:p-12 flex flex-col justify-center relative z-30">
                <div className="text-[#00f0ff] text-sm font-bold tracking-wider mb-4 uppercase">{project.category}</div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
                
                <Link href="#contact" className="inline-flex items-center justify-between py-4 border-t border-white/10 text-white font-medium group-hover:border-white/30 transition-colors">
                  <span>View Project</span>
                  <ArrowUpRight size={20} className="text-gray-500 group-hover:text-white transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
