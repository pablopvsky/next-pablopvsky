export const sendContactFormConfig = (email, message) => ({
  to: "me@pablopvsky.com",
  from: "Pablo Orozco Montes <me@pablopvsky.com>",
  subject: `Nuevo formulario de contacto llenado`,
  html: `El mensaje fue: ${message}. Por: ${email} `,
});

export const sendResponseContactFormCofig = () => ({
  to: email,
  from: "Pablo Orozco Montes <me@pablopvsky.com>",
  subject: `Gracias por ponerte en contacto conmigo :)`,
  html: `Acuso recibido. Hola 👋. 
            <br>
            Que bueno que te hayas puesto en contacto conmigo. <br>
            Responderé tan pronto sea posible para que convercemos.<br>
            Saludos.<br>
            <br>
            El mensaje que me enviaste fue:<br>
            ${message}.<br>
            <br>
            Este mensaje te llegó porque llenaste el formulario de contacto de
            pablopvsky.com
            `,
});
