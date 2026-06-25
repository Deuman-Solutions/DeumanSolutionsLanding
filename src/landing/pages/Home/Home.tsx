import { useScrollReveal } from "./hooks/useScrollReveal";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { CTASection } from "./components/CTASection";

export const Home = () => {
  useScrollReveal();

  return (
    <main className="pt-24">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <CTASection />
    </main>
  );
};
