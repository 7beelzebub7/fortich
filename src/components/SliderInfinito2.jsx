import React, { useState, useEffect } from "react";
import "./slider.css";

export default function SliderInfinito() {
  const images = [
    "./images/slider15.webp",
    "./images/slider16.webp",
    "./images/slider17.webp",
    "./images/slider18.webp",
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
      <div className={`slider-track ${loaded ? "animate" : ""}`}>
        {[...images, ...images].map((src, i) => (
          <div className="slide" key={i}>
            <img src={src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
