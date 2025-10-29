import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import AudioVisualizer from "./AudioVisualizer";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Sobre mí", path: "/sobre-mi" },
    { name: "Portafolio", path: "/portafolio" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent flex justify-center items-center py-4 z-50 pointer-events-auto">
      <div className="flex items-center justify-between w-full max-w-5xl px-8 relative z-50">
        {/* 🔹 Menú móvil (botón) */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* 🔹 Botones izquierda (solo escritorio) */}
        <div className="hidden md:flex gap-8">
          {navItems.slice(0, 2).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-lg font-semibold transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-cyan-400"
                  : "text-white"
              } hover:text-cyan-300`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* 🔹 Logo + Visualizer */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <AudioVisualizer />
          </div>
          <img
            src="/fortichLogo.svg"
            alt="Logo"
            className="w-15 h-15 relative z-10"
          />
        </div>

        {/* 🔹 Botones derecha (solo escritorio) */}
        <div className="hidden md:flex gap-8">
          {navItems.slice(2).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-lg font-semibold transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-cyan-400"
                  : "text-white"
              } hover:text-cyan-300`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* 🔹 Menú desplegable móvil */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black/80 backdrop-blur-md flex flex-col items-center gap-6 py-6 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`text-lg font-semibold transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-cyan-400"
                  : "text-white"
              } hover:text-cyan-300`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
