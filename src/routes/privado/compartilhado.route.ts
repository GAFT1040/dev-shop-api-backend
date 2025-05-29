import { Response, Router } from "express";

const rota_compartilhadas = Router();

rota_compartilhadas.get(`/pedidos/:id`, (_, res: Response) => {
  res.send("Essa é uma rota dos pedidos(privada)");
});

export default rota_compartilhadas;
