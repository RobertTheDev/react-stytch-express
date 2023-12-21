import stytchClient from "../../../lib/stytchClient";

const authenticateSessionTokenMiddleware = (req, res, next) => {
  const sessionToken = req.headers.sessiontoken;

  stytchClient.sessions
    .authenticate({
      session_token: sessionToken,
    })

    .then((res) => {
      console.log(res);

      next();
    })
    .catch((err) => {
      res.status(401).json(err);
    });
};

const authenticateSessionJwtMiddleware = (req, res, next) => {
  const sessionjwt = req.headers.sessionjwt;
  stytchClient.sessions
    .authenticate({
      session_jwt: sessionjwt,
    })

    .then((res) => {
      console.log(res);

      next();
    })
    .catch((err) => {
      res.status(401).json(err);
    });
};

export { authenticateSessionTokenMiddleware, authenticateSessionJwtMiddleware };
