import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navItems = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
    ];
    return (
        <nav className="w-full  px-4 py-2  bg-white bg-opacity-90 sticky flex shadow backdrop-blur-lg ">
            <div className="container flex flex-wrap items-center justify-between mx-auto ">
                <div className="mr-4 block py-1.5 text-base text-slate-800 font-semibold">
                    Pablo Castillo
                </div>
                <div className=" hidden lg:block">
                    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row md:flex-col  lg:items-center lg:gap-6 sm:bg-green-200">
                        {navItems.map((item) => (
                            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600 hover:bg-gray-100 rounded"
                                key={item.path}
                            >
                                <Link to={item.path}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <button className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                    type="button"
                    onClick={toggleMenu}
                >
                    {menuOpen? <menu>dsadsadsa</menu>:<div></div>}
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </span>
                </button>
            </div>
        </nav>
    );
};

export default Nav;