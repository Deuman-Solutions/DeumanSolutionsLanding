import { Globe, ShoppingCart, BarChart3, Zap, TrendingUp, LineChart } from "lucide-react";

const services = [
  {
    icon: Globe,
    accentColor: "#e0b6ff",
    accentBg: "rgba(224, 182, 255, 0.2)",
    title: "Landing Pages",
    description:
      "Diseñamos interfaces optimizadas para la conversión, enfocándonos en la experiencia de usuario y la velocidad de carga.",
    tag: "Foco en Conversión",
    TagIcon: Zap,
  },
  {
    icon: ShoppingCart,
    accentColor: "#dbb8ff",
    accentBg: "rgba(219, 184, 255, 0.2)",
    title: "E-commerce",
    description:
      "Plataformas de venta escalables y robustas integradas con sistemas de pago seguros y logística eficiente.",
    tag: "Foco en Escala",
    TagIcon: TrendingUp,
  },
  {
    icon: BarChart3,
    accentColor: "#e1b6ff",
    accentBg: "rgba(225, 182, 255, 0.2)",
    title: "Sistemas de Reportería",
    description:
      "Dashboards analíticos que transforman datos crudos en inteligencia de negocio procesable en tiempo real.",
    tag: "Foco en Datos",
    TagIcon: LineChart,
  },
];

export function ServicesSection() {
  return (
    <section
      className="py-24 px-4 md:px-16"
      id="services"
      style={{ background: "#0e0e11" }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-16 reveal-on-scroll">
          <h2
            className="text-[40px] font-semibold text-center mb-4"
            style={{ color: "#e4e1e6", lineHeight: 1.2 }}
          >
            Nuestros Servicios
          </h2>
          <p className="text-base text-center max-w-2xl mx-auto" style={{ color: "#d0c2d5" }}>
            Transformamos la complejidad técnica en resultados comerciales
            tangibles a través de tres pilares de especialización.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const TagIcon = service.TagIcon;
            return (
              <div
                key={service.title}
                className="glass-card glow-purple p-8 rounded-xl reveal-on-scroll"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                  style={{
                    background: service.accentBg,
                    color: service.accentColor,
                  }}
                >
                  <Icon size={22} />
                </div>
                <h3
                  className="text-[20px] font-medium mb-4"
                  style={{ color: service.accentColor }}
                >
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed mb-6" style={{ color: "#d0c2d5" }}>
                  {service.description}
                </p>
                <div
                  className="flex items-center gap-2 text-[12px] uppercase tracking-widest font-medium"
                  style={{ color: service.accentColor }}
                >
                  {service.tag}
                  <TagIcon size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
