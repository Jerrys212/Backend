import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import checklistRouter from "./routes/checklist/checklistRouter.js";
import posRouter from "./routes/pos/posRouter.js";
import morgan from "morgan";
import routerMain from "./routes/main/mainRouter.js";

const app = express();

app.use(express.json());
dotenv.config();

app.use(morgan("common"));
app.use(cors({ origin: "*" }));

const PORT = process.env.PORT || 4000;

app.use("/", routerMain);
app.use("/checklist", checklistRouter);
app.use("/pos", posRouter);

app.listen(PORT, () => {
  console.log(`servidor funcionando en ${PORT}`);
});
