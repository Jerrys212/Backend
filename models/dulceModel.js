import mongoose from "../routes/acustica/acusticaMongoose.js";
import dulceSchema from "../schemas/dulceSchema.js";

const Productos = mongoose.model(
  "productos",
  dulceSchema.productos,
  "productos"
);
const Ventas = mongoose.model("ventas", dulceSchema.ventas, "ventas");

export { Productos, Ventas };
