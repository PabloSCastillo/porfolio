import React from "react";
import "./Marquee.css"; // importamos animación CSS

interface MarqueeProps {
  text: string;
  speed?: number; // velocidad en segundos
}

const Marquee: React.FC<MarqueeProps> = ({ text, speed = 20 }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-white-600 text-white py-2">
      <div
        className="inline-block animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        <span className="mx-8 text-lg text-black font-medium">{text}</span>
      </div>
    </div>
  );
};

export default Marquee;
