import React, { useState } from "react";

function Contact() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
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
      setInputs({
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
    setInputs((prev) => ({
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
      body: JSON.stringify(inputs),
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
            <span className="purple-text">interesante juntos</span>
          </h3>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores.
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
                value={inputs.email}
              />
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                onChange={handleOnChange}
                required
                value={inputs.message}
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
