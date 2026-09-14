"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    title: "WHAT DO YOU NEED?",
    options: ["A Website", "An App", "AI Solution", "AI Agent", "Automation", "Custom Software", "UI/UX Design", "Something Else"]
  },
  {
    title: "MY BUDGET",
    options: ["Under ₹50K", "₹50K–₹1L", "₹1L–₹3L", "₹3L+", "Not sure"]
  },
  {
    title: "MY TIMELINE",
    options: ["ASAP", "1 Month", "1–3 Months", "Flexible"]
  }
];

export default function BuildYourSolution() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<string[]>([]);

  const handleSelect = (option: string) => {
    const newSelections = [...selections];
    newSelections[currentStep] = option;
    setSelections(newSelections);
    
    if (currentStep < steps.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    } else {
      setTimeout(() => setCurrentStep(steps.length), 300);
    }
  };

  const getRecommendation = () => {
    const need = selections[0];
    const isComplex = need === "Custom Software" || need === "AI Solution" || need === "AI Agent" || need === "An App";
    
    return {
      title: `${need}`,
      approach: isComplex ? "Custom Development Lifecycle" : "Streamlined Build Process",
      complexity: isComplex ? "High / Medium" : "Medium / Low"
    };
  };

  return (
    <section id="build-solution" className="py-24 relative bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">BUILD YOUR SOLUTION</h2>
          <p className="text-gray-400">Tell us what you need, and we'll generate a quick overview.</p>
        </motion.div>

        <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 min-h-[400px] flex flex-col relative overflow-hidden">
          
          {/* Progress Bar */}
          {currentStep < steps.length && (
            <div className="w-full bg-white/5 h-2 rounded-full mb-12 overflow-hidden">
              <motion.div 
                className="h-full bg-[#00f0ff]"
                initial={{ width: `${(currentStep / steps.length) * 100}%` }}
                animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}

          <div className="flex-grow flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {currentStep < steps.length ? (
                <motion.div
                  key={`step-${currentStep}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-8">{steps[currentStep].title}</h3>
                  <div className="flex flex-wrap gap-3">
                    {steps[currentStep].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelect(option)}
                        className={`px-6 py-3 rounded-full text-sm font-semibold transition-all border ${selections[currentStep] === option ? 'bg-[#00f0ff] text-black border-[#00f0ff]' : 'bg-white/5 text-gray-300 border-white/10 hover:border-white/30 hover:bg-white/10'}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-500 mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-8">YOUR PROJECT OVERVIEW</h3>
                  
                  <div className="bg-[#050505] border border-white/10 rounded-2xl p-6 text-left space-y-4 mb-8">
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Requirement</div>
                      <div className="text-lg font-semibold text-white">{getRecommendation().title}</div>
                    </div>
                    <div className="h-[1px] w-full bg-white/5"></div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Recommended Approach</div>
                      <div className="text-gray-300">{getRecommendation().approach}</div>
                    </div>
                    <div className="h-[1px] w-full bg-white/5"></div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Estimated Complexity</div>
                      <div className="text-gray-300">{getRecommendation().complexity}</div>
                    </div>
                  </div>

                  <Link href="#contact" className="inline-flex items-center justify-center w-full py-4 bg-[#00f0ff] text-black font-bold rounded-xl hover:bg-[#00c0cc] transition-colors gap-2">
                    Discuss Your Project <ArrowRight size={18} />
                  </Link>
                  <button onClick={() => { setCurrentStep(0); setSelections([]); }} className="mt-4 text-sm text-gray-500 hover:text-white transition-colors">
                    Start over
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {currentStep > 0 && currentStep < steps.length && (
            <div className="mt-8">
              <button 
                onClick={() => setCurrentStep(prev => prev - 1)}
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
