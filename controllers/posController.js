import { Orden, Productos } from "../models/posModels.js";

//############## ZONA PRODUCTOS ####################

const nuevoProducto = async (req, res) => {
  try {
    const registrar = new Productos(req.body);
    const guardar = await registrar.save();
    return res.status(200).json(guardar);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const obtenerProductos = async (req, res) => {
  try {
    const encontrar = await Productos.find({});
    return res.status(200).json(encontrar);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const actualizarProdcuto = async (req, res) => {
  const { id, ...datosActualizados } = req.body;

  try {
    const objetoExistente = await Productos.findById(id);

    if (!objetoExistente) {
      return res.status(404).json({ mensaje: "Objeto no encontrado" });
    }

    Object.keys(datosActualizados).forEach((key) => {
      objetoExistente[key] = datosActualizados[key];
    });

    const actualizar = await objetoExistente.save();

    return res.status(200).json(actualizar);
  } catch (error) {
    console.log(error);
    console.log(error);
    return res.status(400).json(error);
  }
};

//############## ZONA ORDENES ####################

const nuevaOrden = async (req, res) => {
  try {
    const registrar = new Orden(req.body);
    const guardar = await registrar.save();

    return res
      .status(200)
      .json({ reply: "Orden Registrada Correctamente", guardar });
  } catch (error) {
    console.log(error);
    console.log(error);
    return res.status(400).json(error);
  }
};

const obtenerOrden = async (req, res) => {
  const { noOrden } = req.params;

  try {
    const encontrar = await Orden.findOne({ noOrden });
    return res.status(200).json(encontrar);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const actualizarOrden = async (req, res) => {
  const { noOrden, elementos, total } = req.body;

  try {
    const encontrar = await Orden.findOne({ noOrden });
    encontrar.elementos = [...encontrar.elementos, ...elementos];
    encontrar.total = total;
    const actualizar = await encontrar.save();
    return res.status(200).json(actualizar);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};

export {
  nuevoProducto,
  obtenerProductos,
  actualizarProdcuto,
  nuevaOrden,
  obtenerOrden,
  actualizarOrden,
};
