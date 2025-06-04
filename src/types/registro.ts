import { IUsuario } from "./user";

export interface IRegistro extends Omit<IUsuario, "id" | "role"> {
  senha: string;
}
