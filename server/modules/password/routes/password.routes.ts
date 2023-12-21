import { Router } from "express";
import { authenticate, create } from "../controllers/password.controllers";

const passwordRouter = Router();

passwordRouter.post("/create", create);

passwordRouter.post("/authenticate", authenticate);

export default passwordRouter;
