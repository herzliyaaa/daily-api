import { DataSource } from "typeorm";
import { GoogleSheetService } from "../utils/sheet.util";
import connectDB from "../data-source";

export class TimesheetService {
  private readonly connection: DataSource;
  private readonly googleSheetsService: GoogleSheetService;

  constructor() {
    this.connection = connectDB;
    this.googleSheetsService = new GoogleSheetService(
      process.env.GOOGLE_AUTH_KEY
    );
  }

  async saveData() {
    try {
      const sheetDetails = {
        range: "Sheet1!A1:B5",
        spreadsheetId: process.env.SPREADSHEET_ID,
      };

      const fetchSheetData = await this.googleSheetsService.fetchData(
        sheetDetails.spreadsheetId,
        sheetDetails.range
      );

      const repository = this.connection.getRepository("timesheet");

      const entities = fetchSheetData.map((row) =>
        repository.create({ property1: row[0], property2: row[1] })
      );

      await repository.save(entities);
    } catch (error) {
      console.log(error);
      throw new Error(`Failed to save data to the database: ${error}`);
    }
  }
}
