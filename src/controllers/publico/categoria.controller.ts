import { Response, Request } from "express";
import * as service from "../../services/publico/categoria.service";

async function buscarTodos(req: Request, res: Response) {
  const data = service.buscarTodos();
  res.json({ data });
  return;
}

async function buscarPorId(req: Request, res: Response) {
  const id = Number(req.params.id);
  const categoria = service.buscarPorId(id);

  if (!categoria) {
    res.status(404).json({ mensagem: "Categoria não encontrada!" });
    return;
  }

  res.json({ data: categoria });
  return;
  //   return await service.buscarPorId(0);
}

export { buscarTodos, buscarPorId };
