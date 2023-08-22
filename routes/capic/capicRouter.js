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
  perfil,
} from "../../controllers/CapicController.js";
import capicAuth from "../../middlewares/capicMiddleware.js";

const router = express.Router();

//area publica
router.post("/login", autenticar);

//area privada
router.get("/obtenerMiembros", capicAuth, get);
router.post("/obtenerMiembro", capicAuth, getMiembroCurp);
router.get("/obtenerPerfil", capicAuth, perfil);
router.get("/obtenerMiembro/:id", capicAuth, getMiembro);
router.get("/obtenerGrupos", capicAuth, obtenerGrupos);
router.get("/obtenerGrupo/:grupo", capicAuth, obtenerGrupo);
router.get("/obtenerAportaciones", capicAuth, obtenerAportaciones);
router.get("/obtenerPrestamos", capicAuth, obtenerPrestamos);
router.post("/obtenerAportaciones", capicAuth, obtenerAportacionesMiembro);
router.post("/obtenerPrestamos", capicAuth, obtenerPrestamosMiembro);
router.post("/nuevoMiembro", capicAuth, insertarMiembro);
router.post("/nuevaAportacion", capicAuth, insertarAportacion);
router.post("/prestamoValido", capicAuth, prestamoValido);
router.post("/nuevoPrestamo", capicAuth, nuevoPrestamo);
router.post("/nuevoGrupo", capicAuth, nuevoGrupo);
router.put("/editarMiembro", capicAuth, editarMiembro);
router.delete("/eliminarMiembro/:id", capicAuth, eliminarMiembro);

export default router;
