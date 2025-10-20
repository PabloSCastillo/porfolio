import React, { useEffect, useState } from "react";
import "./Preloader.css"; // 👈 Importa el CSS

const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        setTimeout(() => setFadeOut(true), 200); // activa fade-out
        return 100;
      });
    }, 15);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-white z-50 ${
        fadeOut ? "preloader-fade-out" : ""
      }`}
    >
      <span
        className={`text-6xl font-bold text-black-600 ${
          fadeOut ? "preloader-fade-out" : "preloader-fade-in"
        }`}
      >
        {progress}%
      </span>
    </div>
  );
};

export default Preloader;
