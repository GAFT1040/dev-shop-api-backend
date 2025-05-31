import { Request, Response, Router } from "express";
import * as controller from "../../controllers/publico/auth.controller";

const auth_router = Router();

auth_router.post("/login", controller.login);
auth_router.post("/registro", (req: Request, res: Response) => {});
auth_router.delete("/logout", (req: Request, res: Response) => {});

export default auth_router;
