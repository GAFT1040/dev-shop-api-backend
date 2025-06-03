import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/appError";

export function errrorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err);

  if (err instanceof AppError) {
    res.status(err.status).json({ mensagem: err.message });
    return;
  }

  if (err.isJoi) {
    res.status(400).json({
      mensagem: err.mesage,
    });
    return;
  }

  res.status(500).json({ mensagem: "Erro interno do servidor." });
  return;
}
