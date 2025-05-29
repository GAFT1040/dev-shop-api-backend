import { Response, Router } from "express";
import permissao from "../../middlewares/permissao";
import { ERole } from "../../types/user";
import admin_rotas from "./admin.route";
import usuario_rotas from "./user.route";
import rota_compartilhadas from "./compartilhado.route";

const rota_privadas = Router();

rota_privadas.use(
  (req, res, next) => permissao(req, res, next, ERole.ADMIM),
  admin_rotas
); //Somente Admin
rota_privadas.use(
  (req, res, next) => permissao(req, res, next, ERole.USER),
  usuario_rotas
); //Somente usuários
rota_privadas.use(permissao, rota_compartilhadas); //Ambos

export default rota_privadas;
