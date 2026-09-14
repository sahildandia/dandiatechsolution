"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "DEVELOPMENT",
    skills: ["HTML", "CSS", "JavaScript", "Java", "Python", "React", "Next.js"]
  },
  {
    title: "DESIGN",
    skills: ["UI/UX", "Figma", "Prototyping", "Design Systems", "Responsive Design"]
  },
  {
    title: "AI",
    skills: ["AI Applications", "AI Agents", "LLM Applications", "Computer Vision", "AI Automation"]
  },
  {
    title: "DEVELOPMENT TOOLS",
    skills: ["Git", "GitHub", "VS Code", "AI Development Tools", "APIs"]
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">ABOUT DANDIA TECH SOLUTIONS</h2>
            <div className="space-y-6 text-lg text-gray-400 mb-10">
              <p>
                Dandia Tech Solutions is a technology-focused freelance studio founded by Sahil Kumar. We focus on building modern websites, software, AI-powered solutions, automation systems, and digital products.
              </p>
              <p>
                Our approach combines technical development with design thinking, allowing us to work from an initial idea through design, development, refinement, and delivery.
              </p>
            </div>

            <div className="bg-[#050505] border border-white/5 p-6 rounded-2xl inline-block w-full max-w-md">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">CURRENTLY BUILDING</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0"></span> AI Calling Agent
                </li>
                <li className="flex items-center gap-3 text-gray-300 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0"></span> Computer Vision Project
                </li>
                <li className="flex items-center gap-3 text-gray-300 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0"></span> Dandia Tech Solutions Website
                </li>
                <li className="flex items-center gap-3 text-gray-300 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 shrink-0"></span> Experimental AI Workflow
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="p-8 rounded-3xl bg-[#050505] border border-white/10 w-full max-w-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-gray-800 to-gray-700 mb-6 border border-white/20 flex items-center justify-center text-2xl font-bold text-white">
                  SK
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Sahil Kumar</h3>
                <p className="text-[#00f0ff] font-medium tracking-wide text-sm uppercase">
                  Founder & Technology Developer
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="flex flex-col space-y-4">
                <h4 className="text-sm font-bold tracking-widest text-gray-500">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00f0ff]/50 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
