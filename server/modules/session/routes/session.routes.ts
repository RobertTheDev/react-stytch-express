import { Router } from "express";
import {
  authenticateSessionBySessionJwt,
  authenticateSessionBySessionToken,
  revokeSessionBySessionJwt,
  revokeSessionBySessionToken,
} from "../controllers/session.controllers";

const sessionRouter = Router();

sessionRouter.get("/session-jwt", authenticateSessionBySessionJwt);

sessionRouter.get("/session-token", authenticateSessionBySessionToken);

sessionRouter.post("/revoke/session-jwt", revokeSessionBySessionJwt);

sessionRouter.post("/revoke/session-token", revokeSessionBySessionToken);

export default sessionRouter;
