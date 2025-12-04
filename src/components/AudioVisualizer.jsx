import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const AudioVisualizer = ({ audioEl }) => {
  const canvasRef = useRef(null);
  const audioCtxRef = useRef(null);
  const sourceRef = useRef(null);
  const analyserRef = useRef(null);

  const resizeCanvas = (canvas) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  useEffect(() => {
    if (!audioEl) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    resizeCanvas(canvas);
    window.addEventListener("resize", () => resizeCanvas(canvas));

    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (!sourceRef.current) {
      sourceRef.current = audioCtxRef.current.createMediaElementSource(audioEl);
    }

    if (!analyserRef.current) {
      analyserRef.current = audioCtxRef.current.createAnalyser();
      analyserRef.current.fftSize = 256;
    }

    const analyser = analyserRef.current;
    const dataArray = new Uint8Array(analyser.frequencyBinCount);
    sourceRef.current.connect(analyser);
    analyser.connect(audioCtxRef.current.destination);

    const circles = [
      { color: "#a127bb", radius: 20, angleOffset: 0, direction: 4 },
      { color: "#ffd939", radius: 40, angleOffset: 0, direction: 2 },
      { color: "#029302", radius: 88, angleOffset: 0, direction: 1 },
      { color: "#a127bb", radius: 90, angleOffset: 0, direction: 4 },
      { color: "#ffd939", radius: 97, angleOffset: 0, direction: 2 },
      { color: "#029302", radius: 320, angleOffset: 0, direction: 1 },
      { color: "#a127bb", radius: 115, angleOffset: 0, direction: 4 },
      { color: "#ffd939", radius: 175, angleOffset: 0, direction: 2 },
      { color: "#029302", radius: 250, angleOffset: 0, direction: 1 },
      { color: "#a127bb", radius: 210, angleOffset: 0, direction: 4 },
      { color: "#ffd939", radius: 300, angleOffset: 0, direction: 2 },
      { color: "#029302", radius: 65, angleOffset: 0, direction: 1 },
    ];

    let rafId;

    const render = () => {
      rafId = requestAnimationFrame(render);
      analyser.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      const avg = dataArray.reduce((a, b) => a + b, 0) / dataArray.length / 255;

      circles.forEach((circle) => {
        const angleStep = (Math.PI * 2) / dataArray.length;
        ctx.beginPath();
        for (let i = 0; i < dataArray.length; i++) {
          const value = dataArray[i] / 255;
          const waveAmplitude = avg < 0.02 ? -circle.radius * 0.9 : value * 150 * avg;
          const angle = i * angleStep + circle.angleOffset;
          const r = circle.radius + waveAmplitude;
          const x = cx + Math.cos(angle) * r;
          const y = cy + Math.sin(angle) * r;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = circle.color;
        ctx.lineWidth = 2;
        ctx.shadowColor = circle.color;
        ctx.shadowBlur = 20;
        ctx.stroke();
        circle.angleOffset += circle.direction * (0.004 + avg * 0.01);
      });
    };

    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }

    render();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (audioCtxRef.current) audioCtxRef.current.suspend();
      window.removeEventListener("resize", () => resizeCanvas(canvas));
    };
  }, [audioEl]);

  return createPortal(
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: -1, // al fondo
      }}
    />,
    document.body
  );
};

export default AudioVisualizer;
