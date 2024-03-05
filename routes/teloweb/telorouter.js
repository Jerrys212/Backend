import express from "express";
import { obtenerInformacion } from "../../controllers/teloController.js";

const router = express.Router();

router.post("/obtenerInformacion", obtenerInformacion);

export default router;
