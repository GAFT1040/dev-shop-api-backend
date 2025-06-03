import { ILogin } from "../../middlewares/login";
import usuarioRepository from "../../repository/usuario.repository";
import bcrypt from "bcrypt";
import { IPayload } from "../../types/payload";
import Jwt from "jsonwebtoken";

async function login(data: ILogin) {
  const usuario = await usuarioRepository.buscarPoremail(data.email);

  const secret = process.env.JWT_SECRET;

  if (!secret) throw new Error("Erro interno de servidor!");

  if (!usuario) throw new Error("Usuário não encontrado!");

  const match = bcrypt.compare(data.senha, usuario.senha);

  if (!match) throw new Error("Usuário ou senha inválidos!");

  const payload: IPayload = {
    id: usuario.id,
  };

  const token = Jwt.sign(payload, secret);

  /// Se tiver controle de sessão implemente aqui

  return token;
}

export { login };
