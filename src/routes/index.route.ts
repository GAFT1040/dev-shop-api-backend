import { Router } from "express";
import rota_publicas from "./publico/index.routes";

import auth from "../middlewares/auth";
import rota_privadas from "./privado/index.route";

const router = Router();

router.use(rota_publicas);
router.use(auth, rota_privadas);

export default router;
