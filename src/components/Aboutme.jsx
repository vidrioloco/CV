import React from "react";
import "/src/index.css";

const Aboutme = () => {
    return (
        <section id="AboutMe" className='pt-60 pb-20 max-w-[1400px] mx-auto px-5'>
            <div className='projects-content animate-lightning-border bg-gray-900 w-full flex flex-wrap lg:flex-row flex-col border rounded-md border-white p-10 lg:p-10 md:p-5 sm:p-3'>
                <div className='flex justify-start w-full lg:w-1/2'>
                    <img src="/img/coding.gif" alt="project1" className='img-projects coding-gif-pengu w-full lg:w-[90%] md:w-[80%] sm:w-full' />
                </div>
                <div className='flex flex-col justify-center w-full lg:w-1/2'>
                    <p className='about-me neon-full-unhovered title-projects text-white text-2xl font-bold'>Sobre Mi</p>
                    <p className='info-projects text-white font-mono text-xss pt-5 max-w-[950px] text-wrap '>
                        Soy un desarrollador web en formación, cursando un Grado Superior en Desarrollo de Aplicaciones Web.
                         Me apasiona la tecnología y la programación, y actualmente estoy ampliando mis 
                         conocimientos en tecnologías como React y Tailwind, con el objetivo de fortalecer mis 
                         habilidades en desarrollo frontend. Me caracterizo por ser una persona proactiva, responsable y con una gran motivación por seguir aprendiendo y mejorando profesionalmente.
                    </p>
                    <p className='info-projects text-white font-mono text-xss pt-5 max-w-[950px] text-wrap line-clamp-8 lg:line-clamp-8'>
                        En un futuro me gustaria aprender tegnologias como PHP, Node.js  para
                        convertirme en un desarrollador full-stack.
                        Además, me esfuerzo para la resolucion de problemas y crear soluciones eficientes,
                        escribir código limpio y mantenible, siempre estoy buscando mejorar mis
                        habilidades y adquirir nuevos conocimientos.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Aboutme;