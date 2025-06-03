import { Request, Response } from "express";
import * as service from "../../../services/publico/auth.service";

async function login(req: Request, res: Response) {
  const token = await service.login(req.body);
  res
    .sendStatus(200)
    .json({ mensagem: "Usuário auteticado com sucesso!", token });
  return;
}

export { login };
