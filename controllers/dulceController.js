import generarJWT from "../helpers/generarJWT.js";
import { Productos, Ventas, Admin } from "../models/dulceModel.js";

const registrar = async (req, res) => {
  const { usuario } = req.body;
  const existeUsuario = await Admin.findOne({ usuario });

  if (existeUsuario) {
    const error = new Error("Usuario ya registrado");
    return res.status(400).json({ msg: error.message });
  }

  try {
    const nuevoUsuario = new Admin(req.body);
    nuevoUsuario.token = generarJWT();
    await nuevoUsuario.save();

    return res.json({
      replyCode: 200,
      replyText: "Usuario Creado Correctamente",
    });
  } catch (error) {
    console.log(error);
  }
};

const autenticar = async (req, res) => {
  const { usuario, password } = req.body;
  try {
    const existeUsuario = await Admin.findOne({ usuario });

    if (!existeUsuario) {
      const error = new Error("El Usuario No existe");
      return res.status(403).json({ replyCode: 403, replyText: error.message });
    }

    if (await existeUsuario.comprobarPassword(password)) {
      return res.json({
        _id: existeUsuario._id,
        token: generarJWT(existeUsuario._id),
      });
    } else {
      const error = new Error("El Usuario o La Contraseña Son Incorrectos");
      return res.status(403).json({ replyCode: 403, replyText: error.message });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.message);
  }
};

const perfil = async (req, res) => {
  const { admin } = req;
  console.log(admin);
  try {
    return res.status(200).json(admin);
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
  registrar,
  autenticar,
  perfil,
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
