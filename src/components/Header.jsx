import React from 'react';
import '/src/index.css';

const Header = () => {
    return (
        <header className="w-full flex justify-center">
            <nav className="nav-menu w-full max-w-[550px] px-5 mx-auto" id="Inicio">
                <ul className="w-full h-20 font-mono font-bold flex justify-between text-white p-5 text-1xl">
                    <li className="flex items-center justify-center neon-full font-bold">
                        <a href="#Inicio" className="whitespace-nowrap" aria-current="page">Inicio</a>
                    </li>
                    <li className="flex items-center justify-center neon-full font-bold">
                        <a href="#Proyectos" className="whitespace-nowrap" >Proyectos</a>
                    </li>
                    <li className="flex items-center justify-center neon-full font-bold">
                        <a href="#AboutMe" className="whitespace-nowrap">Sobre mí</a>
                    </li>
                    <li className="flex items-center justify-center neon-full font-bold">
                        <a href="#Contact" className="whitespace-nowrap">Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
