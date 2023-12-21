import { Router } from "express";
import { sendMagicLink } from "../controllers/magic-link.controllers";

const magicLinkRouter = Router();

magicLinkRouter.post("/send-magic-link", sendMagicLink);

export default magicLinkRouter;
