import { ArrowUpRight, Zap, Database, Globe, Gem } from "lucide-react";
import type { ReactNode } from "react";
import { SectionDivider } from "./SectionDivider";

interface EcommerceProject {
  title: string;
  description: string;
  image: string;
  statusColor: string;
  statusLabel: string;
  metaIcon: ReactNode;
  metaLabel: string;
}

const ecommerceProjects: EcommerceProject[] = [
  {
    title: "Vanguard Fashion",
    description: "Tienda de lujo con motor de personalización basado en IA y pagos criptográficos.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_Vk8YfoH8sCwayZxdTvghDbI0tMeTnDnIkeY-lbZtMvXn_hSZ3YJWlI42i2x9mV7gKcgMHIW7uhgwCkYNfeLa2nMiXcu-F79VGV-oyFYUyAycfaOYh5bqYgGeWw_oXJFU7khbQW_uSxd-GP1W9bO1f1U0bSD75n68YkqrD0XPeX_voQCvF-uV2jblUAqWGVc2RxgNxb-jfrER9sihpYMwiREIKxftL982uJlX6zzKTExtRQWkxhsKXVeWiIBJADXaWGt_0gdtNTSc",
    statusColor: "#34d399",
    statusLabel: "Live",
    metaIcon: <Zap size={14} />,
    metaLabel: "99 Performance",
  },
  {
    title: "Gourmet Direct",
    description: "Plataforma B2B para la cadena de suministro alimentaria con logística inteligente.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9wOKCnarKsD9BQ2z-vZr5FCc6wIwYj8R4bX7An3_J66UShlQCH4oXp-Yh_ZKVrQ3tKDnlU41Tp94hCyIagbqseIE5CYEy3t06pCzjpPxl4Y2cZGj2Wso3kKa3CG4oJbm3J64FVES3AylksuzP7MG8SRGT3JFo-iImXSoFHGd3Otr1Qp-aAEv0-VqX-3xV2y-bLN5bBltHLrKGXw58LK5Q5CCShulUAh2A7YH2YgplMkqwsSrZ5egIn9FQLB_o8ycxMCD62AyK5-s5",
    statusColor: "#fbbf24",
    statusLabel: "Beta",
    metaIcon: <Database size={14} />,
    metaLabel: "Real-time DB",
  },
  {
    title: "Global Marketplace",
    description: "Soluciones B2B con integración logística internacional y gestión de aduanas automatizada.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAoJAXF_wpKSxNBE5_6hOOmOzfqTHBbNgH6iaqLtx0t_1wjHqZrOBlaRw3jVozpZty7_f9UnwghfZFHXIhwilcOeorMDroGhMy-wuKMbgtOLmjnjY3CEAWSlWt-Ft7pKXFLy8UTZ8pBpcR7B8BE-kS0jEwYw25pvZfllGwD3PvcIG_LIej0wLgcDMJdftxzWxs74LL_rsVP3hh73R7qSHeI_ycSqn7ynUI2Nr4rt6wRfHqsw1mSl3tKIaDhb3kdZYexdpdVtWv-kqA",
    statusColor: "#34d399",
    statusLabel: "Active",
    metaIcon: <Globe size={14} />,
    metaLabel: "Multi-region",
  },
  {
    title: "Luxury Boutique",
    description: "Experiencia de compra inmersiva con renderizado de productos 3D en tiempo real y AR.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ3n0Svqr1x1ij0TZQcujmwuByYwHeM4X2XayKp7bvVckZ4qiJYTy5orIeOg5dJ5i4FiihA9FWB7Fx3bWCqsrwD1M_1nLkZd8CBpHhFFKgIBuhKi77T3tV2YmRxD5OXOnR5Fvh3vZitskMHm64fRuzYsDXcurmtUA3TabkswSUzmHgofpKdnxBs8PsZraHbHhcyppNLm6otObJuldrMFvJHPe5VC8IjxtI7ioIIdTGZADp2DV2I8QVJ2Wn1NlSVcUpMMmUhoGArPGz",
    statusColor: "#e0b6ff",
    statusLabel: "Premium",
    metaIcon: <Gem size={14} />,
    metaLabel: "AR Ready",
  },
];

export function EcommerceSection() {
  return (
    <section className="mb-32">
      <SectionDivider title="E-commerce" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ecommerceProjects.map((project) => (
          <div key={project.title} className="tilt-card scroll-reveal">
            <div className="portafolio-card inner-glow-border rounded-xl overflow-hidden group relative">
              <div className="card-glow" />
              {/* Image — full width top */}
              <div
                className="w-full aspect-video overflow-hidden border-b relative z-10"
                style={{
                  background: "rgba(27,27,30,1)",
                  borderColor: "rgba(255,255,255,0.05)",
                }}
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
              </div>
              {/* Content — below image */}
              <div className="relative z-10 p-8 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-[12px] font-medium border"
                    style={{
                      background: "rgba(155,83,210,0.2)",
                      color: "#e1b6ff",
                      borderColor: "rgba(225,182,255,0.2)",
                    }}
                  >
                    E-commerce
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: "#e0b6ff" }}
                  />
                </div>
                <h3 className="text-[20px] font-medium mb-2" style={{ color: "#e4e1e6" }}>
                  {project.title}
                </h3>
                <p className="text-base leading-relaxed mb-6" style={{ color: "#d0c2d5" }}>
                  {project.description}
                </p>
                <div className="flex gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full status-dot"
                      style={{ background: project.statusColor }}
                    />
                    <span className="text-[12px]" style={{ color: "#d0c2d5" }}>
                      {project.statusLabel}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5" style={{ color: "#d0c2d5" }}>
                    {project.metaIcon}
                    <span className="text-[12px]">{project.metaLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
