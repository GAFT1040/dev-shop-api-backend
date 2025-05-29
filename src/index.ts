import express from "express";
import router from "./routes/index.route";
import logger from "./middlewares/logger";

const app = express();
const porta = 3000;

app.use(express.json());
app.use(logger);
app.use(router);

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta} `);
});
