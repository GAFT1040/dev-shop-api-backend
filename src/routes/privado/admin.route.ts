import { Response, Router } from "express";

const admin_rotas = Router();
admin_rotas.get(`/dashboard`, (_, res: Response) => {
  res.send("Essa é uma rota de dashboard(privada)");
});

export default admin_rotas;
