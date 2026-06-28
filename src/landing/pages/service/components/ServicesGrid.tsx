import { Globe, ShoppingCart, BarChart3, Zap, TrendingUp, Database } from "lucide-react";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    icon: <Globe size={22} />,
    badge: "Activo",
    title: "Landing Pages",
    description:
      "Diseñamos interfaces optimizadas para la conversión, enfocándonos en la experiencia de usuario y la velocidad de carga mediante arquitectura de micro-interacciones.",
    features: [
      "Hosting incluido premium",
      "Dominio personalizado SSL",
      "Mantenimiento preventivo",
      "Optimización SEO técnica",
      "Diseño responsivo adaptativo",
    ],
    price: "Desde $299",
    footerIcon: <Zap size={22} />,
    animationDelay: "0.1s",
  },
  {
    icon: <ShoppingCart size={22} />,
    badge: "Escalable",
    title: "E-commerce",
    description:
      "Plataformas de venta escalables y robustas integradas con sistemas de pago seguros y logística eficiente, diseñadas para altos volúmenes de tráfico.",
    features: [
      "Hosting de alto rendimiento",
      "Desarrollo de Base de Datos SQL",
      "Integración de APIs bancarias",
      "Dashboard de gestión ERP",
    ],
    price: "Desde $899",
    footerIcon: <TrendingUp size={22} />,
    animationDelay: "0.2s",
  },
  {
    icon: <BarChart3 size={22} />,
    badge: "Data-Ready",
    title: "Sistemas de Reportería",
    description:
      "Dashboards analíticos que transforman datos crudos en inteligencia de negocio procesable en tiempo real con visualizaciones de alto impacto.",
    features: [
      "Visualización interactiva",
      "Conectores de datos custom",
      "Exportación multiformato",
      "Seguridad cifrada AES-256",
      "Alertas inteligentes por IA",
    ],
    price: "Desde $1,299",
    footerIcon: <Database size={22} />,
    animationDelay: "0.3s",
  },
];

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((s) => (
        <ServiceCard key={s.title} {...s} />
      ))}
    </div>
  );
}
