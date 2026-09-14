"use client";

import { motion } from "framer-motion";

const solutions = [
  {
    title: "FOR BUSINESSES",
    subtitle: "Build a stronger digital presence.",
    examples: ["Websites", "Automation", "Internal Tools", "Business Software"],
    color: "from-blue-500/20 to-transparent",
    border: "group-hover:border-blue-500/50"
  },
  {
    title: "FOR STARTUPS",
    subtitle: "Turn ideas into working products.",
    examples: ["MVPs", "Web Applications", "AI Products", "Prototypes"],
    color: "from-purple-500/20 to-transparent",
    border: "group-hover:border-purple-500/50"
  },
  {
    title: "FOR INDIVIDUALS",
    subtitle: "Build your personal digital presence.",
    examples: ["Portfolios", "Personal Websites", "Digital Profiles", "Creative Projects"],
    color: "from-green-500/20 to-transparent",
    border: "group-hover:border-green-500/50"
  },
  {
    title: "FOR CREATORS",
    subtitle: "Turn concepts into interactive digital experiences.",
    examples: ["Creative Websites", "AI Tools", "Interactive Experiences", "Digital Products"],
    color: "from-orange-500/20 to-transparent",
    border: "group-hover:border-orange-500/50"
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold">SOLUTIONS FOR DIFFERENT NEEDS</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden p-10 rounded-3xl bg-[#050505] border border-white/5 transition-all duration-500 ${solution.border}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{solution.title}</h3>
                <p className="text-gray-400 mb-8">{solution.subtitle}</p>
                
                <div className="flex flex-wrap gap-2">
                  {solution.examples.map((example, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
