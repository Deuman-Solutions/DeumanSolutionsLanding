import { useParticles } from "../../hooks";

export function PortafolioParticleCanvas() {
  useParticles("portafolio-particle-canvas");

  return (
    <canvas
      id="portafolio-particle-canvas"
      className="parallax-layer"
      data-speed="0.4"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
        willChange: "transform",
      }}
    />
  );
}
