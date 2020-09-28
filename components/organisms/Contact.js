import React, { useState } from "react";

import { sendContactForm } from "services/contact";
import { UseInputValue } from "hook/UseInputValue";

function Contact() {
  const email = UseInputValue("");
  const message = UseInputValue("");

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const data = { email: email.value, message: message.value };
    const res = await sendContactForm(data);
  };

  return (
    <section className="bg-circles">
      <div className="smash">
        <div className="halo centertxt">
          <h3 className="h1 layer">
            Hagamos <span className="blue-text">algo</span>
            <br />
            <span className="purple-text">interesante posible</span>
          </h3>
          <p>
            Si necesitas una solución personalizada, una asesoría o simplemente
            quieres decirme: Hola 👋 .
          </p>
        </div>
        <div className="smosh pad">
          <div className="inputer">
            <form onSubmit={handleOnSubmit}>
              <input id="email" type="email" {...email} required />
              <textarea id="message" {...message} required />
              <button type="submit" className="button-fill fluid halo">
                <span className="container">Enviar</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
