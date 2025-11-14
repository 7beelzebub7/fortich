import React from "react";

export default function SobreMi() {
  return (
    <div className="relative flex justify-center items-center h-screen bg-transparent">
      {/* Imagen derecha */}
      <div className="absolute top-20 right-[3%] w-[550px] h-[750px] rounded-2xl overflow-hidden shadow-lg z-0">
        <img
          className="w-full h-full object-cover opacity-90 transition duration-500 hover:opacity-100"
          src="./images/sm02.jpg"
          alt="Sobre mí derecha"
        />
      </div>

      {/* Imagen izquierda */}
      <div className="absolute top-109 left-[3%] w-[550px] h-[750px] rounded-2xl overflow-hidden shadow-lg z-0">
        <img
          className="w-full h-full object-cover opacity-90 transition duration-500 hover:opacity-100"
          src="./images/sm03.jpg"
          alt="Sobre mí izquierda"
        />
      </div>

      {/* Texto central superpuesto */}
      <div className="relative z-10 text-center max-w-xl px-6 pt-150">
        <p className="text-white text-2xl font-medium leading-relaxed drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] backdrop-blur-sm bg-[rgba(0,0,0,0.25)] rounded-2xl p-6">
          Soy un creador audiovisual apasionado por el poder de la imagen y el
          sonido. Cada proyecto que realizo busca transmitir intensidad,
          emoción y autenticidad. Desde el lente hasta la edición, busco siempre
          capturar algo más que solo una escena: busco capturar una sensación.
        </p>
      </div>
    </div>
  );
}
