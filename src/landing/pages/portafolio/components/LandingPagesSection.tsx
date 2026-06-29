import { ArrowUpRight } from "lucide-react";
import { SectionDivider } from "./SectionDivider";

const landingProjects = [
  {
    title: "Nexus SaaS",
    description: "Plataforma de gestión empresarial con arquitectura distribuida y escalabilidad masiva.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-GNocs-AjvPyWru2Wu9vXo1IRZRzBA3VX39XOozvqyifbfoCA20wvNCGi8JsS9Siv2u4loz5PgKx5LEO2x_N0A0k-beiJzdq1Q3j1xohxpf_et1LeSn97MOaKPLP1tPbUITyLEfL-8z-IMVnWQ07DBQxD0vDViInDarFohFESkUZpBQh_Nhwb77K-gKJnWW9Rh0sKOY35mQ6H-Kk76wsJNPItMjjGxpANkOYiRIbo3SjS3jNit8C1wzVzFocAE7IhugDOskDUbZ5P",
  },
  {
    title: "Pulse Fitness",
    description: "Ecosistema digital para el seguimiento biométrico en tiempo real y rutinas dinámicas.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDumxJFGizz0ZzSixAnuerDCVWO1kJ3A6HAMewtridvsz4kT2XiJTDwAgbc38hDc8HPGmBZeCQncXFIFkB_h-jYWK-P4SKvFtbaxL87WsYf-QAUTrTYdoZkHfzTiwlFpjbMiqRXbFlNjnL-uIb_SqDuAHe_zQbaZ4rfltiJZta7YG8nh1ZaivSqOpPDuXDIN9qBX0nQt0VxB0fh1PlaS1d3axVvUHDqT9BJ0wdfEOTGjfPr4ptxFMCOLVNifCvyoNZ69UkNLiHwje9W",
  },
  {
    title: "Stellar Portfolio",
    description: "Showcase interactivo de alto rendimiento para firmas de arquitectura y diseño vanguardista.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfWoVgJqzyFiGG5elH3TygWwKOd7xWvMCCHWnb38ZH8PZiXsOVj0RnndnRGdj_3pZUXM9srsbFJECV1A7mUanBDE966v5Btmjd8UEY2tYejXnLU16EWbQwUW_GJEWNnttxxRLC_mc6aoTrwBZGxh3pyYWeiqtiMIoUqX6OBx4VXHdLPIxOBv458sYCuwwG10oVTmWbXhNp9K0TRcVDNYhUPTS2_yc2oiVaO0AYBz0rW5BDK-i-oDQCmDlBHPtT1n0Rly9ky0jt4DME",
  },
  {
    title: "Quantum Analytics",
    description: "Plataforma de visualización de datos complejos con procesamiento en el borde.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChbL4KxC5nOskmY41ZSLBIh7egqMgWfQ-BTh87waaql4EtxcNc6h-XCM3y36WAzWKUmUoYO-ETpnLCFb13cTxxFFQmah0u2vMUMmfa5X8MJFe0oGlpDLYbq0T6N2L33QqLYykJ-Wz24RKtC0OtrluENBwGhVjkM-b37rkTfQvPHhRqws_hH-SjnV7TLFbUpp_lFHHtLYNlr04ppvotKriZAy3GiwycB0IXvPqdtdA_iU-JPtRimjwBa50ak-dlgjqXN8gxHrodAMao",
  },
  {
    title: "CloudSync Pro",
    description: "Infraestructura de sincronización global para equipos de ingeniería de alto rendimiento.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmDuRqsIMmyTnLNjeJj6WX6C0WRS4KtDgq2JIQJ5L6bRMwuMAWGPnFw_etdLlVkzFXwfmLjFNbYN8DFW6CDnsjTEzhI8Hc68AVOlsBecUFa0wJucKcOVTZnPqNkbtL7TrYAHBLjMdiTBIurK9i1LwdfuWpwjLdV-HStKJdahBWUOXdx2hBCjEFCYaA9Vn375ryOsQ7et78MPhPLggSiA4WZ0PAXc4CRuYHF5eUOE91J-AvKw9kBAwJsyriz2KeGBn9GO-unjqE7YNy",
  },
];

export function LandingPagesSection() {
  return (
    <section className="mb-32">
      <SectionDivider title="Landing Pages" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {landingProjects.map((project) => (
          <div key={project.title} className="tilt-card scroll-reveal ">
            <div className="portafolio-card inner-glow-border p-8 rounded-xl h-full flex flex-col group">
              <div className="card-glow" />
              <div className="relative z-10 flex flex-col flex-grow">

                {/* Image */}
                <div
                className="aspect-video mb-6 rounded-lg overflow-hidden border"
                style={{
                  background: "rgba(31,31,34,1)",
                  borderColor: "rgba(255,255,255,0.05)",
                }}
                >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                </div>
                {/* Meta */}
                <div className="flex justify-between items-start mb-4">
                <span
                  className="px-3 py-1 rounded-full text-[12px] font-medium border"
                  style={{
                    background: "rgba(90,58,124,0.3)",
                    color: "#dbb8ff",
                    borderColor: "rgba(219,184,255,0.2)",
                  }}
                >
                  Landing Page
                </span>
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: "#e0b6ff" }}
                />
                </div>
                {/* Title + description */}
                <h3
                className="text-[20px] font-medium mb-2"
                style={{ color: "#e4e1e6" }}
                >
                {project.title}
                </h3>
                <p
                className="text-base leading-relaxed flex-grow"
                style={{ color: "#d0c2d5" }}
                >
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
