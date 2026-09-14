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
  {
    num: "01",
    title: "DISCOVER",
    desc: "Understand the idea, problem, audience and requirements.",
  },
  {
    num: "02",
    title: "DESIGN",
    desc: "Plan the user experience, visual direction and technical approach.",
  },
  {
    num: "03",
    title: "BUILD",
    desc: "Develop the solution using appropriate technologies.",
  },
  {
    num: "04",
    title: "LAUNCH & REFINE",
    desc: "Test, optimize, deploy and continuously improve.",
  },
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

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="relative group"
                >
                  {/* Dot */}
                  <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 border-[#00f0ff] z-20 group-hover:scale-150 group-hover:shadow-[0_0_15px_#00f0ff] transition-all duration-300"></div>
                  
                  <div className="md:pt-16 md:text-center">
                    <div className="text-5xl font-black text-white/5 mb-4 group-hover:text-white/10 transition-colors md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 pointer-events-none">{step.num}</div>
                    <div className="relative z-10 md:mt-[80px]">
                      <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{step.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
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
