import { Router } from "express";
import {
  buscarTodos,
  buscarPorId,
} from "../../controllers/publico/categoria.controller";

const categoria_router = Router();

categoria_router.get("/", buscarTodos);
categoria_router.get("/:id", buscarPorId);

export default categoria_router;
