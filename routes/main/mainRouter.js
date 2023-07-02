import express from "express";
import { emailContacto, get } from "../../controllers/mainController.js";

const router = express.Router();

router.get("/", get);
router.post("/enviarEmail", emailContacto);

export default router;
