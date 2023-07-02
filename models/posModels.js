import mongoose from "../routes/pos/posMongoose.js";
import posSchemas from "../schemas/posSchema.js";

const Productos = mongoose.model(
  "prodcutos",
  posSchemas.productos,
  "productos"
);

const Orden = mongoose.model("ordenes", posSchemas.comanda, "ordenes");
const Mesas = mongoose.model("mesas", posSchemas.mesas, "mesas");

export { Productos, Orden, Mesas };
