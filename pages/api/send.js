const fs = require("fs");
const sgMail = require("@sendgrid/mail");

const template = fs.readFileSync("lib/emails/email.html", {
  encoding: "utf-8",
});
const emailHeader = fs.readFileSync("lib/emails/email-header.html", {
  encoding: "utf-8",
});

export default async function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { email, message } = req.body;

  const MENSSAGE_TAG = "%MENSSAGE%";
  const HEADER_TAG = "%HEADER%";

  let emailHTML = template;
  emailHTML = emailHTML.replace(MENSSAGE_TAG, message);
  emailHTML = emailHTML.replace(HEADER_TAG, emailHeader);

  const mailConfig = {
    to: "me@pablopvsky.com",
    from: "Pablo Orozco Montes <me@pablopvsky.com>",
    subject: `Nuevo formulario de contacto llenado`,
    html: emailHTML,
  };

  const mailConfigSecond = {
    to: email,
    from: "Pablo Orozco Montes <me@pablopvsky.com>",
    subject: `Gracias por ponerte en contacto conmigo :)`,
    html: emailHTML,
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
