import mongoose from "../routes/acustica/acusticaMongoose.js";
import dulceSchema from "../schemas/dulceSchema.js";

const Productos = mongoose.model(
  "productos",
  dulceSchema.productos,
  "productos"
);
const Ordenes = mongoose.model("ordenes", dulceSchema.ordenes, "ordenes");

export { Productos, Ordenes };
