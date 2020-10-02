export const contactFormSchema = ({ email, message }) => {
  let valid = {};

  if (email.value === "") {
    email.validate("Ooops, debes escribir un correo 😅");
    valid.email = false;
  } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email.value)) {
    email.validate("Oh, escribe un correo electrónico válido 🧐");
    valid.email = false;
  } else {
    valid.email = true;
    email.validate(null);
  }

  if (message.value === "") {
    message.validate("¿Uh, te has quedado en silencio? 🤐");
    valid.message = false;
  } else if (message.value.length < 10) {
    message.validate(
      `Wo, eres de pocas palabras, escribe mínimmo ${
        10 - message.value.length
      } caracteres más🤭`
    );
    valid.message = false;
  } else {
    valid.message = true;
    message.validate(null);
  }

  if (!valid.email || !valid.message) {
    return false;
  } else {
    return true;
  }
};
