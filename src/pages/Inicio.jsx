import React, { useRef, useState } from "react";
import AudioVisualizer from "../components/AudioVisualizer.jsx";
import { Highlighter } from "../components/Highlighter";
import MusicPlayer from "../components/MusicPlayer.jsx";


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
          <div className="pl-0 pt-0 md:pl-5 md:pt-25 text-center md:text-left">

            <p className="text-5xl md:text-8xl">¿Quieres</p>
            <p className="text-3xl md:text-7xl italic">
              <Highlighter action="underline" color="#FF9800" animationDelay={1000}>
                Escuchar 
              </Highlighter>
            </p>
            <p className="text-5xl md:text-7xl">mi nuevo</p>
            <p className="text-5xl font-bold md:text-7xl">
              <Highlighter action="highlight" color="#5c0080" animationDelay={2000}>
                lanzamiento?
              </Highlighter>
            </p>

            <p className="pt-8 md:pt-15 md:text-xl text-lg">
              Da click aquí si realmente tienes ganas de escuchar
            </p>

            {/* BOTÓN RESPONSIVE */}
            <button
              onClick={handleClick}
              className="mt-6 px-8 py-3 bg-[#5c0080] hover:bg-[#C39A4A] font-bold rounded-xl shadow-lg transition-all duration-100 active:scale-95 md:mt-15"
            >
              ESCUCHAR
            </button>

            {/* MENSAJE QUE CAMBIA */}
            {mensajeActual && (
              <p className="mt-5 max-w-md mx-auto md:mx-0 text-lg md:text-xl md:pt-5 text-indigo-300">
                {mensajeActual}
              </p>
            )}
          </div>
        
        </div>

        {/* HYPERTEXT ANIMADO */}
        <div className="text-5xl italic text-center m-20">
          <p>Tambien puedes escuchar más canciones aquí </p>
          <p className="pt-5">&#8595;</p>
        </div>

        {/* MUSIC PLAYERS */}
        <div className="flex justify-center flex-wrap gap-25 pb-24">
          <MusicPlayer
            cover="./images/portadaCocos.png"
            title="PAR DE COCOS"
            artist="FORTICH, BELOW"
            src="./audio/parDeCocos.mp3"
          />
          <MusicPlayer
            cover="./images/portadaVyV.png"
            title="VA Y VEN"
            artist="CRALLY, FORTICH"
            src="./audio/vayven.mp3"
          />
        </div>
      </div>
    </>
  );
}
