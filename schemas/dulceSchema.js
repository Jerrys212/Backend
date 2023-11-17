import mongoose from "../routes/dulceatardecer/dulceMongoose.js";
import bcrypt from "bcrypt";

const dulceSchema = {
  admin: new mongoose.Schema(
    {
      usuario: {
        type: String,
        required: true,
        trim: true,
      },
      password: {
        type: String,
        required: true,
      },
    },
    { versionKey: false, timestamps: true }
  ),
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

dulceSchema.admin.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

dulceSchema.admin.methods.comprobarPassword = async function (
  passwordFormulario
) {
  return await bcrypt.compare(passwordFormulario, this.password);
};

export default dulceSchema;
