import { Router } from "express";
import {
  authenticateOtps,
  sendEmailOtps,
} from "../controllers/otps.controllers";

const otpsRouter = Router();

otpsRouter.post("/send-email", sendEmailOtps);

otpsRouter.post("/authenticate", authenticateOtps);

export default otpsRouter;
