export function PortafolioHero() {
  return (
    <header className="mb-24 text-center md:text-left scroll-reveal">
      <h1
        className="text-[48px] md:text-[64px] font-bold mb-4 leading-tight"
        style={{
          letterSpacing: "-0.02em",
          background: "linear-gradient(135deg, #e0b6ff 0%, #8433c4 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Nuestro Portafolio de Soluciones
      </h1>
      <p
        className="text-[20px] md:text-[28px] font-medium max-w-2xl"
        style={{ color: "#d0c2d5", opacity: 0.8 }}
      >
        Ingeniería de precisión aplicada a desafíos reales.
      </p>
    </header>
  );
}
