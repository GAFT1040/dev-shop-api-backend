import "dotenv/config";
import { Request, Response, NextFunction } from "express";
import { ERole, IUsuario } from "../types/user";
import jwt from "jsonwebtoken";
import { IPayload } from "../types/payload";

declare global {
  namespace Express {
    interface Request {
      usuario?: IUsuario;
    }
  }
}

export default function auth(req: Request, res: Response, next: NextFunction) {
  const header = req.headers;
  const authorization = header.authorization;

  if (!authorization) {
    res.sendStatus(401);
    return;
  }

  const [schema, token] = authorization.split(" ");

  if (!schema || !token || schema !== "Bearer") {
    res.sendStatus(401);
    return;
  }

  try {
    const chave = process.env.JWT_SECRET;

    if (!chave) throw new Error("Chave secreta do JWT não foi especeficada");

    const decoded = jwt.verify(token, chave) as IPayload;

    const usuario: IUsuario = {
      id: 0,
      nome: "",
      email: "",
      role: ERole.ADMIM,
    };

    req.usuario = usuario;

    console.log(decoded);
  } catch (error) {
    res.sendStatus(401);
  }

  next();
}
