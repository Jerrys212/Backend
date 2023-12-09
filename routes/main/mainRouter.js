import express from "express";
import {
  emailContacto,
  get,
  guardarInfo,
  nuevaHabilidad,
  nuevoProyecto,
  obtenerHabilidades,
  obtenerProyectos,
} from "../../controllers/mainController.js";

const router = express.Router();

router.get("/", get);
router.get("/obtenerProyectos", obtenerProyectos);
router.get("/obtenerHabilidades", obtenerHabilidades);
router.post("/enviarEmail", emailContacto);
router.post("/guardarInfo", guardarInfo);
router.post("/nuevoProyecto", nuevoProyecto);
router.post("/nuevaHabilidad", nuevaHabilidad);

export default router;
