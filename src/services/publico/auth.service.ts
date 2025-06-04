import { ILogin } from "../../middlewares/login";
import usuarioRepository from "../../repository/usuario.repository";
import bcrypt from "bcrypt";
import { IPayload } from "../../types/payload";
import Jwt from "jsonwebtoken";
import { AppError } from "../../utils/appError";
import { IRegistro } from "../../types/registro";

async function login(data: ILogin) {
  const usuario = await usuarioRepository.buscarPoremail(data.email);

  const secret = process.env.JWT_SECRET;

  if (!secret) throw new AppError("Erro interno de servidor!", 500);

  if (!usuario) throw new AppError("Usuário não encontrado!", 400);

  const match = await bcrypt.compare(data.senha, usuario.senha);

  if (!match) throw new AppError("Usuário ou senha inválidos!", 400);

  const payload: IPayload = {
    id: usuario.id,
  };

  const token = Jwt.sign(payload, secret);

  /// Se tiver controle de sessão implemente aqui

  return token;
}

async function registro(data: IRegistro) {
  const usuario_existente = await usuarioRepository.buscarPoremail(data.email);

  if (usuario_existente)
    throw new AppError("Já existe um usuário com este e-mail.", 409);

  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(data.senha, salt);

  const { senha: _, ...usuario } = await usuarioRepository.criar({
    nome: data.nome,
    email: data.email,
    senha: hash,
    admin: false,
  });

  return usuario;
}
export { login, registro };
