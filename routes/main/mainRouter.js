import express from "express";
import {
    emailContacto,
    get,
    guardarInfo,
    nuevaExperiencia,
    nuevaHabilidad,
    nuevoProyecto,
    obtenerExperiencia,
    obtenerHabilidades,
    obtenerProyectos,
} from "../../controllers/mainController.js";

const router = express.Router();

router.get("/", get);
router.get("/obtenerProyectos", obtenerProyectos);
router.get("/obtenerHabilidades", obtenerHabilidades);
router.get("/obtenerExperiencia", obtenerExperiencia);
router.post("/enviarEmail", emailContacto);
router.post("/guardarInfo", guardarInfo);
router.post("/nuevoProyecto", nuevoProyecto);
router.post("/nuevaHabilidad", nuevaHabilidad);
router.post("/nuevaExperiencia", nuevaExperiencia);

export default router;
