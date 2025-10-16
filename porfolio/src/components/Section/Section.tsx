import React from "react";
import "./Section.css";

interface SectionProps {
  heading: string;
  text: string;
  img: string;
}

const Section: React.FC<SectionProps> = ({ heading, text, img }) => {
  return (
    <section>
      <div className="text-container">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
      <div className="img-container">
        <img src={img} alt="section" />
      </div>
    </section>
  );
};

export default Section;
