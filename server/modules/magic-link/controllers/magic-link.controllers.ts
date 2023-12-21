import { HOST, MAGIC_LINK_URL } from "../../../lib/environmentals";
import stytchClient from "../../../lib/stytchClient";
import { Request, Response } from "express";

export async function sendMagicLink(req: Request, res: Response) {
  try {
    const { email } = req.body;

    const response = await stytchClient.magicLinks.email.loginOrCreate({
      email,
      login_magic_link_url: `${HOST}/${MAGIC_LINK_URL}`,
      signup_magic_link_url: `${HOST}/${MAGIC_LINK_URL}`,
    });

    return res.json(response);
  } catch (error) {
    return res.json(error);
  }
}
