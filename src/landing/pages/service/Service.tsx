import { ParticleCanvas } from "./components/ParticleCanvas";
import { ServiceHero } from "./components/ServiceHero";
import { ServicesGrid } from "./components/ServicesGrid";
import { ServiceCTA } from "./components/ServiceCTA";
import { useParallaxScroll } from "./hooks/useParallaxScroll";
import { useCardTilt } from "./hooks/useCardTilt";
import { useScrollReveal } from "./hooks/useScrollReveal";

export const Service = () => {
  useParallaxScroll();
  useCardTilt(".tilt-card", 50);
  useCardTilt(".tilt-card-soft", 100);
  useScrollReveal(".scroll-reveal");

  return (
    <main
      className="pt-32 pb-20 relative"
      style={{ perspective: "1000px" }}
    >
      <ParticleCanvas />

      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <ServiceHero />
        <ServicesGrid />
        <ServiceCTA />
      </div>
    </main>
  );
};
