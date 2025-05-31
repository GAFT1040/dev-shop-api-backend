import { ICategoria } from "../../types/categoria";

const data: ICategoria[] = [
  {
    id: 1,
    nome: "Computadores",
  },
  {
    id: 2,
    nome: "Celulares",
  },
];

function buscarTodos(): ICategoria[] {
  return data;
}

function buscarPorId(id: number): ICategoria | undefined {
  const categoria = data.find((cat) => cat.id === id);
  return categoria;
}

export { buscarTodos, buscarPorId };
