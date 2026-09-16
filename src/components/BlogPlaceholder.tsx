"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";

export default function BlogPlaceholder() {
  const categories = ["AI", "Web Development", "Automation", "UI/UX", "Software"];
  
  const placeholders = [
    { title: "Building Autonomous Agents with LangChain", category: "AI" },
    { title: "The Future of React and Server Components", category: "Web Development" },
    { title: "Automating Agency Workflows", category: "Automation" }
  ];

  return (
    <section id="insights" className="py-24 relative bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase">Tech Insights</h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              Thoughts, tutorials, and deep dives into modern technology.
            </p>
          </div>
          
          <div className="hidden md:flex gap-2">
            {categories.slice(0, 3).map((cat, i) => (
              <span key={i} className="px-4 py-2 rounded-full border border-white/10 text-xs font-semibold text-gray-400">
                {cat}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholders.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group rounded-3xl bg-[#0a0a0a] border border-white/5 p-6 flex flex-col h-[300px] relative overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-[#111] z-0">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <BookOpen size={48} className="text-gray-800" />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10"></div>
              
              <div className="relative z-20 mt-auto">
                <div className="inline-flex px-3 py-1 bg-[#00f0ff]/10 text-[#00f0ff] rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 border border-[#00f0ff]/20">
                  {post.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
                  <span className="text-sm font-medium text-gray-500">Coming Soon</span>
                  <ArrowUpRight size={18} className="text-gray-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
