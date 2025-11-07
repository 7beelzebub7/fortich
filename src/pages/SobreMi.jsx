import React from "react";

export default function SobreMi() {
  return (
    <>  
      <div className="relative ml-6 flex gap-[20px] flex-col">
        {/* Cajas del fondo */}
        <div className="absolute inset-0 z-0 flex gap-[20px] flex-col">
          <div className="w-[40%] h-40 bg-[#470147] rounded-4xl"></div>
          <div className="w-[80%] h-40 bg-[#FCC10A] rounded-4xl"></div>
          <div className="w-[60%] h-40 bg-[#470147] rounded-4xl"></div>
          <div className="w-[50%] h-40 bg-[#470147] rounded-4xl"></div>
          <div className="w-[70%] h-40 bg-[#FCC10A] rounded-4xl"></div>
          <div className="w-[40%] h-40 bg-[#470147] rounded-4xl"></div>
        </div>
        
        {/* Cajas de línea encima */}
        <div className="relative z-10 flex gap-[20px] flex-col">
          <div className="w-[40%] h-40 border-4 border-[#470147] rounded-4xl"></div>
          <div className="w-[80%] h-40 border-4 border-[#FCC10A] rounded-4xl"></div>
          <div className="w-[60%] h-40 border-4 border-[#470147] rounded-4xl"></div>
          <div className="w-[50%] h-40 border-4 border-[#470147] rounded-4xl"></div>
          <div className="w-[70%] h-40 border-4 border-[#FCC10A] rounded-4xl"></div>
          <div className="w-[40%] h-40 border-4 border-[#470147] rounded-4xl"></div>
        </div>
        <div className=" absolute z-[999] text-white">
            <h1 className="pt-3 font-bold text-4xl ">¿QUIÉN ES FORTICH?</h1>
            <p className="pt-10">fortich es un artista emergente, una promesa de la música urbana</p>
        </div>
        {/* Imagen centrada */}
        <div className="absolute inset-0 z-5 flex items-center justify-center">
          <img 
            src="images/sm01.png" 
            alt="Sobre mí" 
            className="max-w-[50%] h-auto object-contain"
          />
        </div>
      </div>
    </>
  );
}

