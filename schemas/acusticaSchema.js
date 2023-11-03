import mongoose from "../routes/acustica/acusticaMongoose.js";

const acusticaSchema = {
  sectores: new mongoose.Schema(
    {
      nombre: {
        type: String,
      },
      descripcion: {
        type: String,
        trim: true,
      },
      imagen: {
        type: String,
        trim: true,
      },
    },
    { versionKey: false, timestamps: true }
  ),
};

export default acusticaSchema;
