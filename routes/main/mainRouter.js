import express from "express";
import { get } from "../../controllers/mainController.js";

const router = express.Router();

router.get("/", get);

export default router;
