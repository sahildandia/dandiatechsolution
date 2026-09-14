"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    name: "STARTER",
    target: "Perfect for establishing a digital presence.",
    features: [
      "Landing page",
      "Responsive design",
      "Basic SEO",
      "Contact integration",
      "Fast loading speed"
    ],
    color: "from-gray-800 to-gray-900"
  },
  {
    name: "BUSINESS",
    target: "Comprehensive solutions for growing brands.",
    features: [
      "Multi-page website",
      "Custom UI/UX",
      "Advanced SEO",
      "Forms & Lead Gen",
      "Analytics integration",
      "Deployment & Setup"
    ],
    color: "from-blue-900/40 to-[#0a0a0a]",
    featured: true
  },
  {
    name: "AI / AUTOMATION",
    target: "Smart solutions for efficiency.",
    features: [
      "AI integration",
      "Automation workflows",
      "API integrations",
      "Custom AI functionality",
      "Consultation & Strategy"
    ],
    color: "from-gray-800 to-gray-900"
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">PRICING & PACKAGES</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transparent packages designed around the value they bring to your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-3xl border ${pkg.featured ? 'border-[#00f0ff]/30 shadow-[0_0_30px_rgba(0,240,255,0.05)]' : 'border-white/10'} bg-gradient-to-b ${pkg.color} flex flex-col h-full`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#00f0ff] text-black text-xs font-bold tracking-widest rounded-full uppercase">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
              <p className="text-gray-400 text-sm mb-8 min-h-[40px]">{pkg.target}</p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <Check size={20} className="text-[#00f0ff] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href="#build-solution" 
                className={`w-full py-4 text-center rounded-xl font-bold transition-all ${pkg.featured ? 'bg-white text-black hover:bg-gray-200' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}
              >
                Get a Custom Quote →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
