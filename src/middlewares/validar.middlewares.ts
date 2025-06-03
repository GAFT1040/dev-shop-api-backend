import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export default function validar(
  req: Request,
  res: Response,
  next: NextFunction,
  schema: Joi.ObjectSchema
) {
  const { error } = schema.validate(req.body);

  if (error || !req.body) {
    const mensagem = error
      ? error.details[0].message
      : "Corpo de requisição não definido.";
    res.status(400).json({ mensagem });
    return;
  }
  next();
}
