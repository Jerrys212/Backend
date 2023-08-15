import mongoose from "../routes/capic/capicMongoose.js";

const capicSchemas = {
  miembros: new mongoose.Schema(
    {
      nombre: {
        type: String,
        required: true,
      },
      ap: {
        type: String,
        required: true,
      },
      am: {
        type: String,
        required: true,
      },
      curp: {
        type: String,
        required: true,
      },
      celular: {
        type: String,
        required: true,
      },
      grupo: {
        type: String,
      },
      rol: {
        type: String,
        default: "user",
      },
    },
    { timestamps: true, versionKey: false }
  ),
  aportaciones: new mongoose.Schema(
    {
      miembro: { type: String, required: true },
      aporte: { type: Number, required: true },
      semana: { type: String, required: true },
      fecha: { type: String, required: true },
    },
    { timestamps: true, versionKey: false }
  ),
  prestamos: new mongoose.Schema(
    {
      miembro: { type: String, required: true },
      total: { type: Number, required: true },
      fecha: { type: String, required: true },
      plazo: { type: String, required: true },
    },
    { timestamps: true, versionKey: false }
  ),
  grupo: new mongoose.Schema({
    nombre: { type: String, required: true },
    cantidad: { type: Number, required: true },
    semanas: { type: Number, required: true },
  }),
};

export default capicSchemas;
