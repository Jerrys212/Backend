import express from "express";
import {
  agregarProducto,
  borrarProducto,
  borrarTodo,
  borrarVenta,
  nuevaVenta,
  obtenerCategorias,
  obtenerProductos,
  obtenerVenta,
  obtenerVentas,
} from "../../controllers/dulceController.js";

const router = express.Router();

router.get("/obtenerProductos", obtenerProductos);
router.get("/obtenerVentas", obtenerVentas);
router.get("/obtenerCategorias", obtenerCategorias);
router.get("/obtenerVenta/:id", obtenerVenta);
router.post("/agregarProducto", agregarProducto);
router.post("/nuevaVenta", nuevaVenta);
router.delete("/borrarVenta/:id", borrarVenta);
router.delete("/borrarProducto/:id", borrarProducto);
router.delete("/borrarTodo", borrarTodo);
export default router;
