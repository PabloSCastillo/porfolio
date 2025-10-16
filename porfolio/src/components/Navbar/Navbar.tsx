import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="nav">
      <div className="left">
        <h1>LOGO</h1>
      </div>
      <div className="right">
        <div className="links">
          <a href="#" className="link">some</a>
          <a href="#" className="link">links</a>
          <a href="#" className="link">here</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
