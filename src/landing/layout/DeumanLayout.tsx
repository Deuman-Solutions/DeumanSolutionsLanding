import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const DeumanLayout = () => {
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ background: "#131316", color: "#e4e1e6" }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
