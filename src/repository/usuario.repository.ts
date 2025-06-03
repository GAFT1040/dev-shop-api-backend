import { Usuario } from "../generated/prisma";
import prisma from "../prisma";

async function buscarPoremail(email: string): Promise<Usuario | null> {
  return await prisma.usuario.findFirst({ where: { email } });
}

const usuarioRepository = {
  buscarPoremail,
};

export default usuarioRepository;
