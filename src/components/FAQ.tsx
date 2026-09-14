"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How much does a website cost?",
    a: "Costs vary depending on the scope and complexity of the project. A simple landing page will cost significantly less than a full custom software solution. We offer transparent pricing packages to help guide expectations and provide custom quotes tailored to your exact needs."
  },
  {
    q: "How long does development take?",
    a: "A typical website can take 2-4 weeks, while complex AI solutions or custom applications might take 1-3 months. We establish a clear timeline during the discovery phase before any work begins."
  },
  {
    q: "Can you integrate AI into my existing business?",
    a: "Absolutely. We specialize in evaluating existing workflows and finding high-leverage areas where AI agents, automated communication, or data processing can save time and reduce costs."
  },
  {
    q: "Do you provide maintenance after launch?",
    a: "Yes. Technology requires upkeep. We offer post-launch support, bug fixes, performance optimization, and retainer packages to ensure your digital product continues running smoothly as your business grows."
  },
  {
    q: "How do I start a project?",
    a: "Simply fill out the project inquiry form below or message us directly on WhatsApp. We'll review your requirements and schedule a brief discovery call to discuss the best approach."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">FREQUENTLY ASKED QUESTIONS</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#050505] border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-bold text-white">{faq.q}</span>
                <div className="shrink-0 ml-4 text-gray-400">
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
