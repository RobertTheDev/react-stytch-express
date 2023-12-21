import { Router } from "express";
import {
  getTotpRecoveryCodes,
  recoverTotp,
  authenticateTotp,
  createTotp,
} from "../controllers/totps.controllers";

const totpsRouter = Router();

totpsRouter.get("/recovery-codes", getTotpRecoveryCodes);

totpsRouter.post("/authenticate", authenticateTotp);

totpsRouter.post("/create", createTotp);

totpsRouter.post("/recover", recoverTotp);

export default totpsRouter;
