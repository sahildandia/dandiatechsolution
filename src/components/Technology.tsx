"use client";

import { motion } from "framer-motion";

const nodes = [
  "AI", "WEB", "SOFTWARE", "DESIGN", "AUTOMATION", "CLOUD", "API", "COMPUTER VISION"
];

export default function Technology() {
  return (
    <section className="py-24 relative bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">BUILDING WITH MODERN TECHNOLOGY</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We explore and implement modern technologies to create smarter, faster, and more capable digital products.
          </p>
        </motion.div>

        {/* Animated Ecosystem */}
        <div className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[600px] flex items-center justify-center">
          {/* Core */}
          <motion.div 
            animate={{ 
              boxShadow: ["0 0 20px rgba(0,240,255,0.2)", "0 0 60px rgba(0,240,255,0.6)", "0 0 20px rgba(0,240,255,0.2)"] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-20 w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-gray-900 to-black border border-[#00f0ff]/30 flex flex-col items-center justify-center p-4 text-center backdrop-blur-xl"
          >
            <span className="text-white font-bold tracking-wider leading-tight text-sm md:text-lg">
              DANDIA <br/>
              <span className="text-[#00f0ff] text-xs md:text-sm">TECH SOLUTIONS</span>
            </span>
          </motion.div>

          {/* Orbits */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-dashed border-white/10"
            />
            <motion.div 
              animate={{ rotate: -360 }} 
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute w-[400px] h-[400px] md:w-[650px] md:h-[650px] rounded-full border border-white/5"
            />
          </div>

          {/* Nodes */}
          {nodes.map((node, index) => {
            const angle = (index / nodes.length) * Math.PI * 2;
            const radius = index % 2 === 0 ? 150 : 250; // Inner and outer orbits
            const mdRadius = index % 2 === 0 ? 225 : 325;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="absolute z-10 hidden md:flex items-center justify-center px-4 py-2 rounded-full bg-black border border-white/20 text-xs font-semibold text-gray-300"
                style={{
                  transform: `translate(${Math.cos(angle) * mdRadius}px, ${Math.sin(angle) * mdRadius}px)`,
                }}
              >
                {node}
              </motion.div>
            );
          })}
          
          {/* Mobile Nodes (Simplified positioning) */}
          {nodes.map((node, index) => {
            const angle = (index / nodes.length) * Math.PI * 2;
            const radius = index % 2 === 0 ? 120 : 180;
            
            return (
              <motion.div
                key={`mobile-${index}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="absolute z-10 md:hidden flex items-center justify-center px-3 py-1.5 rounded-full bg-black border border-white/20 text-[10px] font-semibold text-gray-300"
                style={{
                  transform: `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`,
                }}
              >
                {node}
              </motion.div>
            );
          })}

          {/* Connecting lines logic is complex without canvas, using decorative gradient lines instead */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.05)_0%,transparent_70%)] pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
