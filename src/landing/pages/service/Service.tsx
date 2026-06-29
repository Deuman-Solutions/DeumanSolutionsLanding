import { useCardTilt, useParallaxScroll, useScrollReveal } from "../hooks";
import { ParticleCanvas, ServiceCTA, ServiceHero, ServicesGrid } from "./components";


export const Service = () => {
  useParallaxScroll();
  useCardTilt(".tilt-card", 80);
  useCardTilt(".tilt-card-soft", 200);
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
