import { Router } from "express";
import magicLinkRouter from "../modules/magic-link/routes/magic-link.routes";

const appRouter = Router();

appRouter.use("/", magicLinkRouter);

export default appRouter;
