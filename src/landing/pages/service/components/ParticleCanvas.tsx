import { useParticles } from "../hooks/useParticles";

export function ParticleCanvas() {
  useParticles("service-particle-canvas");

  return (
    <canvas
      id="service-particle-canvas"
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
