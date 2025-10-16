import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <span>
        All images taken from{" "}
        <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
          Unsplash
        </a>
      </span>
    </footer>
  );
};

export default Footer;
