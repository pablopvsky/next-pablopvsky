export const contactFormSchema = ({ email }) => {
  if (email.value === "") {
    email.validate("Ooops, debes escribir un correo 😅");
    return true;
  } else {
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email.value)) {
      email.validate("Oh, escribe un correo electrónico válido 🧐");
      return true;
    }
    email.validate(null);
    return false;
  }
};
