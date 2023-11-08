import mongoose from "../routes/acustica/acusticaMongoose.js";
import dulceSchema from "../schemas/dulceSchema.js";

const Productos = mongoose.model(
  "productos",
  dulceSchema.productos,
  "productos"
);

export { Productos };
