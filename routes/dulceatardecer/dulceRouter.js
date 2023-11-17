import express from "express";
import {
  agregarProducto,
  autenticar,
  borrarProducto,
  borrarTodo,
  borrarVenta,
  nuevaVenta,
  obtenerCategorias,
  obtenerProductos,
  obtenerVenta,
  obtenerVentas,
  perfil,
  registrar,
} from "../../controllers/dulceController.js";
import dulceAuth from "../../middlewares/dulceMiddleware.js";

const router = express.Router();

router.get("/perfil", dulceAuth, perfil);
router.get("/obtenerProductos", dulceAuth, obtenerProductos);
router.get("/obtenerVentas", obtenerVentas);
router.get("/obtenerCategorias", obtenerCategorias);
router.get("/obtenerVenta/:id", obtenerVenta);
router.post("/registrar", registrar);
router.post("/autenticar", autenticar);
router.post("/agregarProducto", agregarProducto);
router.post("/nuevaVenta", nuevaVenta);
router.delete("/borrarVenta/:id", borrarVenta);
router.delete("/borrarProducto/:id", borrarProducto);
router.delete("/borrarTodo", borrarTodo);

export default router;
