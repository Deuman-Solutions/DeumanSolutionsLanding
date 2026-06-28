export function ServiceHero() {
  return (
    <>
      {/* Background ambient layers */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: -2, opacity: 0.7 }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 parallax-layer"
          data-speed="0.15"
          style={{
            backgroundImage:
              "radial-gradient(rgba(224, 182, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Blob top-left */}
        <div
          className="absolute rounded-full blur-[120px] parallax-layer"
          data-speed="0.6"
          style={{
            top: "-10%",
            left: "-10%",
            width: 600,
            height: 600,
            background: "rgba(224, 182, 255, 0.2)",
            opacity: 0.5,
          }}
        />
        {/* Blob right */}
        <div
          className="absolute rounded-full blur-[100px] parallax-layer"
          data-speed="0.35"
          style={{
            top: "40%",
            right: "-5%",
            width: 500,
            height: 500,
            background: "rgba(225, 182, 255, 0.1)",
            opacity: 0.3,
          }}
        />
        {/* Blob bottom */}
        <div
          className="absolute rounded-full blur-[150px] parallax-layer"
          data-speed="0.8"
          style={{
            bottom: "-10%",
            left: "20%",
            width: 700,
            height: 700,
            background: "rgba(224, 182, 255, 0.15)",
            opacity: 0.4,
          }}
        />
      </div>

      {/* Hero heading */}
      <div className="mb-8 scroll-reveal">
        <span
          className="block uppercase tracking-widest text-xs font-medium mb-3"
          style={{ color: "#e0b6ff" }}
        >
          Nuestra Experiencia
        </span>
        <h1
          className="text-4xl md:text-[64px] font-bold leading-tight mb-4 max-w-2xl"
          style={{ color: "#e4e1e6", letterSpacing: "-0.02em" }}
        >
          Soluciones de Ingeniería{" "}
          <span style={{ color: "#e0b6ff" }}>Digital de Precisión.</span>
        </h1>
        <p
          className="text-base leading-relaxed max-w-xl"
          style={{ color: "#d0c2d5" }}
        >
          Transformamos ideas complejas en realidades técnicas robustas,
          optimizadas para el rendimiento y la escalabilidad empresarial.
        </p>
      </div>
    </>
  );
}
