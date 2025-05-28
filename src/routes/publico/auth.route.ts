import { Request, Response, Router } from "express";

const auth_router = Router();

auth_router.post("/login", (req: Request, res: Response) => {});
auth_router.post("/registro", (req: Request, res: Response) => {});
auth_router.delete("/logout", (req: Request, res: Response) => {});

export default auth_router;
