import express from "express";
import {
  editarMiembro,
  eliminarMiembro,
  get,
  getMiembro,
  insertarAportacion,
  insertarMiembro,
  nuevoGrupo,
  obtenerAportaciones,
  obtenerGrupos,
  obtenerGrupo,
  prestamoValido,
  obtenerPrestamos,
  nuevoPrestamo,
  autenticar,
  getMiembroCurp,
  obtenerAportacionesMiembro,
  obtenerPrestamosMiembro,
} from "../../controllers/CapicController.js";

const router = express.Router();

router.get("/obtenerMiembros", get);
router.post("/obtenerMiembro", getMiembroCurp);
router.get("/obtenerMiembro/:id", getMiembro);
router.get("/obtenerGrupos", obtenerGrupos);
router.get("/obtenerGrupo/:grupo", obtenerGrupo);
router.get("/obtenerAportaciones", obtenerAportaciones);
router.get("/obtenerPrestamos", obtenerPrestamos);
router.post("/obtenerAportaciones", obtenerAportacionesMiembro);
router.post("/obtenerPrestamos", obtenerPrestamosMiembro);
router.post("/login", autenticar);
router.post("/nuevoMiembro", insertarMiembro);
router.post("/nuevaAportacion", insertarAportacion);
router.post("/prestamoValido", prestamoValido);
router.post("/nuevoPrestamo", nuevoPrestamo);
router.post("/nuevoGrupo", nuevoGrupo);
router.put("/editarMiembro", editarMiembro);
router.delete("/eliminarMiembro/:id", eliminarMiembro);

export default router;
