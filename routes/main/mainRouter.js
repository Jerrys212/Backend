import express from "express";
import {
  emailContacto,
  get,
  guardarInfo,
  nuevoProyecto,
  obtenerProyectos,
} from "../../controllers/mainController.js";

const router = express.Router();

router.get("/", get);
router.get("/obtenerProyectos", obtenerProyectos);
router.post("/enviarEmail", emailContacto);
router.post("/guardarInfo", guardarInfo);
router.post("/nuevoProyecto", nuevoProyecto);

export default router;
