import { ILogin } from "../../middlewares/login";

function login(data: ILogin) {
  console.log(data);
  /**
   * 1 . Consulatr o banco de dados
   * 2 . Validar a senha do usuário
   * 3 . Gerar um token JWT
   * 4 . Retornar o token JWT
   */
}

export { login };
