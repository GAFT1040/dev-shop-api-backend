import express from "express";
import router from "./routes/index.route";

const app = express();
const porta = 3000;

app.use(express.json());
app.use(router);

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta} `);
});
