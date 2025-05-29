import { Request, Response, NextFunction } from "express";
import { ERole, IUsuario } from "../types/user";

export default function permissao(
  req: Request,
  res: Response,
  next: NextFunction,
  necPermissao?: ERole
) {
  if (necPermissao !== null) {
    // const user = req.headers.usuario as unknown as IUsuario;
    // if (user.role !== necPermissao) {
    //   res.sendStatus(403);
    //   return;
    // }
  }

  next();
}
