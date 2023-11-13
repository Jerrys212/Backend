import express from "express";
import {
  agregarProducto,
  borrarTodo,
  borrarVenta,
  nuevaVenta,
  obtenerProductos,
  obtenerVenta,
  obtenerVentas,
} from "../../controllers/dulceController.js";

const router = express.Router();

router.get("/obtenerProductos", obtenerProductos);
router.get("/obtenerVentas", obtenerVentas);
router.get("/obtenerVenta/:id", obtenerVenta);
router.post("/agregarProducto", agregarProducto);
router.post("/nuevaVenta", nuevaVenta);
router.delete("/borrarVenta/:id", borrarVenta);
router.delete("/borrarTodo", borrarTodo);
export default router;
