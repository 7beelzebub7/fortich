import React, { useRef, useState } from "react";
import AudioVisualizer from "../components/AudioVisualizer.jsx";

export default function Inicio() {
  const audioRef = useRef(null);

  const mensajes = [
    "Sé que tienes ganas de oírlo… sígueme en YouTube como FORTICHMC para estar atento al lanzamiento.",
    "Wow! Más despacio… aún no se lanza pero debes estar atento para cuando llegue la emoción.",
    "Tranquilo crack… pronto podrás escucharlo, solo mantente al tanto.",
    "Esa emoción es real… pero el lanzamiento también lo será muy pronto, no te lo pierdas.",
    "Ya casi… sigue a FORTICHMC en YouTube y no te quedes por fuera cuando salga.",
    "Eyyy, buena energía… pronto estará listo para que lo disfrutes."
  ];

  const [mensajeActual, setMensajeActual] = useState("");

  const handleClick = () => {
    const random = Math.floor(Math.random() * mensajes.length);
    setMensajeActual(mensajes[random]);
  };

  return (
    <>
      <div>
        
        <div className="flex">
          <div className="ml-50 w-150">
            <img src="./images/portadaDice.webp" alt="" />
          </div>

          <div className="pl-5">
            <p className="text-8xl">¿Quieres</p>
            <p className="text-5xl">Escuchar mi</p>
            <p className="text-7xl">nuevo</p>
            <p className="text-7xl">Lanzamiento?</p>

            <p className="pt-15">
              Da click aquí si realmente tienes ganas de escuchar
            </p>

            {/* BOTÓN BONITO */}
            <button
              onClick={handleClick}
              className="mt-5 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg transition-all duration-300 active:scale-95"
            >
              ESCUCHAR
            </button>

            {/* MENSAJE QUE CAMBIA */}
            {mensajeActual && (
              <p className="mt-5 max-w-md text-xl text-indigo-300">
                {mensajeActual}
              </p>
            )}
          </div>
        </div>

        <div></div>
        <div></div>
        <div></div>
      </div>
      
    </>
  );
}
