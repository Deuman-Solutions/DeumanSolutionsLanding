export function ServiceCTA() {
  return (
    <div
      className="tilt-card-soft scroll-reveal mt-6 flex flex-col md:flex-row items-center justify-between gap-6"
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderTop: "1px solid rgba(255,255,255,0.15)",
        borderLeft: "1px solid rgba(255,255,255,0.15)",
        borderRadius: "0.75rem",
        padding: "32px",
        transformStyle: "preserve-3d",
        position: "relative",
        overflow: "hidden",
        transition:
          "background 0.3s, border-color 0.3s, box-shadow 0.4s, transform 0.4s cubic-bezier(0.23,1,0.32,1)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "rgba(255,255,255,0.05)";
        el.style.borderColor = "rgba(224,182,255,0.4)";
        el.style.boxShadow =
          "0 25px 50px -12px rgba(0,0,0,0.7), 0 0 15px rgba(157,78,221,0.1)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "rgba(255,255,255,0.03)";
        el.style.borderColor = "rgba(255,255,255,0.1)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Mouse glow */}
      <div className="card-glow" />

      <div className="relative z-10 flex-1">
        <h3
          className="text-[20px] font-medium mb-2"
          style={{ color: "#e4e1e6" }}
        >
          ¿Buscas algo más específico?
        </h3>
        <p className="text-base leading-relaxed max-w-xl" style={{ color: "#d0c2d5" }}>
          Ofrecemos consultoría técnica para desarrollos a medida. Cuéntanos tu
          desafío y diseñaremos el stack tecnológico ideal para tu proyecto.
        </p>
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
        <button
          className="flex-1 md:flex-none px-8 py-4 text-[12px] font-medium rounded-lg transition-all"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#e4e1e6",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
          }
        >
          Agendar Consultoría
        </button>
        <button className="flex-1 md:flex-none px-8 py-4 text-[12px] font-medium rounded-lg primary-gradient-btn text-white">
          Empezar Ahora
        </button>
      </div>
    </div>
  );
}
