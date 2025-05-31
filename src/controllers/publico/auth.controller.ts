import { Request, Response } from "express";
import joi from "joi";
import * as service from "../../services/publico/auth.service";

const login_schema = joi.object({
  email: joi.string().required(),
  senha: joi.string().required(),
});

function login(req: Request, res: Response) {
  const { error, value } = login_schema.validate(req.body);

  if (error || !req.body) {
    res.status(400).json({
      mensagem: "Dados inválidos ou incorretos!",
      detalhe: error
        ? error.details[0].message
        : "Corpo da requisição não existe!",
    });
    return;
  }

  const temp = service.login(value);
  console.log("Controller: ", temp);

  res.sendStatus(200);
}

export { login };
