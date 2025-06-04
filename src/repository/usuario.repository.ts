import { Usuario } from "../generated/prisma";
import prisma from "../prisma";
import { IRegistro } from "../types/registro";

async function buscarPoremail(email: string): Promise<Usuario | null> {
  return await prisma.usuario.findFirst({ where: { email } });
}

async function criar(data: IRegistro, admin: boolean = false) {
  const usuario = await prisma.usuario.create({
    data: {
      nome_completo: data.nome,
      email: data.email,
      senha: data.senha,
      admin,
    },
  });

  return usuario;
}

async function buscarPorID(id: number) {
  return await prisma.usuario.findFirst({ where: { id } });
}

const usuarioRepository = {
  buscarPoremail,
  criar,
  buscarPorID,
};

export default usuarioRepository;
