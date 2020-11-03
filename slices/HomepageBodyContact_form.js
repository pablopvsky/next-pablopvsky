import React, { useState } from "react";
import { Button, Input, Section } from "aura-design-system";
import { RichText } from "prismic-reactjs";

import { sendContactForm } from "services/contact";
import { useForm, useFormReset, useFormIsValid } from "aura-design-system/core";
import { contactFormSchema } from "lib/validation-schema";

function HomepageBodyContact_form({ slice, bg }) {
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
    <Section className="bg" container="smash">
      <div className="halo centertxt">
        <h3 className="h1 layer">
          Hagamos <span className="blue-text">algo</span>
          <br />
          <span className="purple-text">interesante posible</span>
        </h3>
        {RichText.render(slice.primary.contact_form_description)}
      </div>
      <div className="smosh pad">
        <form onSubmit={handleOnSubmit}>
          <Input
            id="email"
            type="email"
            placeholder="Correo electrónico"
            dialog={data.email.error && data.email.touch}
            dialogColor="yellow"
            label
            {...data.email.input}
          />
          {data.email.error && data.email.touch && data.email.error}
          <div className="inputer">
            <textarea
              id="message"
              placeholder="Mensaje"
              {...data.message.input}
            />
            {data.message.error && data.message.touch && data.message.error}
          </div>
          <Button
            mode="fill"
            type="submit"
            disabled={!isValid}
            label={!status.wait ? "Enviar" : "Enviando..."}
            fluid
          />
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
    </Section>
  );
}

export default HomepageBodyContact_form;
