import { Mesas, Orden, Productos } from "../models/posModels.js";

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

const obtenerProductos = async (req, res) => {
  const { categoria } = req.body;
  try {
    const encontrar = await Productos.find({ categoria });
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

const borrarTodo = async (req, res) => {
  try {
    const borrar = await Productos.deleteMany({});
    return res.status(200).json(borrar);
  } catch (error) {
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

//############## ZONA MESAS ####################

const nuevaMesa = async (req, res) => {
  try {
    const encontar = await Mesas.findOne({ mesa: req.body.mesa });

    if (encontar) {
      return res.status(400).json({ reply: "Esa Mesa Ya Ha Sido Registrada" });
    } else {
      const registrar = new Mesas(req.body);
      const guardar = await registrar.save();

      return res
        .status(200)
        .json({ reply: "Mesa Registrada Correctamente", guardar });
    }
  } catch (error) {
    console.log(error);
    console.log(error);
    return res.status(400).json(error);
  }
};

const obtenerMesasDisponibles = async (req, res) => {
  try {
    const encontrar = await Mesas.find({});
    const mesasDisponibles = encontrar
      .map((mesa) => {
        return {
          id: mesa.mesa,
          disponible: mesa.disponible,
          cantidadPersonas: mesa.cantidadPersonas,
        };
      })
      .sort((a, b) => a.id - b.id);
    return res.status(200).json(mesasDisponibles);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const asignaroDesocuparMesa = async (req, res) => {
  try {
    const { mesa } = req.body;
    const encontrar = await Mesas.findOne({ mesa });
    if (encontrar.disponible !== false) {
      encontrar.disponible = false;
      await encontrar.save();
      return res.status(200).json({ replyText: "Mesa Asignada Correctamente" });
    } else {
      encontrar.disponible = true;
      await encontrar.save();
      return res
        .status(400)
        .json({ replyText: "Mesa Ha Sido Desocupada Anteriormente" });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

const actualizarMesa = async (req, res) => {
  const { mesa } = req.body;

  try {
    const encontrar = await Mesas.findOne({ mesa });
    encontrar.cantidadPersonas =
      req.body.cantidadPersonas ?? encontrar.cantidadPersonas;
    const actualizar = await encontrar.save();
    return res
      .status(200)
      .json({ replyText: "Mesa Actualizada Correctamente", actualizar });
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
  nuevaMesa,
  obtenerMesasDisponibles,
  actualizarMesa,
  asignaroDesocuparMesa,
  obtenerCategorias,
  borrarTodo,
};
