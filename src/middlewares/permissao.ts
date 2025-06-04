import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/appError";

export default function permissao(
  req: Request,
  res: Response,
  next: NextFunction,
  isAdmin: boolean
) {
  if (req.usuario!.admin !== isAdmin)
    throw new AppError("Usuário sem permissão de acesso!");
  next();
}
