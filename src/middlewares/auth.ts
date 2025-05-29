import { Request, Response, NextFunction } from "express";
import { ERole, IUsuario } from "../types/user";

export default function auth(req: Request, res: Response, next: NextFunction) {
  const header = req.headers;
  const authorization = header.authorization;
  const token = authorization?.split(" ");

  if (!token) {
    res.sendStatus(401);
    return;
  }

  if (token[0] !== "Bearer") {
    res.sendStatus(401);
    return;
  }

  const usuario: IUsuario = {
    id: 0,
    nome: "",
    email: "",
    role: ERole.ADMIM,
  };

  next();
}
