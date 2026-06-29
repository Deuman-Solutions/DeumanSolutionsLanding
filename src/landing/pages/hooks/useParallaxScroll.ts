import { useEffect } from "react";

export function useParallaxScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const layers = document.querySelectorAll<HTMLElement>(".parallax-layer");
      layers.forEach((layer) => {
        const speed = parseFloat(layer.getAttribute("data-speed") ?? "0.1");
        layer.style.transform = `translate3d(0, ${-(scrolled * speed)}px, 0)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
