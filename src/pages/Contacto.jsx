import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contacto.css";

export default function Contacto() {
  const form1 = useRef();
  const form2 = useRef();

  const SERVICE_ID = "service_24psw4t";
  const TEMPLATE_MENSAJE = "template_bqh2sqh";
  const TEMPLATE_COLAB = "template_f2m85xn3";
  const PUBLIC_KEY = "ZsLqj8x4qnOplr2Jt";

  const sendEmail = (e, formRef, templateID) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, templateID, formRef.current, PUBLIC_KEY).then(
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

      {/* CONTENEDOR PRINCIPAL */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* COLUMNA IZQUIERDA → IMAGEN FULL SUPER GRANDE */}
        <div className="hidden md:flex justify-center items-center h-screen">
          <img
            src="./images/contactoImg.webp"
            alt="contacto"
            className="h-screen w-auto object-contain pt-55 scale-[2.60]"
          />
        </div>

        {/* ----------- COLUMNA DERECHA → FORMULARIOS ----------- */}
        <div className="flex flex-col items-center gap-10">

          {/* FORMULARIO SEGUIDORES */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold leading-snug mb-2">
              Si quieres dejarme un<br />mensaje contáctame aquí
            </h3>

            <div className="bg-[#C39A4A] w-[330px] md:w-[360px] p-8 rounded-2xl shadow-lg">
              <form
                ref={form1}
                onSubmit={(e) => sendEmail(e, form1, TEMPLATE_MENSAJE)}
                className="flex flex-col gap-5"
              >
                <div className="form-animated text-white shadow-2xl shadow-[#7e6430] rounded-2xl">
                  <input type="text" name="user_name" placeholder=" " required className="bg-transparent" />
                  <label>Nombre</label>
                  <span className="bg-purple"></span>
                </div>

                <div className="form-animated text-white shadow-2xl shadow-[#7e6430] rounded-2xl">
                  <input type="email" name="user_email" placeholder=" " required className="bg-transparent" />
                  <label>Correo</label>
                  <span className="bg-purple"></span>
                </div>

                <div className="form-animated text-white shadow-2xl shadow-[#7e6430] rounded-2xl">
                  <textarea name="message" rows="6" placeholder=" " required className="bg-transparent resize-none"></textarea>
                  <label>Mensaje</label>
                  <span className="bg-purple"></span>
                </div>

                <button
                  type="submit"
                  className="bg-[#C39A4A] hover:bg-[#5c0080] hover:text-[#C39A4A] py-2 rounded-lg text-white transition shadow-2xl shadow-black"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>

          {/* FORMULARIO COLABORADORES */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold leading-snug mb-2">
              Si quieres trabajar o colaborar<br />conmigo contáctame aquí
            </h3>

            <div className="bg-[#3C0053] w-[330px] md:w-[360px] p-8 rounded-2xl shadow-lg">
              <form
                ref={form2}
                onSubmit={(e) => sendEmail(e, form2, TEMPLATE_COLAB)}
                className="flex flex-col gap-5"
              >
                <div className="form-animated text-white shadow-2xl shadow-[#280137] rounded-2xl">
                  <input type="text" name="user_name" placeholder=" " required className="bg-transparent" />
                  <label>Nombre</label>
                  <span className="bg-yellow"></span>
                </div>

                <div className="form-animated text-white shadow-2xl shadow-[#280137] rounded-2xl">
                  <input type="email" name="user_email" placeholder=" " required className="bg-transparent" />
                  <label>Correo</label>
                  <span className="bg-yellow"></span>
                </div>

                <div className="form-animated text-white shadow-2xl shadow-[#280137] rounded-2xl">
                  <textarea name="message" rows="6" placeholder=" " required className="bg-transparent resize-none"></textarea>
                  <label>Mensaje</label>
                  <span className="bg-yellow"></span>
                </div>

                <button
                  type="submit"
                  className="bg-[#3C0053] hover:bg-[#C39A4A] hover:text-[#3C0053] py-2 rounded-lg text-white transition shadow-2xl shadow-black"
                >
                  Enviar propuesta
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* ÍCONOS DE REDES SOCIALES — CENTRADOS REAL */}
        <div className="col-span-1 md:col-span-2 flex items-center justify-center gap-6 pt-25">

          <a
            href="https://www.instagram.com/kfortich_?igsh=Y2todjZ5b2kwMDFr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <img
              src="./images/igLogo.webp"
              alt="Instagram"
              className="w-20 h-20 cursor-pointer"
            />
          </a>

          <a
            href="https://x.com/CLIENTE"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <img
              src="./images/xLogo.png"
              alt="X"
              className="w-20 h-20 cursor-pointer"
            />
          </a>

          <a
            href="https://open.spotify.com/intl-es/artist/0ht0elF272AVWMAZghSGV2?si=KcwKzEP5TESmlrUMngiWDQ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <img
              src="./images/spotifyLogo.png"
              alt="Spotify"
              className="w-20 h-20 cursor-pointer"
            />
          </a>

        </div>

      </div>
    </div>
  );
}
