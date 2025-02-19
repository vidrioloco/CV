import React from "react";
import "/src/index.css";

const Skills = () => {
    return (
        <section className="pb-20 max-w-[1400px] mx-auto px-5">
            <div className="skills grid grid-cols-2 gap-3 justify-center items-center w-full pt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="skills-box transition delay-150 duration-100 ease-in-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none neon-full border border-white rounded-md p-3 bg-gray-900 justify-items-center">
                    <img className="w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                    <p className=" neon-full-unhovered text-3xl pt-5 skills-text">HTML</p>
                </div>
                <div className="transition delay-150 duration-100 ease-in-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none neon-full border border-white rounded-md p-3 bg-gray-900 justify-items-center">
                    <img className="w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                    <p className="neon-full-unhovered text-3xl pt-5 skills-text">CSS</p>
                </div>
                <div className="transition delay-150 duration-100 ease-in-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none neon-full border border-white rounded-md p-3 bg-gray-900 justify-items-center">
                    <img className="w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                    <p className="neon-full-unhovered text-3xl pt-5 skills-text">JavaScript</p>
                </div>
                <div className="transition delay-150 duration-100 ease-in-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none neon-full border border-white rounded-md p-3 bg-gray-900 justify-items-center">
                    <img className="w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
                    <p className="neon-full-unhovered text-3xl pt-5 skills-text">Java</p>
                </div>
                <div className="transition delay-150 duration-100 ease-in-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none neon-full border border-white rounded-md p-3 bg-gray-900 justify-items-center">
                    <img className="w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
                    <p className="neon-full-unhovered text-3xl pt-5 skills-text">MySQL</p>
                </div>
                <div className="transition delay-150 duration-100 ease-in-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none neon-full border border-white rounded-md p-3 bg-gray-900 justify-items-center">
                    <img className="w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
                    <p className="neon-full-unhovered text-3xl pt-5 skills-text">Bootstrap</p>
                </div>
                <div className="transition delay-150 duration-100 ease-in-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none neon-full border border-white rounded-md p-3 bg-gray-900 justify-items-center">
                    <img className="w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                    <p className="neon-full-unhovered text-3xl pt-5 skills-text">Tailwind</p>
                </div>
                <div className="transition delay-150 duration-100 ease-in-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none neon-full border border-white rounded-md p-3 bg-gray-900 justify-items-center">
                    <img className="w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" />
                    <p className="neon-full-unhovered text-3xl pt-5 skills-text">WordPress</p>
                </div>
                <div className="transition delay-150 duration-100 ease-in-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none neon-full border border-white rounded-md p-3 bg-gray-900 justify-items-center"> 
                    <img className="w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                    <p className="neon-full-unhovered text-3xl pt-5 skills-text">Github</p>
                </div>
            </div>
        </section>
    );
}

export default Skills;