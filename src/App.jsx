import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import SobreMi from "./pages/SobreMi";
import Portafolio from "./pages/Portafolio";
import Contacto from "./pages/Contacto";
import AudioVisualizer from "./components/AudioVisualizer";

export default function App() {
  return (
    <>
      {/* Visualizador al fondo, ocupa toda la pantalla */}
      <AudioVisualizer />


      {/* Navbar y contenido por encima */}
      <Navbar />
      <main className="pt-24 min-h-screen text-white bg-transparent relative z-10">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </>
  );
}
