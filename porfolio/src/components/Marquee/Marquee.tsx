import React from "react";
import "./Marquee.css";

interface MarqueeProps {
    text: string;
    speed?: number; // velocidad en segundos
}

const Marquee: React.FC<MarqueeProps> = ({ text, speed = 20 }) => {
    return (
        <div className="fixed top-0 left-0 w-full overflow-hidden whitespace-nowrap bg-white z-60">
            <div
                className="animate-marquee"
                style={{ animationDuration: `${speed}s` }}
            >
                {/* Duplicamos el texto para que el marquee sea continuo */}
                <span className="mx-8 text-2xl text-black bg-white font-medium font-bartle">{text}</span>
                <span className="mx-8 text-2xl text-black bg-white font-medium font-bartle">{text}</span>
            </div>
        </div>
    );
};

export default Marquee;
