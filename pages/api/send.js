const sgMail = require("@sendgrid/mail");

export default async function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { email, message } = req.body;

  const mailConfig = {
    to: "me@pablopvsky.com",
    from: "Pablo Orozco Montes <me@pablopvsky.com>",
    subject: `Nuevo formulario de contacto llenado`,
    text: message,
    html: `<p>${message}</p>`,
  };

  const mailConfigSecond = {
    to: email,
    from: "Pablo Orozco Montes <me@pablopvsky.com>",
    subject: `Gracias por ponerte en contacto conmigo`,
    text:
      "Gracias por ponerte en contacto conmigo. Trataré de responderte lo más pronto posible.",
    html: `<p>Gracias por ponerte en contacto conmigo. Trataré de responderte lo más pronto posible.</p>
    <p>tu mensaje fue: ${message}</p>
    <p>Estas recibiendo este mensaje porque me escribiste en pablopvsky.com</p>
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
