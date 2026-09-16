"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, MessageCircleQuestion } from "lucide-react";
import { faqs } from "@/data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-[#00f0ff]/10 rounded-full flex items-center justify-center mb-6">
            <MessageCircleQuestion className="text-[#00f0ff]" size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase">FAQ</h2>
          <p className="text-gray-400 text-lg">Everything you need to know about working with Dandia Tech Solutions.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`bg-[#050505] border transition-all duration-300 rounded-2xl overflow-hidden ${isOpen ? 'border-[#00f0ff]/30 shadow-[0_0_15px_rgba(0,240,255,0.05)]' : 'border-white/10 hover:border-white/20'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none hover:bg-white/5 transition-colors"
                >
                  <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-[#00f0ff]' : 'text-white'}`}>{faq.question}</span>
                  <div className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'text-[#00f0ff] rotate-180' : 'text-gray-400'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
