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
    subject: `Nuevo formulario de contacto llenado`,
    text: message,
    html: `<p>${message}</p>`,
  };

  try {
    await sgMail.send(mailConfig);
    await sgMail.send(mailConfigSecond);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Message not sent.");
  }
}
