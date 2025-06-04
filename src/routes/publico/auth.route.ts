import { Request, Response, Router } from "express";
import * as controller from "../../controllers/publico/auth/auth.controller";
import validar from "../../middlewares/validar.middlewares";
import { login_schema } from "../../controllers/publico/auth/login.schema";
import { registro_schema } from "../../controllers/publico/auth/registro.schema";

const auth_router = Router();

auth_router.post(
  "/login",
  (req, res, next) => {
    validar(req, res, next, login_schema);
  },
  controller.login
);
auth_router.post(
  "/registro",
  (req, res, next) => {
    validar(req, res, next, registro_schema);
  },
  controller.registro
);
auth_router.delete("/logout", (req: Request, res: Response) => {});

export default auth_router;
