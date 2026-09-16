"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Code2, Cpu, Zap, Database, Globe, Layout, Blocks } from "lucide-react";

type TechCategory = {
  id: string;
  name: string;
  icon: any;
  techs: string[];
  projects: string[];
};

const categories: TechCategory[] = [
  {
    id: "web",
    name: "WEB",
    icon: Globe,
    techs: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "TailwindCSS"],
    projects: ["Enterprise SaaS Dashboard", "E-commerce Platform"]
  },
  {
    id: "ai",
    name: "AI",
    icon: Cpu,
    techs: ["Python", "LLMs (OpenAI, Claude)", "AI Agents", "Computer Vision", "LangChain"],
    projects: ["AI Business Assistant", "Stealth AI Agent"]
  },
  {
    id: "automation",
    name: "AUTOMATION",
    icon: Zap,
    techs: ["Python Scripts", "Webhooks", "Zapier", "Make", "REST APIs"],
    projects: ["Automated Workflow System"]
  },
  {
    id: "software",
    name: "SOFTWARE",
    icon: Code2,
    techs: ["Node.js", "Express", "FastAPI", "Docker", "Git"],
    projects: ["Custom Backend Systems", "Internal Tools"]
  },
  {
    id: "design",
    name: "DESIGN",
    icon: Layout,
    techs: ["Figma", "Framer", "UI/UX Research", "Wireframing"],
    projects: ["Dashboard Redesign", "Mobile App UI"]
  },
  {
    id: "database",
    name: "DATABASE",
    icon: Database,
    techs: ["PostgreSQL", "MongoDB", "Pinecone (Vector DB)", "Redis"],
    projects: ["Data Analytics Pipeline"]
  },
  {
    id: "apis",
    name: "APIs",
    icon: Blocks,
    techs: ["REST", "GraphQL", "Stripe", "Twilio", "SendGrid"],
    projects: ["Payment Gateway Integration", "SMS Alert System"]
  }
];

export default function Technology() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>(categories[0]);

  return (
    <section id="technology" className="py-24 relative bg-[#050505] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/10 via-[#050505] to-[#050505] z-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase">Technology Playground</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore the ecosystem of tools, frameworks, and languages I use to build scalable digital solutions.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Categories Sidebar */}
          <div className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 hide-scrollbar">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const isActive = activeCategory.id === cat.id;
              
              return (
                <motion.button
                  key={cat.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold uppercase tracking-wider text-sm whitespace-nowrap transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#00f0ff] text-black shadow-[0_0_20px_rgba(0,240,255,0.3)] scale-[1.02]' 
                      : 'bg-[#0a0a0a] text-gray-400 hover:bg-white/5 hover:text-white border border-white/5'
                  }`}
                >
                  <Icon size={18} className={isActive ? 'text-black' : 'text-gray-500'} />
                  {cat.name}
                </motion.button>
              );
            })}
          </div>
          
          {/* Main Display Area */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 min-h-[400px] flex flex-col relative overflow-hidden"
              >
                {/* Decorative Background Icon */}
                <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
                  <activeCategory.icon size={250} />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-10 flex items-center gap-4">
                    <activeCategory.icon className="text-[#00f0ff]" size={36} />
                    {activeCategory.name} ECOSYSTEM
                  </h3>
                  
                  <div className="space-y-10">
                    <div>
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Technologies & Tools</h4>
                      <div className="flex flex-wrap gap-3">
                        {activeCategory.techs.map((tech, i) => (
                          <motion.span 
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-200 font-medium hover:bg-[#00f0ff]/10 hover:text-[#00f0ff] hover:border-[#00f0ff]/30 transition-colors cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Applied In</h4>
                      <ul className="space-y-3">
                        {activeCategory.projects.map((proj, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (activeCategory.techs.length * 0.05) + (i * 0.1) }}
                            className="flex items-center gap-3 text-gray-300"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></span>
                            {proj}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
