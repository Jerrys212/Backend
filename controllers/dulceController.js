import { Productos } from "../models/dulceModel.js";

const obtenerProductos = async (req, res) => {
  try {
    const encontrar = await Productos.find({});
    return res.status(200).json(encontrar);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const agregarProducto = async (req, res) => {
  try {
    const nuevoProducto = new Productos(req.body);
    await nuevoProducto.save();
    return res
      .status(200)
      .json({ replyCode: 200, replyText: "Producto Agregado Correctamente" });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

export { obtenerProductos, agregarProducto };
