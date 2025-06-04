import "dotenv/config";
import { Request, Response, NextFunction } from "express";
import { IUsuario } from "../types/user";
import jwt from "jsonwebtoken";
import { IPayload } from "../types/payload";
import usuarioRepository from "../repository/usuario.repository";
import { AppError } from "../utils/appError";

declare global {
  namespace Express {
    interface Request {
      usuario?: IUsuario;
    }
  }
}

export default async function auth(
  req: Request,
  res: Response,
  next: NextFunction
) {
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

    if (!chave) throw new Error();

    const { id } = jwt.verify(token, chave) as IPayload;

    if (!id || typeof id !== "number") throw new Error();

    const usuario_db = await usuarioRepository.buscarPorID(id);

    if (!usuario_db) throw new Error();

    req.usuario = {
      id: usuario_db.id,
      nome: usuario_db.nome_completo,
      admin: usuario_db.admin,
      email: usuario_db.email,
    };
  } catch (error) {
    throw new AppError("Não autorizado", 401);
  }

  next();
}
