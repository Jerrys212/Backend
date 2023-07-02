import emailRegistro from "../helpers/sendEmail.js";

const get = async (req, res) => {
  try {
    const hola = {
      hola: "Mundo",
      desde: "jerrysbackend",
    };
    return res.status(200).json(hola);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const emailContacto = async (req, res) => {
  try {
    await emailRegistro("gerardoseabal86@outlook.es", "Gerardo Garcia");
    return res.status(200).json({ replyText: "Mensaje Enviado" });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

export { get, emailContacto };
