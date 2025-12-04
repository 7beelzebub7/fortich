import React from "react";
import { Lens } from "../components/Lens";

export default function Galeria() {
  const images = [
    "./images/slider01.webp",
    "./images/slider02.webp",
    "./images/slider03.webp",
    "./images/slider04.webp",
    "./images/slider05.webp",
    "./images/slider06.webp",
    "./images/slider12.webp",
    "./images/slider07.webp",
    "./images/slider13.webp",
    "./images/slider15.webp",
  ];

  return (
    <div className="w-full flex flex-col gap-6 px-4 py-8 text-white">

      {/* █ Fila 1 → 2 IMÁGENES */}
      <div className="flex gap-4">
        <div className="flex-1 h-72 rounded-xl overflow-hidden">
          <Lens zoomFactor={1.8} lensSize={180}>
            <img
              src={images[0]}
              className="w-full h-full object-cover"
              style={{ transform: "translateY(-15%)" }}
            />
          </Lens>
        </div>

        <div className="flex-1 h-72 rounded-xl overflow-hidden">
          <Lens zoomFactor={1.8} lensSize={180}>
            <img
              src={images[1]}
              className="w-full h-full object-cover"
              style={{ transform: "translateY(-15%)" }}
            />
          </Lens>
        </div>
      </div>

      {/* █ Fila 2 → 4 IMÁGENES */}
      <div className="flex gap-4">
        {images.slice(2, 6).map((src, i) => (
          <div key={i} className="flex-1 h-[260px] rounded-xl overflow-hidden">
            <Lens zoomFactor={1.8} lensSize={180}>
              <img
                src={src}
                className="w-full h-full object-cover"
                style={{ transform: "translateY(-15%)" }}
              />
            </Lens>
          </div>
        ))}
      </div>

      {/* █ Fila 3 → 3 IMÁGENES */}
      <div className="flex gap-4">
        {images.slice(6, 9).map((src, i) => (
          <div key={i} className="flex-1 h-72 rounded-xl overflow-hidden">
            <Lens zoomFactor={1.8} lensSize={180}>
              <img
                src={src}
                className="w-full h-full object-cover"
                style={{ transform: "translateY(-15%)" }}
              />
            </Lens>
          </div>
        ))}
      </div>

      {/* █ Fila 4 → 1 IMAGEN GRANDE */}
      <div className="flex w-full">
        <div className="w-full h-80 rounded-xl overflow-hidden">
          <Lens zoomFactor={1.8} lensSize={220}>
            <img
              src={images[9]}
              className="w-full h-full object-cover"
              style={{ transform: "translateY(-6%)" }}
            />
          </Lens>
        </div>
      </div>

    </div>
  );
}
