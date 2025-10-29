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
      <main className="pt-24 bg-black min-h-screen text-white">
  <Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/sobre-mi" element={<SobreMi />} />
    <Route path="/portafolio" element={<Portafolio />} />
    <Route path="/contacto" element={<Contacto />} />
  </Routes>
</main>
<audio id="bg-music" src="/audio/masterDice.mp3" loop controls></audio>

    </>
  );
}
