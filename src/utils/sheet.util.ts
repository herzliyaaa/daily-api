import { google, Auth  } from "googleapis";

export class GoogleSheetService {
  private readonly sheets: any;

  constructor(refreshToken: string) {
    const authClient = new google.auth.OAuth2();
    authClient.setCredentials({ refresh_token: refreshToken });
    this.sheets = google.sheets({ version: 'v4', auth: authClient });
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