import React from 'react';
import '/src/index.css';

const Footer = () => {
  return (
    <section className='footer w-full'>
        <footer className='footer-content flex flex-col items-center justify-center w-full pt-5'>
            <div className='flex justify-center items-center text-white w-full'>
                <div className='footer-info flex flex-col justify-center items-center p-5 w-full max-w-[700px] text-center p-10'>
                    <p className='neon-full footer-text text-white font-mono text-1xl'>
                        © 2025 Samuel Membreño. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    </section>
  );
};

export default Footer;