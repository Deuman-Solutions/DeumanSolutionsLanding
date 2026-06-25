import { Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 px-4 md:px-16 relative" id="contact">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "rgba(224,182,255,0.05)",
          transform: "skewY(1deg)",
        }}
      />
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-24 rounded-3xl text-center reveal-on-scroll" style={{ borderColor: "rgba(224,182,255,0.2)" }}>
        <h2
          className="text-[32px] md:text-[64px] font-bold mb-6"
          style={{ color: "#e4e1e6", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          ¿Listo para escalar tu visión?
        </h2>
        <p className="text-base leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: "#d0c2d5" }}>
          Hablemos sobre cómo nuestras soluciones de ingeniería pueden
          transformar tu negocio. Sin compromisos, solo estrategia pura.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="mailto:info@deumansolutions.com"
            className="primary-gradient-btn px-10 py-5 rounded-full text-white font-medium flex items-center justify-center gap-3"
          >
            <Mail size={18} />
            Contactar Ahora
          </a>
          <button
            className="px-10 py-5 rounded-full font-medium flex items-center justify-center gap-3 transition-all"
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
            Agendar Consultoría
          </button>
        </div>
      </div>
    </section>
  );
}
