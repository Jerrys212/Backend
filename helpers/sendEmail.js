import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const emailRegistro = async (email, nombre) => {
  let transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    tls: {
      rejectUnauthorized: true,
    },
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //enviar email

  try {
    const info = await transport.sendMail({
      from: "Gerardo Garcia Medina",
      to: email,
      subject: "Contacto",
      text: "Contacto",
      html: ` <p>Hola: ${nombre} Gracias Por Ponerte en Contacto Conmigo.</p>`,
    });
    console.log("Mensaje enviado: %s", info.messageId);
  } catch (error) {
    console.log(error);
  }
};

export default emailRegistro;
