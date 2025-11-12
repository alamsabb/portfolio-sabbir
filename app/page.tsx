import { Navigation } from "@/features/portfolio/components/Navigation";
import { Hero } from "@/features/portfolio/components/Hero";
import { About } from "@/features/portfolio/components/About";
import { Skills } from "@/features/portfolio/components/Skills";
import { Experience } from "@/features/portfolio/components/Experience";
import { Projects } from "@/features/portfolio/components/Projects";
import { Contact } from "@/features/portfolio/components/Contact";
import { Footer } from "@/features/portfolio/components/Footer";
import { StarWarsBackground } from "@/features/portfolio/components/StarWarsBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative text-white">
      <StarWarsBackground />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
