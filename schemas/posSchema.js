import mongoose from "../routes/pos/posMongoose.js";

const posSchemas = {
  productos: new mongoose.Schema(
    {
      nombre: {
        type: String,
        required: true,
      },
      descripcion: {
        type: String,
        required: true,
      },
      precio: {
        type: Number,
        required: true,
      },
      categoria: {
        type: String,
        required: true,
      },
      disponibilidad: {
        type: Boolean,
        default: true,
      },
    },
    { timestamps: true, versionKey: false }
  ),
  comanda: new mongoose.Schema(
    {
      noOrden: {
        type: Number,
      },
      fecha: {
        type: String,
        trim: true,
      },
      mesa: {
        type: Number,
      },
      elementos: {
        type: Array,
      },
      observaciones: {
        type: String,
        trim: true,
      },
      total: {
        type: Number,
      },
    },
    { timestamps: true, versionKey: false }
  ),
  mesas: new mongoose.Schema(
    {
      mesa: {
        type: String,
      },
      cantidadPersonas: {
        type: String,
      },
      disponible: {
        type: Boolean,
      },
    },
    { versionKey: false, timestamps: true }
  ),
};

export default posSchemas;
