import React, { useRef, useState, useEffect, forwardRef } from "react";

const MusicPlayer = forwardRef(({ cover, title, artist, src, onPlay }, ref) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
      if (onPlay) onPlay(audioRef.current); // Notificar al padre
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const updateProgress = () => {
    if (!audioRef.current) return;
    const percent = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgressPercent(percent || 0);
  };

  const handleClickProgress = (e) => {
    const width = e.currentTarget.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    if (audioRef.current) audioRef.current.currentTime = (clickX / width) * audioRef.current.duration;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, []);

  return (
    <div className="relative w-80 h-[550px] flex justify-center items-center glow-animation rounded-xl">
      <div className="relative z-10 bg-[#121212] rounded-lg shadow-lg w-full h-full flex flex-col items-center p-6">
        <div className="w-72 h-72 mb-4 mt-4 rounded overflow-hidden">
          <img src={cover} alt={title} className="w-full h-full object-cover" />
        </div>

        <div className="text-center mb-4 mt-4">
          <p className="text-white font-bold text-lg">{title}</p>
          <p className="text-gray-400 text-sm">{artist}</p>
        </div>

        <div
          className="w-full h-1 bg-gray-700 rounded cursor-pointer mb-4"
          onClick={handleClickProgress}
        >
          <div
            className="h-1 bg-green-500 rounded"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        <div className="flex items-center gap-6 mb-5">
          <button className="text-white text-2xl hover:text-green-500">⏮</button>
          <button
            className="text-white text-3xl bg-green-500 rounded-full w-12 h-12 flex items-center justify-center hover:bg-green-600"
            onClick={togglePlay}
          >
            {isPlaying ? "❚❚" : "►"}
          </button>
          <button className="text-white text-2xl hover:text-green-500">⏭</button>
        </div>

        <audio ref={audioRef} src={src}></audio>
      </div>
    </div>
  );
});

export default MusicPlayer;
