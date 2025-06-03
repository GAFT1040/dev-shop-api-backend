import "dotenv/config";
import express from "express";
import router from "./routes/index.route";
import logger from "./middlewares/logger";
import { errrorHandler } from "./middlewares/errorHandler.middilewares";

const app = express();
const porta = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use(logger);
app.use(router);
app.use(errrorHandler);

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta} `);
});
