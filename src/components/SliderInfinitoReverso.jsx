import React, { useState, useEffect } from "react";
import "./slider.css";

export default function SliderInfinitoReverso() {
  const images = [
    "./images/slider13.webp",
    "./images/slider14.webp",
    "./images/slider05.webp",
    "./images/slider08.webp",
  ];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setLoaded(true);
        }
      };
    });
  }, []);

  return (
    <div className="slider-container">
      <div className={`slider-track ${loaded ? "reverse" : ""}`}>
        {[...images, ...images].map((src, i) => (
          <div className="slide" key={i}>
            <img src={src} />
          </div>
        ))}
      </div>
    </div>
  );
}
