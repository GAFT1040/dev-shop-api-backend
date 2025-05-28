import { Router } from "express";
import categoria_router from "./categoria.route";
import produtos_router from "./produto.route";
import auth_router from "./auth.route";

const rota_publicas = Router();

rota_publicas.use("/categoria", categoria_router);
rota_publicas.use("/produtos", produtos_router);
rota_publicas.use("/auth", auth_router);

export default rota_publicas;
