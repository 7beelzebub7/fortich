import React, { useEffect, useRef, useState } from "react";

const AudioVisualizer = () => {
  const canvasRef = useRef(null);
  const audioCtxRef = useRef(null);
  const sourceRef = useRef(null);
  const analyserRef = useRef(null);
  const roRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCanvasStyle = () => {
    if (isMobile) {
      return {
        position: "fixed",
        top: "19px",
        right: "10px",
        width: "120px",
        height: "120px",
        pointerEvents: "none",
        zIndex: 0,
      };
    } else {
      return {
        position: "fixed",
        top: "8px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "400px",
        height: "200px",
        pointerEvents: "none",
        zIndex: 0,
      };
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let rafId = null;
    let dataArray = null;

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

    const resizeCanvasToParent = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    if (window.ResizeObserver) {
      roRef.current = new ResizeObserver(resizeCanvasToParent);
      roRef.current.observe(canvas.parentElement);
    }
    resizeCanvasToParent();

    const initAudio = async () => {
      let audioEl = document.getElementById("bg-music");
      if (!audioEl) {
        audioEl = document.createElement("audio");
        audioEl.id = "bg-music";
        audioEl.src = "./audio/parDeCocos.mp3"; // ruta correcta
        audioEl.loop = true;
        document.body.appendChild(audioEl);
      }

      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
        sourceRef.current = audioCtxRef.current.createMediaElementSource(audioEl);
      }

      if (!analyserRef.current) {
        analyserRef.current = audioCtxRef.current.createAnalyser();
        analyserRef.current.fftSize = 256;
      }

      const analyser = analyserRef.current;
      dataArray = new Uint8Array(analyser.frequencyBinCount);

      sourceRef.current.connect(analyser);
      analyser.connect(audioCtxRef.current.destination);

      const render = () => {
        rafId = requestAnimationFrame(render);
        analyser.getByteFrequencyData(dataArray);

        const w = canvas.width / (window.devicePixelRatio || 1);
        const h = canvas.height / (window.devicePixelRatio || 1);

        const cx = w / 2;
        const cy = h / 2;

        ctx.clearRect(0, 0, w, h);

        const avg = dataArray.reduce((a, b) => a + b, 0) / dataArray.length / 255;

        circles.forEach((circle) => {
          const angleStep = (Math.PI * 2) / dataArray.length;
          const skip = 10;

          ctx.beginPath();

          for (let i = 0; i < dataArray.length - skip; i++) {
            const value = dataArray[i] / 255;
            const waveAmplitude = avg < 0.02 ? -circle.radius * 0.9 : value * 90 * avg;

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

      // Esperar primer click para desbloquear audio
      const unlockAudio = () => {
        audioCtxRef.current.resume().then(() => audioEl.play());
        window.removeEventListener("click", unlockAudio);
      };
      window.addEventListener("click", unlockAudio);

      render();
    };

    initAudio();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (roRef.current) roRef.current.disconnect();
      if (audioCtxRef.current) audioCtxRef.current.suspend();
    };
  }, []);

  return <canvas ref={canvasRef} style={getCanvasStyle()} />;
};

export default AudioVisualizer;
