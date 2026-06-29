import { SectionDivider } from "./SectionDivider";

interface ReportingProject {
  title: string;
  description: string;
  badge: string;
  image: string;
}

const reportingProjects: ReportingProject[] = [
  {
    title: "DataStream Dashboard",
    description: "Visualización de flujos de datos masivos en tiempo real para centros de control técnico.",
    badge: "Dashboard",
    image: "https://placehold.co/800x450/1f1f22/e0b6ff?text=DataStream",
  },
  {
    title: "Insight Analytics",
    description: "Motor de análisis predictivo con generación automática de reportes ejecutivos multi-idioma.",
    badge: "Dashboard",
    image: "https://placehold.co/800x450/1f1f22/e0b6ff?text=Insight+Analytics",
  },
  {
    title: "Supply Chain Monitor",
    description: "Seguimiento de activos y KPIs logísticos en tiempo real con alertas basadas en anomalías.",
    badge: "Supply Chain",
    image: "https://placehold.co/800x450/1f1f22/e0b6ff?text=Supply+Chain",
  },
  {
    title: "Security Audit Pro",
    description: "Panel de cumplimiento y auditoría de ciberseguridad avanzada para infraestructuras críticas.",
    badge: "Security",
    image: "https://placehold.co/800x450/1f1f22/e0b6ff?text=Security+Audit",
  },
];

export function ReportingSection() {
  return (
    <section className="mb-32">
      <SectionDivider title="Sistemas de Reportes" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportingProjects.map((project) => (
          <div key={project.title} className="tilt-card scroll-reveal">
            <div className="portafolio-card inner-glow-border rounded-xl overflow-hidden group relative">
              <div className="card-glow" />
              {/* Imagen */}
              <div
                className="w-full aspect-video overflow-hidden border-b relative z-10"
                style={{ background: "rgba(27,27,30,1)", borderColor: "rgba(255,255,255,0.05)" }}
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
              </div>
              {/* Contenido */}
              <div className="relative z-10 p-8 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-[12px] font-medium"
                    style={{ background: "#9d4edd", color: "#fffdff" }}
                  >
                    {project.badge}
                  </span>
                </div>
                <h3 className="text-[20px] font-medium mb-2" style={{ color: "#e4e1e6" }}>
                  {project.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "#d0c2d5" }}>
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
