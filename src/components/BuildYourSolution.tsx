"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ArrowLeft, Send, MessageCircle, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import Link from "next/link";

const step1Options = [
  "🌐 Website", "📱 Web / Mobile Application", "🤖 AI Solution", 
  "🧠 AI Agent", "⚙️ Automation", "💻 Custom Software", 
  "🎨 UI/UX Design", "🚀 Digital Product", "❓ Something Else"
];

const step2Options = [
  "₹10K – ₹25K", "₹25K – ₹50K", "₹50K – ₹1L", "₹1L+", "Not Sure"
];

const step3Options = [
  "ASAP", "Within 1 Month", "1–3 Months", "Flexible"
];

export default function BuildYourSolution() {
  const [currentStep, setCurrentStep] = useState(0);
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    description: ""
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const totalSteps = 4; // 0, 1, 2, 3 (form), 4 (summary)

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      // Assuming success for now
      setStatus("success");
    }, 1500);
  };
  
  const getWhatsAppLink = () => {
    const text = `Hi Sahil, I want to build a project.\n\nType: ${projectType}\nBudget: ${budget}\nTimeline: ${timeline}\nDescription: ${formData.description}`;
    return `https://wa.me/918602828286?text=${encodeURIComponent(text)}`;
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
            <h3 className="text-2xl font-bold text-white mb-8 uppercase">What do you want to build?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {step1Options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => { setProjectType(option); setTimeout(handleNext, 300); }}
                  className={`px-4 py-4 rounded-2xl text-sm font-semibold transition-all border text-left flex items-center gap-2 ${projectType === option ? 'bg-[#00f0ff] text-black border-[#00f0ff]' : 'bg-white/5 text-gray-300 border-white/10 hover:border-white/30 hover:bg-white/10'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 1:
        return (
          <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
            <h3 className="text-2xl font-bold text-white mb-2 uppercase">What is your approximate budget?</h3>
            <p className="text-gray-400 mb-8 text-sm">This helps us recommend the best approach. Not a guaranteed quotation.</p>
            <div className="flex flex-col gap-3 max-w-md">
              {step2Options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => { setBudget(option); setTimeout(handleNext, 300); }}
                  className={`px-6 py-4 rounded-2xl text-left font-semibold transition-all border ${budget === option ? 'bg-[#00f0ff] text-black border-[#00f0ff]' : 'bg-white/5 text-gray-300 border-white/10 hover:border-white/30 hover:bg-white/10'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
            <h3 className="text-2xl font-bold text-white mb-8 uppercase">What is your timeline?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-lg">
              {step3Options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => { setTimeline(option); setTimeout(handleNext, 300); }}
                  className={`px-6 py-4 rounded-2xl text-center font-semibold transition-all border ${timeline === option ? 'bg-[#00f0ff] text-black border-[#00f0ff]' : 'bg-white/5 text-gray-300 border-white/10 hover:border-white/30 hover:bg-white/10'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
            <h3 className="text-2xl font-bold text-white mb-8 uppercase">Tell me about your project</h3>
            <div className="space-y-4 max-w-lg">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                <input 
                  type="text" 
                  value={formData.name} 
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input 
                  type="email" 
                  value={formData.email} 
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Company / Organization</label>
                <input 
                  type="text" 
                  value={formData.company} 
                  onChange={e => setFormData({...formData, company: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] transition-colors"
                  placeholder="Optional"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Project Description</label>
                <textarea 
                  value={formData.description} 
                  onChange={e => setFormData({...formData, description: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] transition-colors min-h-[120px]"
                  placeholder="Briefly describe what you want to achieve..."
                />
              </div>
              <button 
                onClick={handleNext}
                disabled={!formData.name || !formData.email || !formData.description}
                className="w-full py-4 mt-4 bg-[#00f0ff] text-black font-bold rounded-xl hover:bg-[#00c0cc] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                Review Summary <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        );
      case 4:
        if (status === "success") {
          return (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 text-green-500 mb-6">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 uppercase">Inquiry Sent!</h3>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">Thank you for sharing your project details. Sahil will review your requirement and get back to you shortly.</p>
              <button onClick={() => { setStatus("idle"); setCurrentStep(0); setProjectType(""); setBudget(""); setTimeline(""); setFormData({name: "", email: "", company: "", description: ""}); }} className="text-[#00f0ff] hover:underline font-medium">
                Start Another Project
              </button>
            </motion.div>
          );
        }
        
        return (
          <motion.div key="step4" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8 uppercase">PROJECT SUMMARY</h3>
            
            <div className="bg-[#050505] border border-white/10 rounded-2xl p-6 text-left space-y-4 mb-8">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Type</div>
                  <div className="font-semibold text-white">{projectType}</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Budget</div>
                  <div className="font-semibold text-white">{budget}</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Timeline</div>
                  <div className="font-semibold text-white">{timeline}</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Contact</div>
                  <div className="font-semibold text-white">{formData.name}</div>
                </div>
              </div>
              <div className="h-[1px] w-full bg-white/5 my-2"></div>
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Description</div>
                <div className="text-gray-300 text-sm whitespace-pre-wrap">{formData.description}</div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button 
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="w-full py-4 bg-[#00f0ff] text-black font-bold rounded-xl hover:bg-[#00c0cc] transition-colors flex items-center justify-center gap-2"
              >
                {status === "loading" ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                {status === "loading" ? "Sending..." : "Send Project Inquiry"}
              </button>
              
              <a 
                href={getWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#1ebd5a] transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
              
              <button onClick={() => { setCurrentStep(0); setProjectType(""); setBudget(""); setTimeline(""); }} className="mt-4 text-sm text-gray-500 hover:text-white transition-colors">
                Start Over
              </button>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="build-solution" className="py-24 relative bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase">Start a Project</h2>
          <p className="text-gray-400">Let's build something incredible together.</p>
        </motion.div>

        <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-12 min-h-[500px] flex flex-col relative overflow-hidden shadow-2xl">
          
          {/* Progress Bar */}
          {currentStep < totalSteps && status === "idle" && (
            <div className="w-full bg-white/5 h-2 rounded-full mb-8 overflow-hidden">
              <motion.div 
                className="h-full bg-[#00f0ff]"
                initial={{ width: `${(currentStep / totalSteps) * 100}%` }}
                animate={{ width: `${((currentStep) / totalSteps) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}

          <div className="flex-grow flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {renderStep()}
            </AnimatePresence>
          </div>

          {currentStep > 0 && currentStep < totalSteps && status === "idle" && (
            <div className="mt-8 pt-6 border-t border-white/5">
              <button 
                onClick={handleBack}
                className="text-gray-500 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
              >
                <ArrowLeft size={16} /> Back
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
