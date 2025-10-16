import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Preloader.css";

const Preloader: React.FC = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!preloaderRef.current || !textContainerRef.current) return;

    const h1Elements = textContainerRef.current.querySelectorAll("h1");

    const tl = gsap.timeline();

    tl.to(textContainerRef.current, {
      duration: 0,
      visibility: "visible",
      ease: "Power3.easeOut",
    })
      .from(h1Elements, {
        duration: 1.5,
        delay: 1,
        y: 70,
        skewY: 10,
        stagger: 0.4,
        ease: "Power3.easeOut",
      })
      .to(h1Elements, {
        duration: 1.2,
        y: 70,
        skewY: -20,
        stagger: 0.2,
        ease: "Power3.easeOut",
      })
      .to(preloaderRef.current, {
        duration: 1.5,
        height: "0vh",
        ease: "Power3.easeOut",
      })
      .to(
        document.body,
        {
          overflow: "overlay",
        },
        "-=2"
      )
      .to(preloaderRef.current, {
        display: "none",
      });
  }, []);

  return (
    <div ref={preloaderRef} className="preloader">
      <div ref={textContainerRef} className="text-container">
        <h1>Texto 1</h1>
        <h1>Texto 2</h1>
        <h1>Texto 3</h1>
      </div>
    </div>
  );
};

export default Preloader;
