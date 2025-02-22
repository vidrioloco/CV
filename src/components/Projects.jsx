import React from 'react';
import '/src/index.css';


const Projects = () => {
    return (
        <section className='pt-100 pb-20 max-w-[1400px] mx-auto px-5' >
            <div className='pb-10 w-full'>
                <p className='title-projects-neon neon-full-unhovered text-white font-mono text-6xl pl-4' id='Proyectos'>Proyectos</p>
            </div>
            <div  className='projects-content bg-gray-900 w-full flex flex-wrap lg:flex-row flex-col border rounded-md border-white p-10 lg:p-10 md:p-5 sm:p-3 animate-lightning-border'>
                <div className='flex flex-col justify-center w-full lg:w-1/2 '>
                    <p className='title-projects text-white font-mono text-2xl font-bold'>Portafolio Web</p>
                    <p className='info-projects text-white font-mono text-xss pt-5 max-w-[950px] text-wrap line-clamp-8 lg:line-clamp-8'>
                        Mi portafolio web diseñado para mostrar mis proyectos, habilidades y experiencia como desarrollador web. Está construido con React y Tailwind CSS, ofreciendo una interfaz moderna, responsiva y optimizada para una navegación fluida.
                    </p>
                    <ul className='text-white font-mono text-xss pt-30 flex flex-wrap gap-2'>
                        <li className='list-projects neon-full-yellow'>HTML</li>
                        <li className='list-projects neon-full-yellow'>CSS</li>
                        <li className='list-projects neon-full-yellow'>Tailwind</li>
                        <li className='list-projects neon-full-yellow'>React</li>
                    </ul>
                </div>
                <div className='flex justify-end w-full lg:w-1/2'>
                    <img src="/img/cvProject.png" alt="project1" className='img-projects w-full lg:w-[90%] md:w-[80%] sm:w-full' />
                </div>
            </div>
        </section>
    );
};

export default Projects;