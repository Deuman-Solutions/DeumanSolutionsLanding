import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer
      className="w-full"
      style={{
        background: "#0e0e11",
        borderTop: "1px solid rgba(224,182,255,0.2)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-16 py-8 max-w-[1280px] mx-auto">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/logoDS.png"
              alt="Deuman Solutions Logo"
              className="w-10 h-10 rounded-full"
            />
            <span
              className="text-[20px] font-bold"
              style={{ color: "#e0b6ff" }}
            >
              Deuman Solutions
            </span>
          </div>
          <p className="text-base max-w-sm" style={{ color: "#d0c2d5" }}>
            Líderes en ingeniería de software de alta fidelidad. Construyendo el
            futuro digital con precisión y seguridad.
          </p>
        </div>

        {/* Servicios */}
        <div className="flex flex-col gap-2">
          <h5
            className="text-base font-bold mb-2"
            style={{ color: "#e0b6ff" }}
          >
            Servicios
          </h5>
          {["Landing Pages", "E-commerce", "Sistemas de Reportería"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-base transition-colors"
                style={{ color: "#d0c2d5" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#e0b6ff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#d0c2d5")
                }
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Proyectos */}
        <div className="flex flex-col gap-2">
          <h5
            className="text-base font-bold mb-2"
            style={{ color: "#e0b6ff" }}
          >
            Proyectos
          </h5>
          <Link
            to="/portafolio"
            className="text-base transition-colors"
            style={{ color: "#d0c2d5" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#e0b6ff")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "#d0c2d5")
            }
          >
            Portafolio de proyectos
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-[1280px] mx-auto px-4 md:px-16 py-6 flex flex-col md:flex-row justify-between items-center gap-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <p className="text-[12px]" style={{ color: "rgba(208,194,213,0.6)" }}>
          © 2024 Deuman Solutions. Engineering the Future.
        </p>
      </div>
    </footer>
  );
};
