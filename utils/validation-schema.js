export const contactFormSchema = ({ email, message }) => {
  let schema = {};

  if (email.input.value === "") {
    email.dialog("Ooops, debes escribir un correo 😅");
    schema.email = false;
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.input.value)) {
    email.dialog("Oh, escribe un correo electrónico válido 🧐");
    schema.email = false;
  } else {
    schema.email = true;
    email.dialog(null);
  }

  if (message.input.value === "") {
    message.dialog("¿Uh, te has quedado en silencio? 🤐");
    schema.message = false;
  } else if (message.input.value.length < 10) {
    message.dialog(
      `Wo, eres de pocas palabras, escribe mínimmo ${
        10 - message.input.value.length
      } caracteres más🤭`
    );
    schema.message = false;
  } else {
    schema.message = true;
    message.dialog(null);
  }

  if (!schema.email || !schema.message) {
    return false;
  } else {
    return true;
  }
};
