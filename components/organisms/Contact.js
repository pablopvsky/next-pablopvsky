import React, { useState } from "react";

function Contact() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [data, setData] = useState({
    email: "",
    message: "",
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setData({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const text = await res.text();
    handleResponse(res.status, text);
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
              <label htmlFor="email">Correo electrónico</label>
              <input
                id="email"
                type="email"
                onChange={handleOnChange}
                required
                value={data.email}
              />
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                onChange={handleOnChange}
                required
                value={data.message}
              />
              <button
                type="submit"
                disabled={status.submitting}
                className="button-fill fluid halo"
              >
                <span className="container">
                  {!status.submitting
                    ? !status.submitted
                      ? "Enviar"
                      : "Enviado"
                    : "Enviando..."}
                </span>
              </button>
            </form>
            {status.info.error && (
              <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && (
              <div className="success">{status.info.msg}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
