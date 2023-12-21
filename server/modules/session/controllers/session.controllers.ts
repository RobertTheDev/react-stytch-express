import stytchClient from "../../../lib/stytchClient";
import { Request, Response } from "express";

export async function authenticateSessionBySessionToken(
  req: Request,
  res: Response
) {
  try {
    const { sessionToken } = req.body;

    const response = await stytchClient.sessions.authenticate({
      session_token: sessionToken,
    });

    return res.json({ response });
  } catch (error) {
    return res.json(error);
  }
}

export async function authenticateSessionBySessionJwt(
  req: Request,
  res: Response
) {
  try {
    const { sessionJwt } = req.body;

    const response = await stytchClient.sessions.authenticate({
      session_jwt: sessionJwt,
    });

    return res.json({ response });
  } catch (error) {
    return res.json(error);
  }
}

export async function revokeSessionBySessionToken(req: Request, res: Response) {
  try {
    const { sessionToken } = req.body;

    const response = await stytchClient.sessions.revoke({
      session_token: sessionToken,
    });

    return res.json(response);
  } catch (error) {
    return res.json(error);
  }
}

export async function revokeSessionBySessionJwt(req: Request, res: Response) {
  try {
    const { sessionJwt } = req.body;

    const response = await stytchClient.sessions.revoke({
      session_jwt: sessionJwt,
    });

    return res.json(response);
  } catch (error) {
    return res.json(error);
  }
}
