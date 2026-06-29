import { SectionDivider } from "./SectionDivider";

export function ReportingSection() {
  return (
    <section className="mb-32">
      <SectionDivider title="Sistemas de Reportes" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* DataStream Dashboard */}
        <div className="tilt-card scroll-reveal">
          <div className="portafolio-card inner-glow-border p-8 rounded-xl h-full group relative overflow-hidden">
            <div className="card-glow" />
            <div className="relative z-10 flex flex-col flex-grow">
            <div
              className="absolute top-0 right-0 w-32 h-32 blur-[60px] -mr-16 -mt-16"
              style={{ background: "rgba(224,182,255,0.1)" }}
            />
            <div className="flex flex-col h-full relative z-10">
              <div className="flex justify-between items-center mb-6">
                <span
                  className="px-3 py-1 rounded-full text-[12px] font-medium"
                  style={{
                    background: "#9d4edd",
                    color: "#fffdff",
                  }}
                >
                  Dashboard
                </span>
                <span className="text-[12px] font-medium" style={{ color: "#e0b6ff" }}>
                  analytics
                </span>
              </div>
              <h3 className="text-[28px] font-semibold mb-4" style={{ color: "#e4e1e6" }}>
                DataStream Dashboard
              </h3>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#d0c2d5" }}>
                Visualización de flujos de datos masivos en tiempo real para centros de control técnico.
              </p>
              {/* Mock UI */}
              <div
                className="aspect-video mt-auto rounded-lg overflow-hidden border p-4"
                style={{ background: "rgba(31,31,34,1)", borderColor: "rgba(255,255,255,0.05)" }}
              >
                <div className="flex flex-col gap-3">
                  <div className="h-4 w-3/4 rounded" style={{ background: "rgba(255,255,255,0.05)" }} />
                  <div className="flex gap-2">
                    <div
                      className="h-24 flex-1 rounded-md border"
                      style={{ background: "rgba(224,182,255,0.2)", borderColor: "rgba(224,182,255,0.3)" }}
                    />
                    <div
                      className="h-24 flex-1 rounded-md border"
                      style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
                    />
                    <div
                      className="h-24 flex-1 rounded-md border"
                      style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
                    />
                  </div>
                  <div className="h-4 w-full rounded" style={{ background: "rgba(255,255,255,0.05)" }} />
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Insight Analytics */}
        <div className="tilt-card scroll-reveal">
          <div className="portafolio-card inner-glow-border p-8 rounded-xl h-full group relative overflow-hidden">
            <div
              className="absolute bottom-0 left-0 w-32 h-32 blur-[60px] -ml-16 -mb-16"
              style={{ background: "rgba(219,184,255,0.1)" }}
            />
            <div className="flex flex-col h-full relative z-10">
              <div className="flex justify-between items-center mb-6">
                <span
                  className="px-3 py-1 rounded-full text-[12px] font-medium"
                  style={{ background: "#9d4edd", color: "#fffdff" }}
                >
                  Dashboard
                </span>
                <span className="text-[12px] font-medium" style={{ color: "#e0b6ff" }}>
                  insights
                </span>
              </div>
              <h3 className="text-[28px] font-semibold mb-4" style={{ color: "#e4e1e6" }}>
                Insight Analytics
              </h3>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#d0c2d5" }}>
                Motor de análisis predictivo con generación automática de reportes ejecutivos multi-idioma.
              </p>
              {/* Mock bar chart */}
              <div
                className="aspect-video mt-auto rounded-lg overflow-hidden border p-4"
                style={{ background: "rgba(31,31,34,1)", borderColor: "rgba(255,255,255,0.05)" }}
              >
                <div className="flex items-end justify-between h-full gap-2">
                  {[40, 70, 30, 90, 50, 20, 60].map((h, i) => (
                    <div
                      key={i}
                      className="w-full rounded-t"
                      style={{
                        height: `${h}%`,
                        background: i % 2 === 1 ? `rgba(224,182,255,${0.2 + (h / 100) * 0.4})` : "rgba(255,255,255,0.05)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supply Chain Monitor */}
        <div className="tilt-card scroll-reveal">
          <div className="portafolio-card inner-glow-border p-8 rounded-xl h-full group relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-32 h-32 blur-[60px] -ml-16 -mt-16"
              style={{ background: "rgba(225,182,255,0.1)" }}
            />
            <div className="flex flex-col h-full relative z-10">
              <div className="flex justify-between items-center mb-6">
                <span
                  className="px-3 py-1 rounded-full text-[12px] font-medium"
                  style={{ background: "#9d4edd", color: "#fffdff" }}
                >
                  Supply Chain
                </span>
                <span className="text-[12px] font-medium" style={{ color: "#e0b6ff" }}>
                  monitoring
                </span>
              </div>
              <h3 className="text-[28px] font-semibold mb-4" style={{ color: "#e4e1e6" }}>
                Supply Chain Monitor
              </h3>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#d0c2d5" }}>
                Seguimiento de activos y KPIs logísticos en tiempo real con alertas basadas en anomalías.
              </p>
              {/* Mock UI */}
              <div
                className="aspect-video mt-auto rounded-lg overflow-hidden border p-4 flex items-center justify-center"
                style={{ background: "rgba(31,31,34,1)", borderColor: "rgba(255,255,255,0.05)" }}
              >
                <div className="relative w-full h-full flex flex-wrap gap-2 content-start">
                  <div
                    className="w-1/3 h-12 rounded border"
                    style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
                  />
                  <div
                    className="w-1/2 h-12 rounded border"
                    style={{ background: "rgba(224,182,255,0.1)", borderColor: "rgba(224,182,255,0.2)" }}
                  />
                  <div
                    className="w-full h-20 rounded border flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
                  >
                    <div className="w-4/5 h-1 rounded overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
                      <div className="w-2/3 h-full" style={{ background: "#e0b6ff" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Audit Pro */}
        <div className="tilt-card scroll-reveal">
          <div className="portafolio-card inner-glow-border p-8 rounded-xl h-full group relative overflow-hidden">
            <div
              className="absolute bottom-0 right-0 w-32 h-32 blur-[60px] -mr-16 -mb-16"
              style={{ background: "rgba(255,100,100,0.08)" }}
            />
            <div className="flex flex-col h-full relative z-10">
              <div className="flex justify-between items-center mb-6">
                <span
                  className="px-3 py-1 rounded-full text-[12px] font-medium"
                  style={{ background: "#9d4edd", color: "#fffdff" }}
                >
                  Security
                </span>
                <span className="text-[12px] font-medium" style={{ color: "#e0b6ff" }}>
                  shield
                </span>
              </div>
              <h3 className="text-[28px] font-semibold mb-4" style={{ color: "#e4e1e6" }}>
                Security Audit Pro
              </h3>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#d0c2d5" }}>
                Panel de cumplimiento y auditoría de ciberseguridad avanzada para infraestructuras críticas.
              </p>
              {/* Mock security UI */}
              <div
                className="aspect-video mt-auto rounded-lg overflow-hidden border p-4"
                style={{ background: "rgba(31,31,34,1)", borderColor: "rgba(255,255,255,0.05)" }}
              >
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div
                    className="border rounded flex flex-col items-center justify-center p-2"
                    style={{ background: "rgba(224,182,255,0.05)", borderColor: "rgba(224,182,255,0.2)" }}
                  >
                    <div className="text-[8px] mb-1" style={{ color: "#d0c2d5", opacity: 0.5 }}>
                      THREAT LEVEL
                    </div>
                    <div className="text-xl font-bold" style={{ color: "#e0b6ff" }}>LOW</div>
                  </div>
                  <div
                    className="border rounded flex flex-col p-2 gap-1"
                    style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
                  >
                    <div className="h-1 w-full rounded" style={{ background: "rgba(255,255,255,0.1)" }} />
                    <div className="h-1 w-2/3 rounded" style={{ background: "rgba(255,255,255,0.1)" }} />
                    <div className="h-1 w-full rounded" style={{ background: "rgba(224,182,255,0.3)" }} />
                  </div>
                  <div
                    className="col-span-2 border rounded h-10"
                    style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
