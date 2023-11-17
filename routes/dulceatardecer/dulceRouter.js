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
router.get("/obtenerProductos", dulceAuth, dulceAuth, obtenerProductos);
router.get("/obtenerVentas", dulceAuth, obtenerVentas);
router.get("/obtenerCategorias", dulceAuth, obtenerCategorias);
router.get("/obtenerVenta/:id", dulceAuth, obtenerVenta);
router.post("/registrar", registrar);
router.post("/autenticar", autenticar);
router.post("/agregarProducto", dulceAuth, agregarProducto);
router.post("/nuevaVenta", dulceAuth, nuevaVenta);
router.delete("/borrarVenta/:id", dulceAuth, borrarVenta);
router.delete("/borrarProducto/:id", dulceAuth, borrarProducto);
router.delete("/borrarTodo", dulceAuth, borrarTodo);

export default router;
