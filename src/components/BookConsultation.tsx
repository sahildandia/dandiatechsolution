"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Clock, Send, CheckCircle, Loader2 } from "lucide-react";

export default function BookConsultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    date: "",
    time: "",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section id="consultation" className="py-24 relative bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-5/12 flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase">Book a Free Consultation</h2>
            <p className="text-gray-400 mb-8 text-lg">
              Not sure where to start? Let's hop on a call to discuss your ideas, technical requirements, and how we can bring your vision to life.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Calendar className="text-[#00f0ff]" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Pick a Date</h4>
                  <p className="text-gray-500">Choose a day that works best for you.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Clock className="text-[#00f0ff]" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">30-Minute Strategy</h4>
                  <p className="text-gray-500">We'll discuss your goals, tech stack, and timeline.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-7/12"
          >
            <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              {status === "success" ? (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 text-green-500 mb-6 mx-auto">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 uppercase">Thanks!</h3>
                  <p className="text-gray-400 mb-8 max-w-md mx-auto">Your consultation request has been received. I'll reach out shortly to confirm our meeting time.</p>
                  <button onClick={() => setStatus("idle")} className="text-[#00f0ff] hover:underline font-medium">
                    Book Another Session
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Name *</label>
                      <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Email *</label>
                      <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Project Type</label>
                    <select value={formData.projectType} onChange={e => setFormData({...formData, projectType: e.target.value})} className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] transition-colors appearance-none">
                      <option value="">Select a type...</option>
                      <option value="Website">Website</option>
                      <option value="Web/Mobile App">Web/Mobile App</option>
                      <option value="AI Solution">AI Solution</option>
                      <option value="Custom Software">Custom Software</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Preferred Date</label>
                      <input type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Preferred Time</label>
                      <input type="time" value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                    <textarea rows={3} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] transition-colors" placeholder="Any specific details you want to discuss?" />
                  </div>

                  <button type="submit" disabled={status === "loading"} className="w-full py-4 bg-[#00f0ff] text-black font-bold rounded-xl hover:bg-[#00c0cc] transition-colors flex items-center justify-center gap-2">
                    {status === "loading" ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                    {status === "loading" ? "Submitting..." : "Request Consultation"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
