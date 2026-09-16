import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Code, CheckCircle2 } from "lucide-react";

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#050505] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050505] to-[#050505] z-0"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
            <div className="max-w-3xl">
              <div className="text-[#00f0ff] font-bold tracking-wider mb-4 uppercase">{project.category}</div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">{project.shortDescription}</p>
              
              <div className="flex flex-wrap gap-4">
                {project.demoUrl ? (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#00f0ff] text-black font-bold rounded-xl hover:bg-[#00c0cc] transition-colors">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                ) : (
                  <button disabled className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-gray-400 font-bold rounded-xl cursor-not-allowed">
                    <ExternalLink size={18} /> Coming Soon
                  </button>
                )}
                
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors">
                    <Code size={18} /> Source Code
                  </a>
                )}
              </div>
            </div>
            
            <div className="w-full md:w-auto bg-white/5 border border-white/10 rounded-2xl p-6 min-w-[300px]">
              <h3 className="font-bold text-lg mb-4 border-b border-white/10 pb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-black/50 border border-white/10 rounded-full text-sm text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="space-y-20">
            
            {/* The Challenge */}
            <div>
              <h2 className="text-3xl font-bold mb-6 uppercase text-[#00f0ff]">The Challenge</h2>
              <p className="text-lg text-gray-300 leading-relaxed">{project.problem}</p>
            </div>

            {/* The Solution */}
            <div>
              <h2 className="text-3xl font-bold mb-6 uppercase text-[#00f0ff]">The Solution</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">{project.solution}</p>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-3xl font-bold mb-6 uppercase text-[#00f0ff]">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#111] p-4 rounded-xl border border-white/5">
                    <CheckCircle2 className="text-[#00f0ff] mt-0.5 shrink-0" size={20} />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Result / Outcome */}
            {project.result && (
              <div className="bg-[#111] border border-[#00f0ff]/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[#00f0ff]/5 blur-3xl rounded-full"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-4 uppercase">The Result</h2>
                  <p className="text-xl md:text-2xl font-medium text-[#00f0ff]">{project.result}</p>
                </div>
              </div>
            )}
            
            {/* Gallery Placeholder */}
            <div>
              <h2 className="text-3xl font-bold mb-6 uppercase text-[#00f0ff]">Gallery</h2>
              <div className="w-full aspect-video bg-[#111] rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden relative">
                 <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="w-[150%] h-[150%] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-[spin_60s_linear_infinite]"></div>
                </div>
                <span className="text-gray-500 font-medium z-10">Project Screenshots</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#050505] text-center border-t border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to build something similar?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Let's discuss how we can apply these technologies and strategies to your next big idea.</p>
          <Link href="/#build-solution" className="inline-flex items-center justify-center px-8 py-4 bg-[#00f0ff] text-black font-bold rounded-xl hover:bg-[#00c0cc] transition-colors gap-2">
            Start a Project <ArrowLeft className="rotate-180" size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
