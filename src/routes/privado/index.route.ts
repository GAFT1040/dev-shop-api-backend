import { Response, Router } from "express";
import permissao from "../../middlewares/permissao";
import admin_rotas from "./admin.route";
import usuario_rotas from "./user.route";
import rota_compartilhadas from "./compartilhado.route";

const rota_privadas = Router();

rota_privadas.use(
  "/admin",
  (req, res, next) => permissao(req, res, next, true),
  admin_rotas
); //Somente Admin
rota_privadas.use(
  "/user",
  (req, res, next) => permissao(req, res, next, false),
  usuario_rotas
); //Somente usuários
rota_privadas.use("/shared", rota_compartilhadas); //Ambos

export default rota_privadas;
