import { google } from "googleapis";
import { DataSource } from "typeorm";

export class GoogleSheetService {
  private readonly sheets: any;

  constructor(authClient: any) {
    this.sheets = google.sheets({ version: "v4", auth: authClient });
  }

  async fetchData(spreadsheetId: string, range: string) {
    try {
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
      });
      return response.data.values;
    } catch (error) {
      throw new Error(`Failed to fetch data from Google Sheets: ${error}`);
    }
  }
}

export class TimesheetService {
  private readonly connection: DataSource;

  constructor(connection: DataSource) {
    this.connection = connection;
  }

  async saveData(data: any[]) {
    try {
      const repository = this.connection.getRepository("timesheet");
      console.log(
        "🚀 ~ GoogleSheetService ~ saveData ~ repository:",
        repository
      );
      // Assuming 'SomeEntity' is your entity name
      // Create entity instances and save to the database
      const entities = data.map((row) =>
        repository.create({ property1: row[0], property2: row[1] })
      );
      await repository.save(entities);
    } catch (error) {
      throw new Error(`Failed to save data to the database: ${error}`);
    }
  }
}
