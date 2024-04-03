import emailRegistro from "../helpers/sendEmail.js";
import { Contacto, Experiencia, Habilidades, Proyectos } from "../models/mainModels.js";

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

const obtenerProyectos = async (req, res) => {
    try {
        const encontrar = await Proyectos.find({});
        return res.status(200).json(encontrar);
    } catch (error) {
        return res.status(400).json(error);
    }
};

const nuevoProyecto = async (req, res) => {
    try {
        const nuevo = new Proyectos(req.body);
        await nuevo.save();
        return res.status(200).json({ replyText: "Proyecto Guardado Correctamente" });
    } catch (error) {
        return res.status(400).json(error);
    }
};

const nuevaHabilidad = async (req, res) => {
    try {
        const nuevaHabilidad = new Habilidades(req.body);
        await nuevaHabilidad.save();
        return res.status(200).json({ replyCode: 200, replyText: "Habilidad Guardada Correctamente" });
    } catch (error) {
        return res.status(400).json(error);
    }
};

const obtenerHabilidades = async (req, res) => {
    try {
        const obtenerHabilidades = await Habilidades.find({});
        return res.status(200).json({ replyCode: 200, replyText: obtenerHabilidades });
    } catch (error) {
        return res.status(400).json(error);
    }
};

const obtenerExperiencia = async (req, res) => {
    try {
        const obtenerExperiencia = await Experiencia.find({});
        return res.status(200).json({ replyCode: 200, replyText: obtenerExperiencia });
    } catch (error) {
        return res.status(400).json(error);
    }
};

const nuevaExperiencia = async (req, res) => {
    try {
        const nuevaExperiencia = new Experiencia(req.body);
        await nuevaExperiencia.save();
        return res.status(200).json({ replyCode: 200, replyText: "Experiencia Guardada Correctamente" });
    } catch (error) {
        return res.status(400).json(error);
    }
};

export { get, emailContacto, guardarInfo, obtenerProyectos, nuevoProyecto, nuevaHabilidad, obtenerHabilidades, obtenerExperiencia, nuevaExperiencia };
