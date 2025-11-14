import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contacto() {
  const form1 = useRef();
  const form2 = useRef();

  // -------------------------------
  //   ⬇️ Inserta aquí tus IDs
  // -------------------------------
  const SERVICE_ID = "service_24psw4t"; // <-- Pega tu SERVICE ID
  const TEMPLATE_MENSAJE = "template_bqh2sqh"; // <-- Pega plantilla del PRIMER formulario
  const TEMPLATE_COLAB = "template_f2m85xn"; // <-- Pega plantilla del SEGUNDO formulario
  const PUBLIC_KEY = "ZsLqj8x4qnOplr2Jt"; // <-- Pega tu PUBLIC KEY
  // -------------------------------

  const sendEmail = (e, formRef, templateID) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, templateID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          alert("¡Mensaje enviado correctamente!");
          formRef.current.reset();
        },
        (error) => {
          alert("Hubo un error al enviar el mensaje.");
          console.error(error);
        }
      );
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center text-white px-6 py-20">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-20">

        {/* ─────────── FORMULARIO IZQUIERDA ─────────── */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold leading-snug mb-6">
            Si quieres dejarme un<br />mensaje contáctame aquí
          </h3>

          <div className="bg-[#C39A4A] w-[330px] md:w-[360px] p-8 rounded-2xl shadow-lg">
            <form
              ref={form1}
              onSubmit={(e) => sendEmail(e, form1, TEMPLATE_MENSAJE)}
              className="flex flex-col gap-5"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Nombre"
                required
                className="p-3 bg-[#3C0053] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FCC10A]"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Correo"
                required
                className="p-3 bg-[#3C0053] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FCC10A]"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Mensaje..."
                required
                className="p-3 bg-[#3C0053] text-white rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#FCC10A]"
              ></textarea>

              <button
                type="submit"
                className="bg-[#3C0053] hover:bg-[#5c0080] py-2 rounded-lg text-white font-semibold transition"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>

        {/* ─────────── FORMULARIO DERECHA ─────────── */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold leading-snug mb-6">
            Si quieres trabajar o colaborar<br />conmigo contáctame aquí
          </h3>

          <div className="bg-[#3C0053] w-[330px] md:w-[360px] p-8 rounded-2xl shadow-lg">
            <form
              ref={form2}
              onSubmit={(e) => sendEmail(e, form2, TEMPLATE_COLAB)}
              className="flex flex-col gap-5"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Nombre"
                required
                className="p-3 bg-[#C39A4A] text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FCC10A]"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Correo"
                required
                className="p-3 bg-[#C39A4A] text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FCC10A]"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Mensaje..."
                required
                className="p-3 bg-[#C39A4A] text-black rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#FCC10A]"
              ></textarea>

              <button
                type="submit"
                className="bg-[#C39A4A] hover:bg-[#d8b86b] py-2 rounded-lg text-black font-semibold transition"
              >
                Enviar propuesta
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
