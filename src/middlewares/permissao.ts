import { Request, Response, NextFunction } from "express";
import { ERole } from "../types/user";

export default function permissao(
  req: Request,
  res: Response,
  next: NextFunction,
  necPermissao?: ERole
) {
  if (req.usuario!.role !== necPermissao) {
    res.sendStatus(403);
    return;
  }

  next();
}
