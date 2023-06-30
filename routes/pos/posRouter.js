import express from "express";
import {
  actualizarOrden,
  actualizarProdcuto,
  nuevaOrden,
  nuevoProducto,
  obtenerOrden,
  obtenerProductos,
} from "../../controllers/posController.js";

const router = express.Router();

router.get("/obtenerProductos", obtenerProductos);
router.get("/obtenerOrden/:noOrden", obtenerOrden);
router.post("/nuevoProducto", nuevoProducto);
router.post("/nuevaOrden", nuevaOrden);
router.put("/actualizarOrden", actualizarOrden);
router.put("/actualizarProducto", actualizarProdcuto);

export default router;
