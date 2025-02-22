import React from 'react';
import '/src/index.css';

const Header = () => {
    return (
        <header className="w-full flex justify-center">
            <nav  className="w-full max-w-[550px] mx-auto fixed" id="Inicio">
                <ul className="nav-menu w-full h-20 font-mono font-bold flex justify-between text-white p-5 text-lg">
                    <li className="neon-full-yellow flex items-center justify-center font-bold">
                        <a href="#start" className="whitespace-nowrap">Inicio</a>
                    </li>
                    <li className="flex items-center justify-center neon-full-yellow font-bold">
                        <a href="#Proyectos" className="whitespace-nowrap">Proyectos</a>
                    </li>
                    <li className="flex items-center justify-center neon-full-yellow font-bold">
                        <a href="#AboutMe" className="whitespace-nowrap">Sobre mí</a>
                    </li>
                    <li className="flex items-center justify-center neon-full-yellow font-bold">
                        <a href="#Contact" className="whitespace-nowrap">Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
