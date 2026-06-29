import { useParallaxScroll, useCardTilt, useScrollReveal } from "../hooks";
import { EcommerceSection, LandingPagesSection, PortafolioHero, PortafolioParticleCanvas, ReportingSection } from "./components";

export const Portafolio = () => {
  useParallaxScroll();
  useCardTilt(".tilt-card", 50);
  useScrollReveal(".scroll-reveal");

  return (
    <main className="relative pt-32 pb-24">
      <PortafolioParticleCanvas />
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 overflow-visible">
        <PortafolioHero />
        <LandingPagesSection />
        <EcommerceSection />
        <ReportingSection />
      </div>
    </main>
  );
};
