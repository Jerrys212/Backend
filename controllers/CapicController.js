import generarJWT from "../helpers/generarJWT.js";
import {
  Aportaciones,
  Grupos,
  Miembros,
  Prestamos,
} from "../models/capicModel.js";

//login

const autenticar = async (req, res) => {
  const { curp, password } = req.body;
  try {
    const usuario = await Miembros.findOne({ curp });
    if (!usuario) {
      return res
        .status(403)
        .json({ replyCode: 403, replyText: "El Usuario No existe" });
    }
    if (await usuario.comprobarPassword(password)) {
      return res.json({ token: generarJWT(usuario._id) });
    } else {
      console.log("first");
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

const perfil = async (req, res) => {
  const { miembro } = req;
  try {
    console.log(miembro);
    return res.status(200).json({ miembro });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

//miembros

const get = async (req, res) => {
  try {
    const encontrar = await Miembros.find({});
    return res.status(200).json(encontrar);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getMiembroCurp = async (req, res) => {
  const { curp } = req.body;
  try {
    const encontrar = await Miembros.findOne({ curp });
    return res.status(200).json(encontrar);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const getMiembro = async (req, res) => {
  const { id } = req.params;
  try {
    const encontrar = await Miembros.findById(id);
    return res.status(200).json(encontrar);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const insertarMiembro = async (req, res) => {
  try {
    const encontrar = await Miembros.findOne({ curp: req.body.curp });
    if (encontrar) {
      return res.status(400).json({
        replyCode: 400,
        replyText: "El miembro ya ha sido Registrado",
      });
    }
    const nuevo = new Miembros(req.body);
    const guardar = await nuevo.save();
    return res.status(200).json(guardar);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const editarMiembro = async (req, res) => {
  const { id, ...datosActualizados } = req.body;

  try {
    const objetoExistente = await Miembros.findById(id);

    if (!objetoExistente) {
      return res.status(404).json({ mensaje: "Miembro no encontrado" });
    }

    Object.keys(datosActualizados).forEach((key) => {
      objetoExistente[key] = datosActualizados[key];
    });

    await objetoExistente.save();

    return res
      .status(200)
      .json({ replyCode: 201, replyText: "Miembro Modificado Correctamente" });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ replyCode: 400, replyText: "Error Al modificar el Cliente" });
  }
};

const eliminarMiembro = async (req, res) => {
  const { id } = req.params;
  try {
    const eliminar = await Miembros.findByIdAndDelete(id);
    if (!eliminar) {
      return res.status(404).json({
        replyCode: "400",
        replyText: "El Miembro No existe o ya fue eliminado anteriormente",
      });
    }
    return res
      .status(200)
      .json({ replyCode: "200", replyText: "Miembro Eliminado Correctamente" });
  } catch (error) {
    return res.status(400).json(error);
  }
};

//aportaciones

const obtenerAportaciones = async (req, res) => {
  try {
    const encontrar = await Aportaciones.find({});
    return res.status(200).json(encontrar);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const obtenerAportacionesMiembro = async (req, res) => {
  const { miembro } = req.body;

  try {
    const encontrar = await Aportaciones.find({ miembro });
    return res.status(200).json(encontrar);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const insertarAportacion = async (req, res) => {
  const { curp } = req.body;

  try {
    const encontrar = await Miembros.findOne({ curp });
    if (!encontrar) {
      return res
        .status(404)
        .json({ replyCode: 404, replyText: "Error al Crear La Aportación" });
    }
    const nuevo = new Aportaciones(req.body);
    const guardar = await nuevo.save();
    return res.status(200).json(guardar);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

//prestamos

const obtenerPrestamos = async (req, res) => {
  try {
    const encontrar = await Prestamos.find({});
    return res.status(200).json(encontrar);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const obtenerPrestamosMiembro = async (req, res) => {
  const { miembro } = req.body;

  try {
    const encontrar = await Prestamos.find({ miembro });
    return res.status(200).json(encontrar);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const prestamoValido = async (req, res) => {
  const { miembro, prestamo } = req.body;
  try {
    const encontrar = await Aportaciones.find({ miembro });
    console.log(encontrar);
    const sumaAportes = encontrar.reduce(
      (total, registro) => total + registro.aporte,
      0
    );
    console.log(sumaAportes);
    if (prestamo > sumaAportes) {
      return res.status(401).json({
        replyCode: 401,
        replyText: "Fondos Insuficientes Para Solicitar Un Prestamo",
        valido: false,
      });
    } else {
      return res.status(200).json({
        replyCode: 200,
        replyText: "Prestamo Autorizado Con Exito",
        valido: true,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const nuevoPrestamo = async (req, res) => {
  try {
    const nuevo = new Prestamos(req.body);
    await nuevo.save();
    return res.status(200).json();
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

//grupos

const obtenerGrupos = async (req, res) => {
  try {
    const encontrar = await Grupos.find({});
    return res.status(200).json(encontrar);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const obtenerGrupo = async (req, res) => {
  try {
    const { grupo } = req.params;
    const encontrar = await Grupos.findOne({ nombre: grupo });
    return res.status(200).json(encontrar);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const nuevoGrupo = async (req, res) => {
  const { nombre } = req.body;
  try {
    const encontrar = await Grupos.findOne({ nombre });
    if (encontrar) {
      return res
        .status(400)
        .json({ replyCode: 400, replyText: "El Grupo Ya Existe" });
    }
    const nuevo = new Grupos(req.body);
    await nuevo.save();
    return res
      .status(202)
      .json({ replyCode: 202, replyText: "Grupo Creado Correctamente" });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export {
  autenticar,
  get,
  perfil,
  getMiembro,
  getMiembroCurp,
  insertarMiembro,
  editarMiembro,
  eliminarMiembro,
  obtenerAportaciones,
  obtenerAportacionesMiembro,
  prestamoValido,
  nuevoPrestamo,
  insertarAportacion,
  obtenerGrupos,
  obtenerGrupo,
  nuevoGrupo,
  obtenerPrestamos,
  obtenerPrestamosMiembro,
};
