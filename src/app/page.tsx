import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import ProblemSolver from "@/components/ProblemSolver";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import SelectedWork from "@/components/SelectedWork";
import CaseStudies from "@/components/CaseStudies";
import AILab from "@/components/AILab";
import Technology from "@/components/Technology";
import About from "@/components/About";
import WhyUsAndProcess from "@/components/WhyUsAndProcess";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import BuildYourSolution from "@/components/BuildYourSolution";
import BookConsultation from "@/components/BookConsultation";
import BlogPlaceholder from "@/components/BlogPlaceholder";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#050505]">
      <Hero />
      <Introduction />
      <ProblemSolver />
      <Services />
      <Solutions />
      <SelectedWork />
      <AILab />
      <Technology />
      <About />
      <WhyUsAndProcess />
      <Pricing />
      <BlogPlaceholder />
      <FAQ />
      <BuildYourSolution />
      <BookConsultation />
      <Contact />
    </main>
  );
}
