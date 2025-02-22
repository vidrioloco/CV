import React from 'react';
import '/src/index.css';
import {useForm} from 'react-hook-form';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const {register,formState:{errors},handleSubmit,reset} = useForm();

  function insert(data){
    const templateParams = {
        nombre: data.nombre,
        correo: data.correo,
        mensaje: data.mensaje
        };
    
    emailjs.send(
        'service_sft8osb',   // Reemplaza con tu Service ID
        'template_xzsr7gc',  // Reemplaza con tu Template ID
        templateParams,
        'Clv5YzIZrpwzNcJzL'    // Reemplaza con tu Public Key
      ).then((response) => {
        console.log("Correo enviado con éxito", response);
        reset(); // Limpia el formulario después de enviarlo
      }).catch((error) => {
        console.error("Error al enviar el correo", error);
      reset()
    });
    }
  return (
    <section className='pt-100 flex flex-col items-center w-full pb-20' id="Contact">
      
      <div className='text-center'>
        <p className='text-white font-mono text-xl'>
          ¿Tienes alguna pregunta o sugerencia? ¡Escríbeme!
        </p>
      </div>
      <h2 className='title-contact-neon neon-full-unhovered text-white font-mono text-6xl pt-3'>
        Contáctame
      </h2>

      {/* Formulario */}
      <div className='w-full max-w-[700px] pt-10 px-5'>
        <form onSubmit={handleSubmit(insert)} className='form-contact flex flex-col gap-y-4'>

          <label htmlFor="name"  className='neon-full-unhovered'>Nombre:</label>
          <input type="text" id='name' placeholder='John'  className='border-2 border-gray-600 bg-gray-800 text-white rounded-md w-full h-10 px-3' 
            {...register("nombre", {
                required: true,
                minLength: 3,
                maxLength: 30
            })}
          />
            {
                errors.nombre?.type === "required" ? (
                    <p className="text-red-300 neon-full-red">El nombre es requerido</p>
                ) : errors.nombre?.type === "minLength" ? (
                    <p className="text-red-300 neon-full-red">El nombre debe tener al menos 3 caracteres</p>
                ) : errors.nombre?.type === "maxLength" ? (
                    <p className="text-red-300 neon-full-red">El nombre no puede tener más de 30 caracteres</p>
                ) : null
            }
          <label htmlFor="email" className='neon-full-unhovered'>Correo:</label>
          <input type="email" id='email' placeholder='example@example.com' className='border-2 border-gray-600 bg-gray-800 text-white rounded-md w-full h-10 px-3'
          {...register("correo",{
            required: true,
            email:true,
            pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
          })}
          />
          {errors.correo?.type === "required" ? (
            <p className="text-red-300 neon-full-red">El correo es requerido</p>
          ) : errors.correo?.type === "pattern" ? (
            <p className="text-red-300 neon-full-red">El correo no es válido</p>
          ) : null}

          <label htmlFor="message" className='neon-full-unhovered'>Mensaje:</label>
          <textarea id='message' placeholder='Escribe tu mensaje' className='border-2 border-gray-600 bg-gray-800 text-white rounded-md w-full h-32 p-3' 
          {...register("mensaje",{
            required: true,
            minLength: 5,
            maxLength: 1000
          })
          }
          />
            {errors.mensaje?.type === "required" ? (
                <p className="text-red-300 neon-full-red">El mensaje es requerido</p>
            ) : errors.mensaje?.type === "minLength" ? (
                <p className="text-red-300 neon-full-red">El mensaje debe tener al menos 5 caracteres</p>
            ) : errors.mensaje?.type === "maxLength" ? (
                <p className="text-red-300 neon-full-red">El mensaje no puede tener más de 1000 caracteres</p>
            ) : null}
          <button type="submit" className='bg-purple-700 hover:bg-purple-600 text-white font-mono font-bold p-2 rounded-md mt-4'>
            Enviar
          </button>

        </form>
      </div>

    </section>
  );
}

export default Contact;
