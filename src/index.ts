import "reflect-metadata";
import { Express, Response } from "express";
import * as cors from "cors";
import * as express from "express";
import * as morgan from "morgan";
import helmet from "helmet";
import routes from "./routers";

const app: Express = express();
const port: string = process.env.PORT || "4000";

app.get("/", (res: Response) => {
  res.send("NODEJS, EXPRESS, TYPESCRIPT + TYPEORM API");
});

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(routes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at port ${port}`);
});
