"use client";

import { motion } from "framer-motion";
import { Lock, FileText, CheckCircle2, Circle, Clock, CreditCard, Play } from "lucide-react";
import Link from "next/link";

export default function ClientDashboardPlaceholder() {
  return (
    <main className="flex min-h-screen flex-col bg-[#050505] text-white">
      
      <section className="pt-32 pb-24 relative flex-grow flex flex-col">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl flex-grow flex flex-col">
          
          <div className="mb-12 border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                <Lock size={12} /> Client Portal
              </div>
              <h1 className="text-3xl md:text-5xl font-bold uppercase">Project Dashboard</h1>
            </div>
            
            <div className="flex gap-4">
              <button disabled className="px-6 py-2 bg-[#00f0ff] text-black font-bold rounded-lg opacity-50 cursor-not-allowed">
                Login
              </button>
            </div>
          </div>

          {/* Placeholder Notice */}
          <div className="bg-[#111] border border-yellow-500/30 rounded-2xl p-6 mb-12 flex items-start gap-4">
            <Clock className="text-yellow-500 shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-lg font-bold text-yellow-500 mb-2">Future Feature</h3>
              <p className="text-gray-400 text-sm">
                This is a preview of the upcoming client dashboard architecture. Once authenticated, clients will be able to track their project status, milestones, tasks, files, and payments here. Authentication is currently disabled.
              </p>
            </div>
          </div>

          {/* Dashboard Preview Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 opacity-60 pointer-events-none">
            
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Project Status */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-8 flex items-center gap-2 border-b border-white/5 pb-4"><Play size={20} className="text-[#00f0ff]" /> Current Phase: DEVELOPMENT</h3>
                
                <div className="flex flex-col sm:flex-row justify-between relative">
                  <div className="absolute top-4 left-0 w-full h-[2px] bg-white/10 hidden sm:block"></div>
                  <div className="absolute top-4 left-0 w-1/2 h-[2px] bg-[#00f0ff] hidden sm:block"></div>
                  
                  {['DISCOVERY', 'DESIGN', 'DEVELOPMENT', 'TESTING', 'DEPLOYED'].map((step, i) => (
                    <div key={i} className="relative z-10 flex flex-row sm:flex-col items-center gap-4 sm:gap-2 mb-6 sm:mb-0">
                      {i < 2 ? (
                        <div className="w-8 h-8 rounded-full bg-[#00f0ff] text-black flex items-center justify-center shrink-0">
                          <CheckCircle2 size={16} />
                        </div>
                      ) : i === 2 ? (
                        <div className="w-8 h-8 rounded-full bg-black border-2 border-[#00f0ff] text-[#00f0ff] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                          <Circle size={12} fill="currentColor" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-[#111] border border-white/20 text-gray-600 flex items-center justify-center shrink-0">
                          <Circle size={12} />
                        </div>
                      )}
                      <span className={`text-xs font-bold uppercase tracking-wider ${i <= 2 ? 'text-white' : 'text-gray-500'}`}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Tasks */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6">Recent Tasks</h3>
                <div className="space-y-3">
                  {[
                    { t: "Implement user authentication via NextAuth", s: "done" },
                    { t: "Design database schema for user profiles", s: "done" },
                    { t: "Build client dashboard UI", s: "progress" },
                    { t: "Integrate Stripe for payment processing", s: "todo" }
                  ].map((task, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                      {task.s === "done" ? <CheckCircle2 className="text-green-500 shrink-0" size={18} /> : 
                       task.s === "progress" ? <Clock className="text-yellow-500 shrink-0" size={18} /> : 
                       <Circle className="text-gray-600 shrink-0" size={18} />}
                      <span className={task.s === "done" ? "text-gray-500 line-through" : "text-gray-300"}>{task.t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="space-y-8">
              
              {/* Project Info */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6">
                <h3 className="font-bold mb-4 uppercase text-sm text-gray-400">Project Overview</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Project Name</div>
                    <div className="font-medium">Enterprise SaaS Platform</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Timeline</div>
                    <div className="font-medium">Oct 1 - Dec 15, 2026</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Deployment URL</div>
                    <div className="font-medium text-[#00f0ff]">staging.example.com</div>
                  </div>
                </div>
              </div>

              {/* Files */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6">
                <h3 className="font-bold mb-4 uppercase text-sm text-gray-400">Important Files</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors cursor-pointer">
                    <FileText size={16} className="text-[#00f0ff]" />
                    <span>Project Proposal.pdf</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors cursor-pointer">
                    <FileText size={16} className="text-[#00f0ff]" />
                    <span>Brand Assets.zip</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors cursor-pointer">
                    <FileText size={16} className="text-[#00f0ff]" />
                    <span>API Documentation.md</span>
                  </div>
                </div>
              </div>

              {/* Payments */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6">
                <h3 className="font-bold mb-4 uppercase text-sm text-gray-400">Payment Status</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Deposit (50%)</span>
                    <span className="text-green-500 font-bold flex items-center gap-1"><CheckCircle2 size={14}/> Paid</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Final (50%)</span>
                    <span className="text-yellow-500 font-bold flex items-center gap-1"><Clock size={14}/> Pending</span>
                  </div>
                  <button className="w-full py-2 bg-white/10 rounded-lg text-sm font-bold flex items-center justify-center gap-2 mt-4 hover:bg-white/20 transition-colors">
                    <CreditCard size={14} /> Make Payment
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
