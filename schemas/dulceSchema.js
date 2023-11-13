import mongoose from "../routes/dulceatardecer/dulceMongoose.js";

const dulceSchema = {
  productos: new mongoose.Schema(
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
      categoria: {
        type: String,
        trim: true,
      },
      precio: {
        type: Number,
      },
    },
    { versionKey: false, timestamps: true }
  ),

  ventas: new mongoose.Schema(
    {
      orden: {
        type: String,
        trim: true,
      },
      fecha: {
        type: String,
        trim: true,
      },
      productos: [Object],
      total: {
        type: Number,
      },
    },
    { timestamps: true, versionKey: false }
  ),
};

export default dulceSchema;
