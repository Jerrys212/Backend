import mongoose from "../routes/capic/capicMongoose.js";
import bcrypt from "bcrypt";

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
      password: {
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

capicSchemas.miembros.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

capicSchemas.miembros.methods.comprobarPassword = async function (
  passwordFormulario
) {
  return await bcrypt.compare(passwordFormulario, this.password);
};

export default capicSchemas;
