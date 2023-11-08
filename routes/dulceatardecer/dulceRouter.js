import express from "express";
import {
  agregarProducto,
  obtenerProductos,
} from "../../controllers/dulceController.js";

const router = express.Router();

router.get("/obtenerProductos", obtenerProductos);
router.post("/agregarProducto", agregarProducto);
export default router;
