import React, { useEffect, useRef } from "react";

const AudioVisualizer = () => {
  const canvasRef = useRef(null);
  const audioCtxRef = useRef(null);
  const sourceRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let analyser, dataArray, audio;

    const circles = [
      { color: "#a127bb", radius: 25, angleOffset: 0, direction: 4 },
      { color: "#ffd939", radius: 30, angleOffset: 0, direction: 2 },
      { color: "#029302", radius: 40, angleOffset: 0, direction: 1 },
    ];

    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const unlockAudioContext = (audioCtx) => {
      if (audioCtx.state !== "suspended") return;
      const unlock = () => {
        audioCtx.resume().then(() => {
          window.removeEventListener("click", unlock);
          window.removeEventListener("touchstart", unlock);
        });
      };
      window.addEventListener("click", unlock);
      window.addEventListener("touchstart", unlock);
    };

    const initAudio = async () => {
      audio = document.getElementById("bg-music");
      if (!audio) {
        console.warn("No se encontró el elemento de audio.");
        return;
      }

      // Intentar reproducir directamente
      try {
        await audio.play();
      } catch {
        console.warn("Esperando interacción del usuario para iniciar el audio...");
      }

      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
        sourceRef.current = audioCtxRef.current.createMediaElementSource(audio);
      }

      const audioContext = audioCtxRef.current;
      unlockAudioContext(audioContext);

      const source = sourceRef.current;
      analyser = audioContext.createAnalyser();
      source.connect(analyser);
      analyser.connect(audioContext.destination);
      analyser.fftSize = 256;
      dataArray = new Uint8Array(analyser.frequencyBinCount);

      const render = () => {
        requestAnimationFrame(render);
        analyser.getByteFrequencyData(dataArray);

        const w = canvas.width;
        const h = canvas.height;
        const cx = w / 2;
        const cy = h / 2;

        ctx.clearRect(0, 0, w, h);

        const avg =
          dataArray.reduce((a, b) => a + b, 0) / dataArray.length / 255;

        circles.forEach((circle) => {
          const angleStep = (Math.PI * 2) / dataArray.length;
          const skip = 10;

          ctx.beginPath();
          for (let i = 0; i < dataArray.length - skip; i++) {
            const value = dataArray[i] / 255;

            const waveAmplitude =
              avg < 0.02 ? -circle.radius * 0.9 : value * 50 * avg;

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
          ctx.shadowBlur = 25;
          ctx.stroke();

          circle.angleOffset += circle.direction * (0.006 + avg * 0.01);
        });
      };

      render();
    };

    initAudio();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.suspend();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "250px",
        height: "250px",
        background: "transparent",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};

export default AudioVisualizer;
