import * as cors from "cors";
import * as express from "express";
import { Express, Request, Response } from "express";
import helmet from "helmet";
import * as morgan from "morgan";
import "reflect-metadata";
import connectDB from "./data-source";
import {
  GoogleSheetService,
  TimesheetService,
} from "./services/timesheet.service";

const app: Express = express();
const port: string = process.env.PORT || "4000";

app.get("/", (req: Request, res: Response) => {
  res.send(process.env.GOOGLE_AUTH_KEY);
});

connectDB;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const googleSheetsService = new GoogleSheetService(process.env.GOOGLE_AUTH_KEY);

const timesheetsService = new TimesheetService(connectDB);

app.get("/fetch-and-save", async (req: Request, res: Response) => {
  try {
    const spreadsheetId = "YOUR_SPREADSHEET_ID";
    const range = "Sheet1!A1:B10"; // Example range

    const data = await googleSheetsService.fetchData(spreadsheetId, range);

    await timesheetsService.saveData(data);

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at port ${port}`);
});
