import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import checklistRouter from "./routes/checklist/checklistRouter.js";
import posRouter from "./routes/pos/posRouter.js";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import routerMain from "./routes/main/mainRouter.js";
import capicRouter from "./routes/capic/capicRouter.js";
dotenv.config();

const __dirname = (metaURL) => path.dirname(fileURLToPath(metaURL));
const app = express();
app.use(express.json());
app.use(express.static(path.resolve(__dirname(import.meta.url), "./uploads")));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("common"));
app.use(cors({ origin: "*" }));

const PORT = process.env.PORT || 4000;

app.use("/", routerMain);
app.use("/checklist", checklistRouter);
app.use("/pos", posRouter);
app.use("/capic", capicRouter);

app.listen(PORT, () => {
  console.log(`servidor funcionando en ${PORT}`);
});
