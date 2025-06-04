import { Request, Response } from "express";
import * as service from "../../../services/publico/auth.service";

async function login(req: Request, res: Response) {
  const token = await service.login(req.body);
  res.status(200).json({ mensagem: "Usuário auteticado com sucesso!", token });
  return;
}

async function registro(req: Request, res: Response) {
  const response = await service.registro(req.body);
  res
    .status(201)
    .json({ mensagem: `${response.nome_completo} criado(a) com sucesso.` });
  return;
}

export { login, registro };
