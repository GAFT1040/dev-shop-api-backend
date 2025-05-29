export enum ERole {
  USER = "U",
  ADMIM = "A",
}

export interface IUsuario {
  id: number | undefined;
  nome: string;
  email: string;
  role: ERole;
}
