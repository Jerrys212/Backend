import express from "express";
import {
  actualizarMesa,
  actualizarOrden,
  actualizarProdcuto,
  asignaroDesocuparMesa,
  borrarTodo,
  nuevaMesa,
  nuevaOrden,
  nuevoProducto,
  obtenerCategorias,
  obtenerMesasDisponibles,
  obtenerOrden,
  obtenerProductos,
} from "../../controllers/posController.js";

const router = express.Router();

router.get("/obtenerProductos", obtenerProductos);
router.get("/obtenerCategorias", obtenerCategorias);
router.get("/obtenerOrden/:noOrden", obtenerOrden);
router.get("/obtenerMesasDisponibles", obtenerMesasDisponibles);
router.post("/nuevoProducto", nuevoProducto);
router.post("/nuevaMesa", nuevaMesa);
router.post("/nuevaOrden", nuevaOrden);
router.put("/actualizarOrden", actualizarOrden);
router.put("/asignarMesa", asignaroDesocuparMesa);
router.put("/actualizarMesa", actualizarMesa);
router.delete("/borrar", borrarTodo);

export default router;
