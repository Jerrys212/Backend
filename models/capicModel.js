import mongoose from "../routes/capic/capicMongoose.js";
import capicSchema from "../schemas/capicSchema.js";

const Miembros = mongoose.model("miembros", capicSchema.miembros, "miembros");
const Aportaciones = mongoose.model(
  "aportaciones",
  capicSchema.aportaciones,
  "aportaciones"
);
const Prestamos = mongoose.model(
  "prestamos",
  capicSchema.prestamos,
  "prestamos"
);
const Grupos = mongoose.model("grupos", capicSchema.grupo, "grupos");

export { Miembros, Aportaciones, Grupos, Prestamos };
