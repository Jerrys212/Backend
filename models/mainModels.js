import mongoose from "../routes/main/mainMogoose.js";
import contactoSchema from "../schemas/contactoSchema.js";

const Contacto = mongoose.model("contacto", contactoSchema.contactos, "contactos");
const Proyectos = mongoose.model("propyecto", contactoSchema.proyectos, "proyectos");

const Habilidades = mongoose.model("habilidades", contactoSchema.habilidades, "habilidades");

const Experiencia = mongoose.model("experiencia", contactoSchema.experiencia, "experiencia");

export { Contacto, Proyectos, Habilidades, Experiencia };
