import { Request, Response } from "express";
import stytchClient from "../../../lib/stytchClient";

export async function createTotp(req: Request, res: Response) {
  try {
    const { userId } = req.body;

    const response = await stytchClient.totps.create({
      user_id: userId,
    });

    return res.json({ response });
  } catch (error) {
    return res.json(error);
  }
}

export async function authenticateTotp(req: Request, res: Response) {
  try {
    const { totpCode, userId } = req.body;

    const response = await stytchClient.totps.authenticate({
      totp_code: totpCode,
      user_id: userId,
    });

    return res.json({ response });
  } catch (error) {
    return res.json(error);
  }
}

export async function getTotpRecoveryCodes(req: Request, res: Response) {
  try {
    const { userId } = req.body;

    const response = await stytchClient.totps.recoveryCodes({
      user_id: userId,
    });

    return res.json({ response });
  } catch (error) {
    return res.json(error);
  }
}

export async function recoverTotp(req: Request, res: Response) {
  try {
    const { recoveryCode, userId } = req.body;

    const response = await stytchClient.totps.recover({
      user_id: userId,
      recovery_code: recoveryCode,
    });

    return res.json({ response });
  } catch (error) {
    return res.json(error);
  }
}
