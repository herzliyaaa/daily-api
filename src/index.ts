import * as cors from "cors";
import * as express from "express";
import { Express, Request, Response } from "express";
import helmet from "helmet";
import * as morgan from "morgan";
import { User } from "./entities/user.entity";
import { createConnection, getConnection } from "typeorm";
import "reflect-metadata";

const app: Express = express();
const port: string = process.env.PORT || "4000";

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

createConnection()
  .then(async () => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });

app.get("/users", async (req: Request, res: Response) => {
  const userRepository = getConnection().getRepository(User);
  const users = await userRepository.find();
  res.json(users);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at port ${port}`);
});
