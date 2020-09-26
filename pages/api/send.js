const sgMail = require("@sendgrid/mail");

export default async function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { email, message } = req.body;

  const mailConfig = {
    to: "me@pablopvsky.com",
    from: "Pablo Orozco Montes <me@pablopvsky.com>",
    subject: `Nuevo formulario de contacto llenado`,
    html: `El mensaje fue: ${message}. Por: ${email} `,
  };

  const mailConfigSecond = {
    to: email,
    from: "Pablo Orozco Montes <me@pablopvsky.com>",
    subject: `Gracias por ponerte en contacto conmigo :)`,
    html: `Acuso recibido. Hola 👋. 
            Que bueno que te hayas puesto en contacto conmigo. 
            Responderé tan pronto sea posible para que convercemos.
            Saludos.
            El mensaje que me enviaste fue:
            ${message}.
            Este mensaje te llegó porque llenaste el formulario de contacto de
            pablopvsky.com
            `,
  };

  try {
    await sgMail.send(mailConfig);
    await sgMail.send(mailConfigSecond);
    res.status(200).send("Tu mensaje fue enviado.");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Ha occurrido un error.");
  }
}
