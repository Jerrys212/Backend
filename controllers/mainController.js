import emailRegistro from "../helpers/sendEmail.js";
import Contacto from "../models/mainModels.js";

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

const guardarInfo = async (req, res) => {
  try {
    const nuevoContacto = new Contacto(req.body);
    const guardar = await nuevoContacto.save();
    return res.status(200).json(guardar);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export { get, emailContacto, guardarInfo };
