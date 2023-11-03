import express from "express";
import {
  agregarConceptos,
  getConceptos,
} from "../../controllers/acusticaController.js";

const router = express.Router();

router.get("/", getConceptos);
router.post("/agregarConceptos", agregarConceptos);
export default router;
