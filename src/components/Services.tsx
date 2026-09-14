"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "WEB DEVELOPMENT",
    desc: "Build modern, responsive and high-performance websites and web applications.",
    items: ["Business websites", "Landing pages", "Portfolio websites", "E-commerce interfaces", "Web applications", "SaaS interfaces", "Responsive websites"],
    cta: "Explore Web Development",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "02",
    title: "UI/UX DESIGN",
    desc: "Design modern digital experiences that are visually strong and easy to use.",
    items: ["Website UI/UX", "Mobile app design", "Dashboard design", "SaaS design", "Wireframes", "Prototypes", "Design systems"],
    cta: "Explore UI/UX",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "03",
    title: "AI & AI AGENTS",
    desc: "Build practical AI-powered applications, AI agents, and intelligent systems.",
    items: ["AI applications", "Autonomous AI Agents", "AI assistants", "LLM-powered products", "Computer vision", "AI integrations", "Intelligent workflows"],
    cta: "Explore AI Solutions",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "04",
    title: "AUTOMATION",
    desc: "Reduce repetitive work through intelligent automation.",
    items: ["Business automation", "Workflow automation", "AI automation", "API integrations", "System integrations", "Productivity workflows"],
    cta: "Explore Automation",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "05",
    title: "CUSTOM SOFTWARE",
    desc: "Build software specifically around a business requirement.",
    items: ["Custom applications", "Internal tools", "Backend systems", "APIs", "Database applications", "Business software"],
    cta: "Build Custom Software",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "06",
    title: "DIGITAL PRODUCTS",
    desc: "Transform ideas into complete digital products.",
    items: ["MVP development", "Product prototypes", "Startup concepts", "Interactive applications", "Technical prototypes", "Digital platforms"],
    cta: "Build a Product",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">WHAT WE DO</h2>
          <p className="text-xl text-gray-400">
            From concept to deployment, we build digital solutions around your requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full overflow-hidden"
            >
              <div className="w-full h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6 z-20 text-sm font-bold text-[#00f0ff]">{service.num} —</div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow pt-4">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#00f0ff] transition-colors">{service.title}</h3>
                <p className="text-gray-400 mb-6 min-h-[60px]">{service.desc}</p>
                
                <ul className="mb-8 space-y-2 flex-grow">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gray-700"></span> {item}
                    </li>
                  ))}
                </ul>
                
                <Link href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all mt-auto">
                  {service.cta} <ArrowRight size={16} className="text-[#00f0ff]" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
