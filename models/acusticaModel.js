import mongoose from "../routes/acustica/acusticaMongoose.js";
import acusticaSchema from "../schemas/acusticaSchema.js";

const Sectores = mongoose.model(
  "sectores",
  acusticaSchema.sectores,
  "sectores"
);

export { Sectores };
