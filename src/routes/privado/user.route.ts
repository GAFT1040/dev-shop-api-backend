import { Response, Router } from "express";

const usuario_rotas = Router();

usuario_rotas.get(`/user`, (_, res: Response) => {
  res.send("Essa é uma rota do usuário(privada)");
});

export default usuario_rotas;
