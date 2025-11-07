import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_24psw4t", // <- reemplaza esto
        "template_bqh2sqh", // <- reemplaza esto
        form.current,
        "ZsLqj8x4qnOplr2Jt" // <- reemplaza esto
      )
      .then(
        () => {
          alert("¡Mensaje enviado correctamente!");
          form.current.reset();
        },
        (error) => {
          alert("Hubo un error al enviar el mensaje.");
          console.error(error);
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white">
      <h2 className="text-3xl font-bold mb-6">Contáctame</h2>
      <form ref={form} onSubmit={sendEmail} className="w-full max-w-md flex flex-col gap-4">
        <input
          type="text"
          name="user_name"
          placeholder="Tu nombre"
          required
          className="p-3 rounded bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Tu correo"
          required
          className="p-3 rounded bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Tu mensaje..."
          required
          className="p-3 rounded bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 py-2 rounded transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
