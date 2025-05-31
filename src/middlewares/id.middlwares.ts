import { NextFunction, Request, Response } from "express";

export default function validarIdMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = Number(req.params.id);
  if (isNaN(id) || id <= 0) {
    res.status(400).json({ mensagem: "O campo 'id' é inválido!" });
    return;
  }
  next();
}
