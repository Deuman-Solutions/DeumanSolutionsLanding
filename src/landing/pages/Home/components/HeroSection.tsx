import { ArrowRight } from "lucide-react";
import { useParallaxGlow } from "../hooks/useParallaxGlow";

export function HeroSection() {
  useParallaxGlow();

  return (
    <section className="relative min-h-[85vh] flex items-center px-4 md:px-16 overflow-hidden">
      {/* Background glows */}
      <div
        id="hero-glow-main"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] -z-10 opacity-50"
        style={{ background: "rgba(224, 182, 255, 0.1)" }}
      />
      <div
        id="hero-glow-secondary"
        className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full blur-[100px] -z-10"
        style={{ background: "rgba(219, 184, 255, 0.1)" }}
      />

      <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left content */}
        <div className="hero-entrance">
          
          <h1
            className="text-[32px] md:text-[64px] font-bold leading-tight mb-4"
            style={{ color: "#e4e1e6", letterSpacing: "-0.02em" }}
          >
            Ingeniería Digital que{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #e0b6ff, #e1b6ff, #dbb8ff)",
              }}
            >
              Impulsa tu Crecimiento
            </span>
          </h1>

          <p
            className="text-base leading-relaxed mb-8 max-w-xl"
            style={{ color: "#d0c2d5" }}
          >
            Desarrollamos soluciones tecnológicas de alto impacto: Landing
            Pages, E-commerce y Sistemas de Reportería con enfoque en seguridad
            y velocidad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="primary-gradient-btn px-8 py-4 rounded-full text-white font-medium flex items-center justify-center gap-2">
              Explorar Soluciones
              <ArrowRight size={18} />
            </button>
            <button
              className="px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 transition-all hover:scale-105"
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#e4e1e6",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              Ver Portafolio
            </button>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative hidden md:block hero-entrance-delay">
          <div className="relative w-full aspect-square glass-card rounded-full flex items-center justify-center p-8 floating-element shadow-2xl">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                border: "1px solid rgba(224, 182, 255, 0.1)",
                animation: "spin 20s linear infinite",
              }}
            />
            <div
              className="absolute inset-4 rounded-full"
              style={{
                border: "1px solid rgba(219, 184, 255, 0.1)",
                animation: "spin 15s linear infinite reverse",
              }}
            />
            <div
              className="w-full h-full glass-card rounded-full p-1 relative overflow-hidden"
              style={{ borderColor: "rgba(255,255,255,0.05)" }}
            >
              <div
                className="w-full h-full rounded-full bg-cover bg-center opacity-80 mix-blend-screen"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCJht-jUBiOLl68oV0B0UG6OFHLxvdt6jwAZn2n2kIcTqgJHHHiLbfiAgW5n0aKZEFzIy4_yNEnrfqVGd8JjZ0xiDvBDkrZVUHHAtlokTqXBYcmGJwHpuI81s_lBkSMOrgljxDQ0K5ToNhLEq-NdvCEt2Up5Hxo8SgtwZ5lfxVhJgBpTT0jUZYUVvVTzvD7THQJlh4iIrUNa0GaJXqrL4kx3KXXuRuQUoXOvjom5jo77KvfQaF9pgWc0npnQDkIPrGn4rSTTjiZti_K')",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
