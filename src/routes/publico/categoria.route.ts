import { Response, Router } from "express";

const categoria_router = Router();

categoria_router.get("/", (_, res: Response) => {
  res.sendStatus(200);
});
categoria_router.get("/:id", (_, res: Response) => {});

export default categoria_router;
