import { Response, Router } from "express";

const categoria_router = Router();

categoria_router.get("/", (_, res: Response) => {});
categoria_router.get("/:id", (_, res: Response) => {});

export default categoria_router;
