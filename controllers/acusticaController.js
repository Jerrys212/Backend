import { Sectores } from "../models/acusticaModel.js";

const getConceptos = async (req, res) => {
  try {
    const encontrar = await Sectores.find({});
    return res.status(200).json(encontrar);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const agregarConceptos = async (req, res) => {
  try {
    const nuevo = new Sectores(req.body);
    await nuevo.save();
    return res
      .status(200)
      .json({ replyCode: 200, replyText: "Sector Guardado Correctamente" });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export { getConceptos, agregarConceptos };
