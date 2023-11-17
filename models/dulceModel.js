import mongoose from "../routes/dulceatardecer/dulceMongoose.js";
import dulceSchema from "../schemas/dulceSchema.js";

const Productos = mongoose.model(
  "productos",
  dulceSchema.productos,
  "productos"
);
const Ventas = mongoose.model("ventas", dulceSchema.ventas, "ventas");
const Admin = mongoose.model("admin", dulceSchema.admin, "admin");

export { Productos, Ventas, Admin };
