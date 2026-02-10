import { useEffect, useRef } from "react";
import track1 from "../../assets/track2.wav";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = true;
    audio.play().catch(() => {});
  }, []);

  return <audio ref={audioRef} src={track1} loop hidden autoPlay muted />;
};

export default AudioPlayer;
