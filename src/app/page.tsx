import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import SelectedWork from "@/components/SelectedWork";
import Technology from "@/components/Technology";
import About from "@/components/About";
import WhyUsAndProcess from "@/components/WhyUsAndProcess";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#050505]">
      <Hero />
      <Introduction />
      <Services />
      <Solutions />
      <SelectedWork />
      <Technology />
      <About />
      <WhyUsAndProcess />
      <Contact />
    </main>
  );
}
