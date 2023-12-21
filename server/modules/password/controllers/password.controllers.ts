import stytchClient from "../../../lib/stytchClient";
import { Request, Response } from "express";

export async function create(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const response = await stytchClient.passwords.create({
      email,
      password,
      session_duration_minutes: 43200,
    });

    return res.json({ response });
  } catch (error) {
    return res.json(error);
  }
}

export async function authenticate(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const response = await stytchClient.passwords.authenticate({
      email,
      password,
      session_duration_minutes: 43200,
    });

    return res.json(response);
  } catch (error) {
    return res.json(error);
  }
}

export async function startPasswordResetByEmail(req: Request, res: Response) {
  try {
    const { email } = req.body;

    const response = await stytchClient.passwords.email.resetStart({
      email,
    });

    return res.json(response);
  } catch (error) {
    return res.json(error);
  }
}

export async function passwordResetByEmail(req: Request, res: Response) {
  try {
    const { token, password } = req.body;

    const response = await stytchClient.passwords.email.reset({
      token,
      password,
    });

    return res.json(response);
  } catch (error) {
    return res.json(error);
  }
}

export async function passwordResetByExistingPassword(
  req: Request,
  res: Response
) {
  try {
    const { email, newPassword, existingPassword } = req.body;

    const response = await stytchClient.passwords.existingPassword.reset({
      email,
      new_password: newPassword,
      existing_password: existingPassword,
    });

    return res.json(response);
  } catch (error) {
    return res.json(error);
  }
}

export async function passwordResetByExistingSessionToken(
  req: Request,
  res: Response
) {
  try {
    const { password, sessionToken } = req.body;

    const response = await stytchClient.passwords.sessions.reset({
      password,
      session_token: sessionToken,
    });

    return res.json(response);
  } catch (error) {
    return res.json(error);
  }
}

export async function passwordResetByExistingSessionJwt(
  req: Request,
  res: Response
) {
  try {
    const { password, sessionJwt } = req.body;

    const response = await stytchClient.passwords.sessions.reset({
      password,
      session_jwt: sessionJwt,
    });

    return res.json(response);
  } catch (error) {
    return res.json(error);
  }
}

export async function passwordStrengthCheck(req: Request, res: Response) {
  try {
    const { password } = req.body;

    const response = await stytchClient.passwords.strengthCheck({
      password,
    });

    return res.json(response);
  } catch (error) {
    return res.json(error);
  }
}
