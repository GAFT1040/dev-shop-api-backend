import { Response, Router } from "express";

const rota_privadas = Router();

rota_privadas.get(`/user`, (_, res: Response) => {
  res.send("Essa é uma rota de usuário(privada)");
});

export default rota_privadas;
