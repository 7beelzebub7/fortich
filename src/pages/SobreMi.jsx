import React from "react";

export default function SobreMi() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 py-20 text-white relative">

      {/* CONTENEDOR PRINCIPAL */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">

        {/* FOTO – EN MÓVIL VA PRIMERO */}
        <div className="flex justify-center order-1 md:order-2 relative">
          <img
            src="./images/sm03.jpg"
            alt="Foto del cliente"
            className="
              w-full 
              h-[480px] 
              md:h-[620px]
              object-cover 
              object-top
              rounded-2xl 
              shadow-xl 
              z-0
            "
          />
        </div>

        {/* TEXTO – EN PC VA A LA IZQUIERDA */}
        <div
          className="
            flex flex-col gap-4 
            text-center md:text-left 
            order-2 md:order-1 
            relative
            z-10
            md:-mt-20
          "
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#C39A4A] drop-shadow-xl">
            ¿Quién es 4tich?
          </h2>

          <p className="text-lg leading-relaxed text-gray-200 drop-shadow-lg">
            Fortich o "4tich" es un artista y creador con una visión única, enfocado en
            transmitir emociones reales a través de su contenido. Su estilo combina
            autenticidad, creatividad y una estética moderna que lo diferencia en cada
            proyecto que realiza. Ya sea en música, fotografía o producción visual,
            4tich busca conectar con su audiencia de una manera honesta y profunda.
          </p>
        </div>

      </div>

    </div>
  );
}
