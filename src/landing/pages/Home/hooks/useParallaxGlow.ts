import { useEffect } from "react";

export function useParallaxGlow() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      const mainGlow = document.getElementById("hero-glow-main");
      const secondaryGlow = document.getElementById("hero-glow-secondary");

      if (mainGlow) {
        mainGlow.style.transform = `translate(calc(-50% + ${x * 30}px), calc(-50% + ${y * 30}px))`;
      }
      if (secondaryGlow) {
        secondaryGlow.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
}
