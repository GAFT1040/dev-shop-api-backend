import { Response, Router } from "express";

const produtos_router = Router();

produtos_router.get("/", (_, res: Response) => {});
produtos_router.get("/:id   ", (_, res: Response) => {});

export default produtos_router;
