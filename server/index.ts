import express from "express";
import cors from "cors";
import appRouter from "./router/appRouter";
import { PORT } from "./lib/environmentals";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/", appRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
