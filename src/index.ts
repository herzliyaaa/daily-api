import * as cors from "cors";
import * as express from "express";
import { Express, Request, Response } from "express";
import helmet from "helmet";
import * as morgan from "morgan";
import connectDB from "./data-source"
import "reflect-metadata";
import { google } from 'googleapis';

const sheets = google.sheets({
  version: 'v4',
  auth: "",
});

const app: Express = express();
const port: string = process.env.PORT || "4000";

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

connectDB

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get('/data', async (req, res) => {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: '',
      range: 'Sheet1!A1:B10'
    })
    
  } catch (error) {
    
  }
})
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at port ${port}`);
});
