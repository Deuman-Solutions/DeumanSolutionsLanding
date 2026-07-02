import { ArrowUpRight } from "lucide-react";
import { SectionDivider } from "./SectionDivider";

interface LandingProject {
  title: string;
  description: string;
  image: string;
  url: string | null;
}

const landingProjects: LandingProject[] = [
  {
    title: "El Avellano",
    description: "Página para una inmobiliaria que vende terrenos en el sur de chile.",
    image: "/Landing-elavellano.PNG",
    url: "https://www.elavellano.cl/",
  },
  {
    title: "Menu Restaurant",
    description: "Página web para un restaurante con menú interactivo.",
    image: "/Landing-menurestaurant.png",
    url: "https://menurestaurant.deumansolutions.cl/",
  },
  {
    title: "Proyecto 3",
    description: "Descripción del proyecto próximamente.",
    image: "/Landing-placeholder2.png",
    url: null,
  },
  {
    title: "Proyecto 4",
    description: "Descripción del proyecto próximamente.",
    image: "/Landing-placeholder3.png",
    url: null,
  },
  {
    title: "Proyecto 5",
    description: "Descripción del proyecto próximamente.",
    image: "/Landing-placeholder4.png",
    url: null,
  },
];

export function LandingPagesSection() {
  return (
    <section className="mb-32">
      <SectionDivider title="Landing Pages" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {landingProjects.map((project) => {
          const CardWrapper = project.url
            ? ({ children }: { children: React.ReactNode }) => (
                <a
                  href={project.url!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {children}
                </a>
              )
            : ({ children }: { children: React.ReactNode }) => (
                <div className="h-full">{children}</div>
              );

          return (
            <div key={project.title} className="tilt-card scroll-reveal">
              <CardWrapper>
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
                        style={{
                          color: project.url ? "#e0b6ff" : "rgba(224,182,255,0.3)",
                        }}
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
              </CardWrapper>
            </div>
          );
        })}
      </div>
    </section>
  );
}