import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 backdrop-blur-xl"
      style={{
        background: "rgba(19, 19, 22, 0.8)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="flex justify-between items-center px-4 md:px-16 py-4 max-w-[1280px] mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logoDS.png"
            alt="Deuman Solutions"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span
            className="text-[20px] font-bold tracking-tighter"
            style={{ color: "#e0b6ff" }}
          >
            Deuman Solutions
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {[
            { label: "Services", section: "services" },
            { label: "Projects", section: "projects" },
            { label: "Contact", section: "contact" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.section)}
              className="text-base font-medium transition-colors"
              style={{ color: "#d0c2d5" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#e0b6ff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#d0c2d5")
              }
            >
              {item.label}
            </button>
          ))}
          <button className="primary-gradient-btn px-6 py-2 rounded-full text-white text-base font-medium scale-95 active:scale-90 transition-transform">
            Get Started
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          style={{ color: "#e0b6ff" }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-4 pb-4 flex flex-col gap-4"
          style={{ background: "rgba(19,19,22,0.95)" }}
        >
          {[
            { label: "Services", section: "services" },
            { label: "Projects", section: "projects" },
            { label: "Contact", section: "contact" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.section)}
              className="text-base font-medium text-left"
              style={{ color: "#d0c2d5" }}
            >
              {item.label}
            </button>
          ))}
          <button className="primary-gradient-btn px-6 py-2 rounded-full text-white text-base font-medium w-fit">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};
