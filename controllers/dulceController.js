import { Productos, Ventas } from "../models/dulceModel.js";

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

const borrarProducto = async (req, res) => {
  const { id } = req.params;

  try {
    const borrar = await Productos.findByIdAndDelete(id);

    return res
      .status(200)
      .json({ replyCode: 200, replyText: "Producto Borrado Correctamente" });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const obtenerCategorias = async (req, res) => {
  try {
    const encontrar = await Productos.distinct("categoria");
    const categorias = encontrar.map((categoria) => {
      return {
        categoria,
      };
    });
    return res.status(200).json(categorias);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const nuevaVenta = async (req, res) => {
  try {
    const registrar = new Ventas(req.body);
    const guardar = await registrar.save();

    return res
      .status(200)
      .json({ replyCode: 200, replyText: "Venta Registrada Correctamente" });
  } catch (error) {
    console.log(error);
    console.log(error);
    return res.status(400).json(error);
  }
};

const obtenerVentas = async (req, res) => {
  try {
    const encontrar = await Ventas.find({});
    return res.status(200).json(encontrar);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const obtenerVenta = async (req, res) => {
  const { venta } = req.params;

  try {
    const encontrar = await Ventas.findOne({ venta });
    return res.status(200).json(encontrar);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const borrarVenta = async (req, res) => {
  const { id } = req.params;

  try {
    const borrar = await Ventas.findByIdAndDelete(id);

    return res
      .status(200)
      .json({ replyCode: 200, replyText: "Venta Borrada Correctamente" });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const borrarTodo = async (req, res) => {
  try {
    const borrar = await Productos.deleteMany({});
    return res
      .status(200)
      .json({ replyCode: 200, replyText: "Productos Borrados Correctamente" });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

export {
  obtenerProductos,
  agregarProducto,
  actualizarProdcuto,
  obtenerCategorias,
  borrarTodo,
  nuevaVenta,
  obtenerVentas,
  obtenerVenta,
  borrarVenta,
  borrarProducto,
};
