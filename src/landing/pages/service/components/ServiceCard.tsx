import { CheckCircle } from "lucide-react";
import type { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  badge: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  footerIcon: ReactNode;
  animationDelay?: string;
}

export function ServiceCard({
  icon,
  badge,
  title,
  description,
  features,
  price,
  footerIcon,
  animationDelay = "0s",
}: ServiceCardProps) {
  return (
    <div
      className="tilt-card scroll-reveal flex flex-col"
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderTop: "1px solid rgba(255,255,255,0.15)",
        borderLeft: "1px solid rgba(255,255,255,0.15)",
        borderRadius: "0.75rem",
        padding: "32px",
        transformStyle: "preserve-3d",
        position: "relative",
        overflow: "hidden",
        transition:
          "background 0.3s, border-color 0.3s, box-shadow 0.4s, transform 0.6s cubic-bezier(0.03, 0.98, 0.52, 0.99)",
        transitionDelay: animationDelay,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "rgba(255,255,255,0.05)";
        el.style.borderColor = "rgba(224,182,255,0.4)";
        el.style.boxShadow =
          "0 25px 50px -12px rgba(0,0,0,0.7), 0 0 15px rgba(157,78,221,0.1)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "rgba(255,255,255,0.03)";
        el.style.borderColor = "rgba(255,255,255,0.1)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Mouse glow layer */}
      <div className="card-glow" />

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-grow">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{
              background: "rgba(224,182,255,0.1)",
              border: "1px solid rgba(224,182,255,0.2)",
              color: "#e0b6ff",
            }}
          >
            {icon}
          </div>
          <div
            className="flex items-center gap-2 px-3 py-1 rounded-full"
            style={{ background: "#1f1f22" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-emerald-400"
              style={{ animation: "pulse-dot 2s infinite ease-in-out" }}
            />
            <span
              className="text-[12px] font-medium"
              style={{ color: "#d0c2d5" }}
            >
              {badge}
            </span>
          </div>
        </div>

        {/* Title + description */}
        <h2 className="text-[20px] font-medium mb-2" style={{ color: "#e4e1e6" }}>
          {title}
        </h2>
        <p
          className="text-base leading-relaxed mb-6"
          style={{ color: "#d0c2d5" }}
        >
          {description}
        </p>

        {/* Feature list */}
        <ul className="space-y-2 mb-6 flex-grow">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-3">
              <CheckCircle
                size={16}
                className="shrink-0"
                style={{ color: "#e0b6ff" }}
              />
              <span className="text-[12px]" style={{ color: "#d0c2d5" }}>
                {f}
              </span>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div
          className="mt-auto pt-4 flex justify-between items-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div>
            <span
              className="text-[12px] block mb-0.5"
              style={{ color: "#d0c2d5" }}
            >
              Inversión
            </span>
            <span className="text-[20px] font-medium" style={{ color: "#e0b6ff" }}>
              {price}
            </span>
          </div>
          <span style={{ color: "rgba(224,182,255,0.4)" }}>{footerIcon}</span>
        </div>
      </div>
    </div>
  );
}
