import mongoose from "../routes/main/mainMogoose.js";

const contactoSchema = {
    contactos: new mongoose.Schema(
        {
            nombre: {
                type: String,
            },
            correo: {
                type: String,
                trim: true,
            },
            mensaje: {
                type: String,
                trim: true,
            },
        },
        { timestamps: true, versionKey: false }
    ),
    proyectos: new mongoose.Schema({
        link: {
            type: String,
            required: true,
        },
        respositorio: {
            type: String,
            required: true,
        },
        nombre: {
            type: String,
            required: true,
        },
        descripcion: {
            type: String,
            required: true,
        },
    }),
    habilidades: new mongoose.Schema(
        {
            habilidad: {
                type: String,
                required: true,
            },
            porcentaje: {
                type: String,
                required: true,
            },
            css: {
                type: String,
                required: true,
            },
        },
        { versionKey: false, timestamps: true }
    ),
    experiencia: new mongoose.Schema(
        {
            empresa: {
                type: String,
                required: true,
            },
            imagen: {
                type: String,
                required: true,
            },
            descripcion: {
                type: Array,
                required: true,
            },
        },
        { versionKey: false, timestamps: true }
    ),
};

export default contactoSchema;
