import stytch from "stytch";
import { STYTCH_PROJECT_ID, STYTCH_SECRET } from "./environmentals";

const stytchClient = new stytch.Client({
  project_id: STYTCH_PROJECT_ID as string,
  secret: STYTCH_SECRET as string,
});

export default stytchClient;
