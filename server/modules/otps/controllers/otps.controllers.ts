import stytchClient from "../../../lib/stytchClient";
import { Request, Response } from "express";

export async function sendEmailOtps(req: Request, res: Response) {
  try {
    const { email } = req.body;

    const response = await stytchClient.otps.email.send({
      email,
    });

    return res.json({ response });
  } catch (error) {
    return res.json(error);
  }
}

export async function authenticateOtps(req: Request, res: Response) {
  try {
    const { code, methodId } = req.body;

    const response = await stytchClient.otps.authenticate({
      code,
      method_id: methodId,
    });

    return res.json({ response });
  } catch (error) {
    return res.json(error);
  }
}
