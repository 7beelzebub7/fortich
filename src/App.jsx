import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import SobreMi from "./pages/SobreMi";
import Portafolio from "./pages/Portafolio";
import Contacto from "./pages/Contacto";

export default function App() {
  return (
    <>
       
      <Navbar />
      <main className="pt-24 min-h-screen text-white bg-transparent">
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
