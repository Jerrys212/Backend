import mongoose from "../routes/main/mainMogoose.js";
import contactoSchema from "../schemas/contactoSchema.js";

const Contacto = mongoose.model(
  "contacto",
  contactoSchema.contactos,
  "contactos"
);

export default Contacto;
