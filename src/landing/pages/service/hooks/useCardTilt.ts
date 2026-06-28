import { useEffect } from "react";

export function useCardTilt(selector: string = ".tilt-card", intensity: number = 20) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const cards = document.querySelectorAll<HTMLElement>(selector);

    const onMouseMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / intensity;
      const rotateY = (centerX - x) / intensity;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const onMouseLeave = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", onMouseMove);
      card.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", onMouseMove);
        card.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, [selector, intensity]);
}
