import express from "express";
import { get } from "../../controllers/checklistController.js";

const router = express.Router();

router.get("/", get);

export default router;
