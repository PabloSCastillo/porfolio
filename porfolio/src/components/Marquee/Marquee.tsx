import React from "react";
import "./Marquee.css";

interface MarqueeProps {
    text: string;
    speed?: number; // velocidad en segundos
}

const Marquee: React.FC<MarqueeProps> = ({ text, speed = 20 }) => {
    return (
        <div className="overflow-hidden whitespace-nowrap bg-black">
            <div
                className="animate-marquee"
                style={{ animationDuration: `${speed}s` }}
            >
                {/* Duplicamos el texto para que el marquee sea continuo */}
                <span className="mx-8 text-4xl text-white bg-black font-medium font-bartle">{text}</span>
                <span className="mx-8 text-4xl text-black font-medium font-bartle">{text}</span>
            </div>
        </div>
    );
};

export default Marquee;
