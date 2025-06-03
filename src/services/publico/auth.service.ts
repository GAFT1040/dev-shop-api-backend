import { ILogin } from "../../middlewares/login";
import usuarioRepository from "../../repository/usuario.repository";
import bcrypt from "bcrypt";
import { IPayload } from "../../types/payload";
import Jwt from "jsonwebtoken";
import { AppError } from "../../utils/appError";

async function login(data: ILogin) {
  const usuario = await usuarioRepository.buscarPoremail(data.email);

  const secret = process.env.JWT_SECRET;

  if (!secret) throw new AppError("Erro interno de servidor!", 500);

  if (!usuario) throw new AppError("Usuário não encontrado!", 400);

  const match = bcrypt.compare(data.senha, usuario.senha);

  if (!match) throw new AppError("Usuário ou senha inválidos!", 400);

  const payload: IPayload = {
    id: usuario.id,
  };

  const token = Jwt.sign(payload, secret);

  /// Se tiver controle de sessão implemente aqui

  return token;
}

export { login };
