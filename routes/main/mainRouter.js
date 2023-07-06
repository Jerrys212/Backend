import express from "express";
import {
  emailContacto,
  get,
  guardarInfo,
} from "../../controllers/mainController.js";

const router = express.Router();

router.get("/", get);
router.post("/enviarEmail", emailContacto);
router.post("/guardarInfo", guardarInfo);

export default router;
