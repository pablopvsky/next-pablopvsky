export const contactFormSchema = ({ email, message }) => {
  if ((message, email)) {
    if (email.value === "") {
      email.validate("Ooops, debes escribir un correo 😅");
      return false;
    } else {
      if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email.value)) {
        email.validate("Oh, escribe un correo electrónico válido 🧐");
        return false;
      }
      email.validate(null);
    }
    if (message.value === "") {
      message.validate("¿Uh, te has quedado en silencio? 🤐");
      return false;
    } else {
      if (message.value.length < 10) {
        message.validate("Wo, eres de pocas palabras 🤭");
        return false;
      }
    }
  }
  return true;
};
