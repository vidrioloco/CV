import React from "react";
import "/src/index.css";

const Aboutme = () => {
    return (
        <section id="AboutMe" className='pt-60 pb-20 max-w-[1400px] mx-auto px-5'>
            <div  className='projects-content animate-lightning-border bg-gray-900 w-full flex flex-wrap lg:flex-row flex-col border rounded-md border-white p-10 lg:p-10 md:p-5 sm:p-3'>
                <div className='flex justify-start w-full lg:w-1/2'>
                    <img src="/img/coding.gif" alt="project1" className='img-projects coding-gif-pengu w-full lg:w-[90%] md:w-[80%] sm:w-full' />
                </div>
                <div className='flex flex-col justify-center w-full lg:w-1/2'>
                    <p className='neon-full-unhovered title-projects text-white font-mono text-2xl font-bold'>Sobre Mi</p>
                    <p className='info-projects text-white font-mono text-xss pt-5 max-w-[950px] text-wrap line-clamp-8 lg:line-clamp-8'>
                        Soy un desarrollador web en formación. Me apasiona la tecnología y la programación,
                        actualmente estoy aprendiendo tecnologías como React, Tailwind, con el objetivo de
                        mejorar mis habilidades frontend. Me gusta trabajar en equipo y aprender de
                        los demás. Me considero una persona proactiva, responsable y con muchas ganas de
                        aprender. 
                    </p>
                    <p className='info-projects text-white font-mono text-xss pt-5 max-w-[950px] text-wrap line-clamp-8 lg:line-clamp-8'>
                        En un futuro me gustaria aprender tegnologias como PHP, Laravel y Node.js para
                        convertirme en un desarrollador full-stack.
                    </p>
                    <p className='info-projects text-white font-mono text-xss pt-5 max-w-[950px] text-wrap line-clamp-8 lg:line-clamp-8'>
                        Además, me ezfuerzo para la resolucion de problemas complejos y crear soluciones eficientes,
                        escribir código limpio y mantenible, y siempre estoy buscando mejorar mis
                        habilidades y aprender nuevas técnicas.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Aboutme;