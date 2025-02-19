import React from 'react';
import '/src/index.css';


const Main = () => {
    return (
        <main className="w-full overflow-x-hidden">
            {/* Información personal */}
            <section className="infoSection flex flex-col items-center justify-center sm:pt-5">
                <div className="flex justify-center items-center text-white w-full ">
                    <div className="info flex flex-col justify-center items-center p-5 w-full max-w-[700px] text-center p-10">
                        <img
                            className="image-cv md:w-[350px] md:h-[350px] sm:w-[350px] sm:h-[350px]  lg:w-[350px] lg:h-[350px]"
                            src="/img/cv.jpg"
                            alt="Samuel Membreño"
                        />
                        <p className="name-cv neon-full text-6xl pt-10 font-mono font-bold justify-center align-center">Samuel Membreño</p><br />
                        <span className="info content text-xl font-mono pt-5 type" >
                            Desarrollador de Aplicaciones Web en formación, con un especial interés en desarrollo frontend y backend.
                        </span>
                    </div>
                </div>
            </section>
            {/* Redes sociales */}
            <section className="flex items-center justify-center w-full pt-15">
                <div className="flex items-center justify-center w-full sm:g-10">
                    <ul className="grid grid-cols-2 gap-4 text-white font-mono text-1xl text-center sm:flex sm:gap-4 max-w-[6100px] mx-auto">
                        <li className='neon-full border-2 border-white rounded-full p-1.5'><a href="https://www.linkedin.com/in/samuel-membre%C3%B1o-3845b52bb/" target='_blank'>LinkedIn</a></li>
                        <li className='neon-full border-2 border-white rounded-full p-1.5'><a href="https://www.infojobs.net/candidate/cv/view/index.xhtml" target='_blank'>InfoJobs</a></li>
                        <li className='neon-full border-2 border-white rounded-full p-1.5'><a href="https://github.com/vidrioloco" target='_blank'>Github</a></li>
                        <li className='neon-full border-2 border-white rounded-full p-1.5'><a href="" target='_blank'>Curriculum</a></li>
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default Main;