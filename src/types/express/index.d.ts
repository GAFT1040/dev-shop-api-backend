import { IUsuario } from "../user";

declare global {
  namespace Express {
    interface Request {
      usuario?: IUsuario;
    }
  }
}
