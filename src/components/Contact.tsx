"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              LET'S BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">SOMETHING GREAT.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-md">
              Have a project in mind? Tell us what you want to build and we'll discuss the best way forward.
            </p>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-[#050505] border border-white/5 hover:border-white/20 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1 font-semibold">EMAIL</div>
                  <a href="mailto:dandiasahil@gmail.com" className="text-lg font-medium text-white hover:text-[#00f0ff] transition-colors">
                    dandiasahil@gmail.com
                  </a>
                </div>
                <a href="mailto:dandiasahil@gmail.com" className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-semibold transition-colors shrink-0">
                  Send Email →
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-[#050505] border border-white/5 hover:border-white/20 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1 font-semibold">WHATSAPP</div>
                  <a href="https://wa.me/9186028286" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white hover:text-[#25D366] transition-colors flex items-center gap-2">
                    +91 86028 28286
                  </a>
                </div>
                <a href="https://wa.me/9186028286" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] rounded-full text-sm font-semibold transition-colors flex items-center gap-2 shrink-0">
                  <MessageCircle size={16} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-3xl bg-[#050505] border border-white/10 relative"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="absolute inset-0 bg-[#050505] rounded-3xl flex flex-col items-center justify-center p-8 text-center z-20"
              >
                <CheckCircle2 size={64} className="text-green-500 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
                <p className="text-gray-400">We'll get back to you shortly.</p>
              </motion.div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Full Name *</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff]/50 focus:bg-white/10 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Address *</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff]/50 focus:bg-white/10 transition-all" placeholder="john@company.com" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Company / Organization</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff]/50 focus:bg-white/10 transition-all" placeholder="Your Company" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Service Required *</label>
                  <select required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff]/50 focus:bg-white/10 transition-all appearance-none cursor-pointer">
                    <option value="" disabled selected>Select a service</option>
                    <option value="Web Development" className="bg-[#0a0a0a]">Web Development</option>
                    <option value="UI/UX Design" className="bg-[#0a0a0a]">UI/UX Design</option>
                    <option value="AI Solution" className="bg-[#0a0a0a]">AI Solution</option>
                    <option value="Automation" className="bg-[#0a0a0a]">Automation</option>
                    <option value="Custom Software" className="bg-[#0a0a0a]">Custom Software</option>
                    <option value="Digital Product" className="bg-[#0a0a0a]">Digital Product</option>
                    <option value="Other" className="bg-[#0a0a0a]">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Budget Range</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff]/50 focus:bg-white/10 transition-all appearance-none cursor-pointer">
                  <option value="" disabled selected>Select budget range</option>
                  <option value="< ₹50k" className="bg-[#0a0a0a]">&lt; ₹50,000</option>
                  <option value="₹50k - ₹2L" className="bg-[#0a0a0a]">₹50,000 - ₹2,00,000</option>
                  <option value="₹2L - ₹5L" className="bg-[#0a0a0a]">₹2,00,000 - ₹5,00,000</option>
                  <option value="₹5L+" className="bg-[#0a0a0a]">₹5,00,000+</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Project Details *</label>
                <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff]/50 focus:bg-white/10 transition-all resize-none" placeholder="Tell us about your requirements..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                Send Project Inquiry →
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
