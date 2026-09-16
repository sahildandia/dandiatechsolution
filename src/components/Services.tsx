"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, X, Monitor, Cpu, Zap, Layout, Bot, LifeBuoy, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const getIcon = (iconName: string, className?: string) => {
    switch (iconName) {
      case "Monitor": return <Monitor className={className} />;
      case "Cpu": return <Cpu className={className} />;
      case "Zap": return <Zap className={className} />;
      case "Layout": return <Layout className={className} />;
      case "Bot": return <Bot className={className} />;
      case "LifeBuoy": return <LifeBuoy className={className} />;
      default: return <Monitor className={className} />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase">Services</h2>
          <p className="text-xl text-gray-400">
            From concept to deployment, we build digital solutions around your requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedService(service.id)}
              className="group rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/20 hover:bg-[#111] transition-all duration-300 cursor-pointer flex flex-col h-full p-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-[#00f0ff]/10 transition-colors">
                {getIcon(service.icon, "w-7 h-7 text-[#00f0ff]")}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#00f0ff] transition-colors uppercase">{service.title}</h3>
              <p className="text-gray-400 mb-8 flex-grow">{service.whatItIs}</p>
              
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all mt-auto">
                Discuss This Service <ArrowRight size={16} className="text-[#00f0ff]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            {services.filter(s => s.id === selectedService).map(service => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-4xl max-h-[90vh] bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-y-auto z-10 shadow-2xl flex flex-col"
              >
                <div className="sticky top-0 bg-[#0a0a0a]/90 backdrop-blur p-6 border-b border-white/5 flex justify-between items-center z-20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                      {getIcon(service.icon, "w-6 h-6 text-[#00f0ff]")}
                    </div>
                    <h3 className="text-2xl font-bold uppercase">{service.title}</h3>
                  </div>
                  <button onClick={() => setSelectedService(null)} className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                    <X size={24} />
                  </button>
                </div>
                
                <div className="p-6 md:p-10 space-y-12">
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">What It Is</h4>
                    <p className="text-xl text-gray-300 leading-relaxed">{service.whatItIs}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">What I Can Build</h4>
                      <ul className="space-y-3">
                        {service.whatICanBuild.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="text-[#00f0ff] mt-0.5 shrink-0" size={18} />
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Typical Workflow</h4>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 overflow-x-auto pb-4">
                      {service.workflow.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-4 min-w-max">
                          <div className="flex items-center gap-3 bg-[#111] border border-white/5 px-4 py-2 rounded-xl">
                            <span className="text-[#00f0ff] font-bold text-sm">{idx + 1}</span>
                            <span className="text-gray-300 font-medium">{step}</span>
                          </div>
                          {idx < service.workflow.length - 1 && (
                            <ArrowRight className="text-gray-600 hidden sm:block" size={16} />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto p-6 bg-gradient-to-t from-[#111] to-[#0a0a0a] border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="text-gray-400">Ready to start a {service.title} project?</p>
                  <Link 
                    href="#build-solution" 
                    onClick={() => setSelectedService(null)}
                    className="px-8 py-4 bg-[#00f0ff] text-black font-bold rounded-xl hover:bg-[#00c0cc] transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
                  >
                    Discuss This Service <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
