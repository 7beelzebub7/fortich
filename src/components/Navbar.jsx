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
    <nav className="fixed top-0 left-0 w-full bg-transparent flex justify-center items-center py-1 z-50 pointer-events-auto">
      <div className="flex items-center justify-between w-full max-w-5xl px-8 relative z-50">
        
        {/* Botón móvil */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Botones izquierda */}
        <div className="hidden md:flex gap-8 ml-50">
          {navItems.slice(0, 2).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-lg font-semibold transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-[#FCC10A]"
                  : "text-white"
              } hover:text-[#FCC10A]`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* LOGO + VISUALIZADOR */}
        <div className="relative w-20 h-20 flex items-center justify-center">

          {/* Logo encima (debe estar primero) */}
          <img
            src="./fortichLogo2.svg"
            alt="Logo"
            className="w-20 h-20 relative z-10"
          />

          {/* Visualizador debajo del logo, tomando su tamaño */}
          <div className="absolute inset-0 pointer-events-none">
     
          </div>

        </div>

        {/* Botones derecha */}
        <div className="hidden md:flex gap-8 mr-50">
          {navItems.slice(2).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-lg font-semibold transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-[#FCC10A]"
                  : "text-white"
              } hover:text-[#FCC10A]`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black/80 backdrop-blur-md flex flex-col items-center gap-6 py-6 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`text-lg font-semibold transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-[#FCC10A]"
                  : "text-white"
              } hover:text-[#FCC10A]`}
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
