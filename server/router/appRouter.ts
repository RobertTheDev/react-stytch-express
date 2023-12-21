import { Router } from "express";
import magicLinkRouter from "../modules/magic-link/routes/magic-link.routes";
import passwordRouter from "../modules/password/routes/password.routes";
import otpsRouter from "../modules/otps/routes/otps.routes";
import sessionRouter from "../modules/session/routes/session.routes";
import totpsRouter from "../modules/totps/routes/totps.routes";

const appRouter = Router();

appRouter.use("/magic-link", magicLinkRouter);
appRouter.use("/otps", otpsRouter);
appRouter.use("/password", passwordRouter);
appRouter.use("/session", sessionRouter);
appRouter.use("/totps", totpsRouter);

export default appRouter;
