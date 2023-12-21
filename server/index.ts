import express from "express";
import cors from "cors";
import appRouter from "./router/appRouter";
import { PORT } from "./lib/environmentals";
import { authenticateSessionTokenMiddleware } from "./modules/session/middlewares/session.middlewares";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/", appRouter);

app.post("/test", authenticateSessionTokenMiddleware, (req, res) => {
  res.send("It worked. This user is authenticated.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
