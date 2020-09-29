import React, { useState, useEffect, useRef } from "react";

import { sendContactForm } from "services/contact";
import { UseInputValue } from "hook/UseInputValue";
import { contactFormSchema } from "lib/validation-schema";

function Contact() {
  const firstRender = useRef(true);
  const email = UseInputValue("");
  const message = UseInputValue("");
  const data = { email, message };
  const values = { email: email.value, message: message.value };
  const [disabled, setDisabled] = useState(true);
  const [status, setStatus] = useState({
    wait: false,
    info: { error: false, msg: null },
  });

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setDisabled(contactFormSchema(data));
  }, [message, email]);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, wait: true }));

    const res = await sendContactForm(values);
    const text = await res.text();

    handleResponse(res, text);
  };

  const handleResponse = (res, msg) => {
    if (res.status === 200) {
      setStatus({
        wait: false,
        info: { error: false, msg: msg },
      });
      email.reset();
      message.reset();
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
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
              <input
                id="email"
                type="email"
                placeholder="Correo electrónico"
                {...email}
                required
              />
              {email.error && email.error}
              <textarea
                id="message"
                placeholder="Mensaje"
                {...message}
                required
              />
              <button
                type="submit"
                className={`button-fill fluid halo ${disabled && "disable"}`}
                disabled={disabled}
              >
                <span className="container">
                  {!status.wait ? "Enviar" : "Enviando..."}
                </span>
              </button>
            </form>

            {status.info.error && (
              <div className="mod wall-pad orange centertxt">
                {status.info.msg}
              </div>
            )}

            {!status.info.error && status.info.msg && (
              <div className="mod wall-pad blue centertxt">
                {status.info.msg}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
