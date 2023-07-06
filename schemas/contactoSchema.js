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
};

export default contactoSchema;
