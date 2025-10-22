import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="w-full px-4 py-3 bg-black fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo o texto */}
        <div className="text-white font-hegarty text-4xl tracking-widest">

          <ul className="hidden lg:flex items-center gap-10 text-white font-hegarty text-xl">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="hover:text-gray-400 transition-colors duration-200 font-hegarty"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Botón menú móvil */}
        <button
          className="lg:hidden text-white focus:outline-none z-50"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            // Icono de cerrar (X)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Icono hamburguesa
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Menú Desktop */}
        <div className="text-white font-hegarty text-4xl tracking-widest">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="#ffffff"
            stroke="#ffffff"

            enable-background="new 0 0 32 32"
            xmlSpace="preserve"

            width="32"
            height="32"
          >
            <g>
              <polygon
                fill="none"
                stroke="#FFFFFF"

                stroke-width="2"
                stroke-miterlimit="10"

                points="5,21 11,21 21,11 21,5 5,5"
              />
              <polygon
                fill="none"
                stroke="#FFFFFF"
                stroke-width="2"
                stroke-miterlimit="10"
                points="11,27 27,27 27,11 21,11 11,21"
              />
              <path
                fill="none"
                stroke="#FFFFFF"
                stroke-width="2"

                stroke-linejoin="round"

                stroke-miterlimit="10"
                d="M8,16c4.3,0,6-2.4,6-6"
              />
              <path
                fill="none"
                stroke="#FFFFFF"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                d="M9,12c0,1.7,2.2,3,5,3"
              />
              <line
                fill="none"
                stroke="#FFFFFF"
                stroke-width="2"
                stroke-miterlimit="10"
                x1="8" y1="10" x2="16" y2="10"
              />
              <line
                fill="none"
                stroke="#FFFFFF"
                stroke-width="2"
                stroke-miterlimit="10"
                x1="12" y1="10" x2="12" y2="8"
              />
              <polyline
                fill="none"
                stroke="#FFFFFF"
                stroke-width="2"
                stroke-miterlimit="10"
                points="22,24 22,23 20,17 20,17 18,23 18,24"
              />
              <line
                fill="none"
                stroke="#FFFFFF"
                stroke-width="2"
                stroke-miterlimit="10"
                x1="18.4" y1="22" x2="21.6" y2="22"
              />
            </g>
          </svg>
        </div>

      </div>

      {/* Menú Mobile Fullscreen */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white font-hegarty text-3xl space-y-10 transition-all duration-300">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="hover:text-gray-400 transition-colors duration-200 font-hegarty"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

    </nav>
  );
};

export default Nav;
