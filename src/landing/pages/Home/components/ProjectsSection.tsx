import { ArrowRight } from "lucide-react";

const projects = [
  {
    span: "md:col-span-8",
    type: "featured",
    category: "Landing Page",
    categoryColor: "#e0b6ff",
    categoryBg: "rgba(224,182,255,0.2)",
    categoryBorder: "rgba(224,182,255,0.3)",
    title: "Nexus SaaS",
    description: "Optimized conversion for a cloud infrastructure provider.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCS23vXKOUnz-uVtq0CdXXkoGgtMGiKUiaP0kXHiPIjiJEdBqiwKmdmZ-zSa8dQhdwJE85ksc-kKLrAo5vfJBr2d8UKNyHbMLz1ubhYUnN6NrH3asxgTgB-xPiAsjtEjwIsnWNQUH9o6U0u9JiLLr8FsO0S-wkYPDiMbtQdXlAUIDqJrn4irNmH5IpqIYgVcd80IPFkCJnRsga6KTYjvHCGoj6mE262jLputmYzw3O5qKeuYZ121VI2tlqwjr2QlTIVb4_NSa04r_QX",
    delay: 0,
  },
  {
    span: "md:col-span-4",
    type: "card",
    category: "E-commerce",
    categoryColor: "#dbb8ff",
    title: "Vanguard Fashion",
    description: "High-end retail experience with seamless checkout.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCjmjOqKDd9Eu-mzX0cOPKU9ltI67GypJBMV9Mi8PXNA84UGg4xZ39lZv5qQf_IX2zn-_PJ5--KYl73G4gzFsOasEw8OgvthLowbtjGj9Dsx64BDIUvwZnOWIKJsZsTxQ_44x8cG2V2LLo6HyfyEFbBajXdLny7ajZHzPdAwKaWmmMVjLBy9XceoRdgQXfeHfeVD_IAknvFs_sPLVbvfqtXJlL0G8M5Otg7xCBapvBT59tTzt4PiFmck5qG9yhNFvJSb6h17YQWY4aw",
    delay: 100,
  },
  {
    span: "md:col-span-4",
    type: "card",
    category: "Landing Page",
    categoryColor: "#e0b6ff",
    title: "Pulse Fitness",
    description: "High-performance lead generation for global gym chains.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMxDjYiCgvRG7ha_g8QGlYqLRzItw1Y7kvZF1YI1BO3TI9OOHwCjyiLcz2JIheinUi8_88BOisyR_3yK0rHeaHTwpgySEe0GiAuhY9LsJRjuMHrFGCbtgeaq4hM2zMdjRGL0kuFYdv-EKwN6TCW7HAz97BU1KnSAKBqtYvDXBa-xBOX6Kc7C4JWLghLr-bVTa5NAaVy7o_qE_nuv6tMJm8NcDTOCwfaat5yfy7c4KBT1JhWX6gKUN43eYIbIdOOsuABTpShABWFHkp",
    delay: 200,
  },
  {
    span: "md:col-span-4",
    type: "card",
    category: "E-commerce",
    categoryColor: "#dbb8ff",
    title: "Gourmet Direct",
    description: "Integrated logistics and inventory for artisanal food.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAnSaSAICm8lM8KcT0y84HphIzUIjjx5dzbww-d9ioK2lE2gbwxUu6NCwGHIDAEpspdPuinG_mPnyk-ndEe1tvcYzVPXx4UBLoNF0zVu75tSIKL4TKGHSyMNY8PvN2QySyiAy_83I4Mc3j4Cc-QhxsLiSjh5d1idUe5njTQI9B1-oFb53J6piaLHNBam087hlF4k-iIT6K5YwjnROfuMGSBa5-tARR0NbKqUapEFrsfx8Plxr4PXSev_awE33Rt8WzyCKLEotmSUUA-",
    delay: 300,
  },
  {
    span: "md:col-span-4",
    type: "card",
    category: "Landing Page",
    categoryColor: "#e0b6ff",
    title: "Stellar Portfolio",
    description: "Dynamic visual storytelling for creative agencies.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBHp4sfSQzCwHP-ZN5RZkECbzBPE4sO5Qd8EflvcFtKFOrqdWvUEqEdXsUtK3jeNiSVOSfcGuMJRM09ouJZUxaVAu_XiRQ3Cp4oTD7NmrGzJCrSvKDvqe8uwRZhz4-7YATjIDJbe0REnel6GES1rivyVQFWY_HmbwIB-Fs6fu-Sh4Vphou_Gpk5xK6SEH_vGdwVTgP2J0w5MoCx_3jlVJi1xq_vcbyvMzl1nWnPjjLw62QxTRj26vVEEb-dMF2ss6qkgGfQDoqYsC-h",
    delay: 400,
  },
];

export function ProjectsSection() {
  return (
    <section className="py-24 px-4 md:px-16" id="projects">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal-on-scroll">
          <div>
            <h2
              className="text-[40px] font-semibold"
              style={{ color: "#e4e1e6", lineHeight: 1.2 }}
            >
              Galería de Éxito
            </h2>
            <p className="text-base mt-1" style={{ color: "#d0c2d5" }}>
              Soluciones reales para desafíos de negocio complejos.
            </p>
          </div>
          <button
            className="flex items-center gap-2 font-medium pb-1 transition-all"
            style={{
              color: "#e0b6ff",
              borderBottom: "1px solid rgba(224,182,255,0.2)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget.style.borderBottomColor = "#e0b6ff"))
            }
            onMouseLeave={(e) =>
              ((e.currentTarget.style.borderBottomColor =
                "rgba(224,182,255,0.2)"))
            }
          >
            Ver todos los proyectos <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project) =>
            project.type === "featured" ? (
              <div
                key={project.title}
                className={`${project.span} group relative overflow-hidden rounded-xl glass-card reveal-on-scroll`}
                style={{ transitionDelay: `${project.delay}ms` }}
              >
                <div className="aspect-video w-full relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, #131316 0%, rgba(19,19,22,0.4) 50%, transparent 100%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <span
                      className="text-[12px] font-medium px-3 py-1 rounded-full border mb-4 inline-block uppercase tracking-widest"
                      style={{
                        background: project.categoryBg,
                        color: project.categoryColor,
                        borderColor: project.categoryBorder,
                      }}
                    >
                      {project.category}
                    </span>
                    <h4
                      className="text-[40px] font-semibold text-white mb-2"
                      style={{ lineHeight: 1.2 }}
                    >
                      {project.title}
                    </h4>
                    <p className="max-w-md text-base" style={{ color: "#d0c2d5" }}>
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={project.title}
                className={`${project.span} group relative overflow-hidden rounded-xl glass-card reveal-on-scroll`}
                style={{ transitionDelay: `${project.delay}ms` }}
              >
                <div className="h-full flex flex-col">
                  <div className="flex-grow relative overflow-hidden aspect-[4/5] md:aspect-auto">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${project.image}')` }}
                    />
                  </div>
                  <div
                    className="p-4 backdrop-blur-md"
                    style={{ background: "rgba(42,42,45,0.5)" }}
                  >
                    <span
                      className="text-[10px] uppercase tracking-widest mb-1 block font-medium"
                      style={{ color: project.categoryColor }}
                    >
                      {project.category}
                    </span>
                    <h4 className="text-[20px] font-medium text-white mb-1">
                      {project.title}
                    </h4>
                    <p className="text-[14px]" style={{ color: "#d0c2d5" }}>
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
