import React, { useState } from "react";

import { sendContactForm } from "services/contact";
import { useForm, useFormReset, useFormIsValid } from "hooks/useForm";
import { contactFormSchema } from "lib/validation-schema";

function Contact() {
  const data = useForm({
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    wait: false,
    submited: false,
    info: { error: false, msg: null },
  });
  const isValid = useFormIsValid(data, contactFormSchema);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, wait: true }));

    const res = await sendContactForm({
      email: data.email.value,
      message: data.message.value,
    });
    const text = await res.text();

    handleResponse(res, text);
  };

  const handleResponse = (res, msg) => {
    if (res.status === 200) {
      setStatus({
        wait: false,
        submited: true,
        info: { error: false, msg: msg },
      });
      useFormReset(data);
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
                {...data.email}
              />
              {data.email.error && data.email.touch && data.email.error}

              <textarea id="message" placeholder="Mensaje" {...data.message} />
              {data.message.error && data.message.touch && data.message.error}
              <button
                type="submit"
                className={`button-fill fluid halo ${!isValid && "disable"}`}
                disabled={!isValid}
              >
                <span className="container">
                  {!status.wait ? "Enviar" : "Enviando..."}
                </span>
              </button>
            </form>

            <>
              {status.info.error && (
                <div className="mod wall-pad orange centertxt">
                  {status.info.msg}
                </div>
              )}
            </>

            <div className="mod wall-pad blue centertxt">{status.info.msg}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
