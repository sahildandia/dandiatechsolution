"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    title: "AI Call Assistant for Clinics",
    challenge: "A local clinic was missing 30% of their calls during peak hours, losing potential appointments.",
    approach: "Built an AI voice agent that can handle natural language booking inquiries and schedule appointments directly into their calendar.",
    tech: "Python, OpenAI API, Twilio, Next.js",
    result: "Reduced missed calls to near zero and increased booked appointments by 22% in the first month."
  },
  {
    title: "Automated Lead Gen Pipeline",
    challenge: "A marketing agency spent 15 hours a week manually scraping and qualifying leads.",
    approach: "Developed a custom web scraper integrated with an LLM to automatically extract, score, and push qualified leads into their CRM.",
    tech: "Python, FastAPI, Puppeteer, Webhooks",
    result: "Saved 60 hours per month and improved lead quality through consistent AI-driven qualification."
  }
];

export default function CaseStudies() {
  return (
    <section className="py-24 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">CASE STUDIES</h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Real problems solved with strategy and technology.
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 md:p-12 rounded-3xl bg-[#050505] border border-white/10 hover:border-white/20 transition-all duration-300 grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <div>
                <h3 className="text-3xl font-bold text-white mb-8">{study.title}</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-bold text-[#00f0ff] uppercase tracking-wider mb-2">The Challenge</h4>
                    <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#00f0ff] uppercase tracking-wider mb-2">The Approach</h4>
                    <p className="text-gray-300 leading-relaxed">{study.approach}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-between">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-bold text-[#00f0ff] uppercase tracking-wider mb-2">The Technology</h4>
                    <p className="text-gray-300 font-medium">{study.tech}</p>
                  </div>
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">The Result</h4>
                    <p className="text-gray-300 leading-relaxed">{study.result}</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link href="#contact" className="inline-flex items-center gap-2 text-white font-medium hover:text-[#00f0ff] transition-colors">
                    Build something similar <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
