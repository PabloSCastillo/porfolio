import React, { useEffect, useRef, useState } from "react";
import track1 from "../../assets/track2.wav";

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = false;
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // autoplay blocked with sound
          setAutoplayBlocked(true);
          setIsPlaying(false);
          // play muted so there is audio context
          audio.muted = true;
          audio.play().catch(() => {});

          const resumeOnInteraction = () => {
            audio.muted = false;
            audio.play().catch(() => {});
            document.removeEventListener("click", resumeOnInteraction);
            document.removeEventListener("keydown", resumeOnInteraction);
            setAutoplayBlocked(false);
            setIsPlaying(true);
          };

          document.addEventListener("click", resumeOnInteraction);
          document.addEventListener("keydown", resumeOnInteraction);
        });
    }
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.muted = false;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={track1} loop hidden autoPlay />

      <button
        aria-label={isPlaying ? "Pause background audio" : "Play background audio"}
        onClick={togglePlay}
        className="fixed bottom-4 right-4 z-80 bg-white text-black border border-black rounded-full p-3 shadow-md"
        title={isPlaying ? "Pause" : "Play"}
        style={{ pointerEvents: 'auto' }}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 3v18l15-9L5 3z" />
          </svg>
        )}
      </button>
    </>
  );
};

export default AudioPlayer;
