import { Button } from "@/components/ui/button";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-5 right-5 z-50">
        <ThemeToggle />
      </div>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}