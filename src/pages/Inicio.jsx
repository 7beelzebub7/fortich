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

        {/* CONTENEDOR PRINCIPAL RESPONSIVE */}
        <div className="flex flex-col md:flex-row items-center md:items-start">

          {/* IMAGEN ARRIBA EN MÓVIL - IZQUIERDA EN ESCRITORIO */}
          <div className="w-full md:w-auto flex justify-center md:block mb-10 md:mb-0 md:ml-50 md:w-150">
            <img 
              src="./images/portadaDice.webp" 
              alt="" 
              className="w-64 md:w-auto"
            />
          </div>

          {/* TEXTO - CENTRADO EN MÓVIL */}
          <div className="pl-0 md:pl-5 text-center md:text-left">

            <p className="text-5xl md:text-8xl">¿Quieres</p>
            <p className="text-3xl md:text-5xl">Escuchar mi</p>
            <p className="text-5xl md:text-7xl">nuevo</p>
            <p className="text-5xl md:text-7xl">Lanzamiento?</p>

            <p className="pt-8 md:pt-15 text-lg md:text-base">
              Da click aquí si realmente tienes ganas de escuchar
            </p>

            {/* BOTÓN RESPONSIVE */}
            <button
              onClick={handleClick}
              className="mt-6 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg transition-all duration-300 active:scale-95"
            >
              ESCUCHAR
            </button>

            {/* MENSAJE QUE CAMBIA */}
            {mensajeActual && (
              <p className="mt-5 max-w-md mx-auto md:mx-0 text-lg md:text-xl text-indigo-300">
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
