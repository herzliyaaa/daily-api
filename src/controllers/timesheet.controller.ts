import { Request, Response } from "express";
import { TimesheetService } from "../services/timesheet.service";

export class TimesheetController {
  private readonly timesheetService: TimesheetService;

  constructor(timesheetService: TimesheetService) {
    this.timesheetService = timesheetService;
    this.saveTimesheetData = this.saveTimesheetData.bind(this);
  }

  async saveTimesheetData(req: Request, res: Response) {
    try {
      await this.timesheetService.saveData();

      res.status(200).send("Timesheet data saved successfully");
    } catch (error) {
      res.status(400).send(`Error saving timesheet data: ${error.message}`);
    }
  }
}
