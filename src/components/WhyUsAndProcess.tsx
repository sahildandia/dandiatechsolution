"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "CUSTOM APPROACH",
    desc: "Every solution is designed around the client's actual requirements.",
  },
  {
    title: "MODERN TECHNOLOGY",
    desc: "Use appropriate modern technologies to create scalable digital experiences.",
  },
  {
    title: "DESIGN + DEVELOPMENT",
    desc: "Combine visual design with functional engineering.",
  },
  {
    title: "AI-READY",
    desc: "Explore AI and automation where they provide genuine value.",
  },
  {
    title: "DIRECT COMMUNICATION",
    desc: "Clear communication throughout the project.",
  },
];

const processSteps = [
  { num: "01", title: "IDEA", desc: "Define the core concept and goals." },
  { num: "02", title: "DISCOVERY", desc: "Understand requirements and plan the approach." },
  { num: "03", title: "UI/UX", desc: "Design the user experience and visual direction." },
  { num: "04", title: "DEVELOPMENT", desc: "Build the solution using modern technologies." },
  { num: "05", title: "AI / AUTOMATION", desc: "Integrate intelligent systems and workflows." },
  { num: "06", title: "TESTING", desc: "Ensure quality, security, and performance." },
  { num: "07", title: "DEPLOYMENT", desc: "Launch the product to the live environment." },
  { num: "08", title: "PRODUCT", desc: "Deliver the final digital solution." },
];

export default function WhyUsAndProcess() {
  return (
    <section id="process" className="py-24 relative bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Why Us */}
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-12 text-center"
          >
            WHY WORK WITH US?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all ${idx === 3 ? 'lg:col-span-1' : ''} ${idx === 4 ? 'lg:col-span-2' : ''}`}
              >
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-400">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-16 text-center"
          >
            FROM IDEA TO LAUNCH
          </motion.h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute top-0 left-[28px] w-[2px] h-full bg-white/10 z-0"></div>
            
            <div className="space-y-12 relative z-10">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group flex items-start md:items-center gap-8"
                >
                  <div className="w-14 h-14 rounded-full bg-[#050505] border-2 border-white/20 group-hover:border-[#00f0ff] flex items-center justify-center shrink-0 z-20 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300">
                    <span className="text-[#00f0ff] font-bold">{step.num}</span>
                  </div>
                  
                  <div className="pt-2 md:pt-0">
                    <h3 className="text-xl font-bold text-white mb-2 tracking-wide group-hover:text-[#00f0ff] transition-colors">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
