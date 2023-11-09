import express from "express";
import {
  agregarProducto,
  borrarTodo,
  obtenerProductos,
} from "../../controllers/dulceController.js";

const router = express.Router();

router.get("/obtenerProductos", obtenerProductos);
router.post("/agregarProducto", agregarProducto);
router.delete("/borrarTodo", borrarTodo);
export default router;
