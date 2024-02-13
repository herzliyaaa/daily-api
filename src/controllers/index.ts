import { TimesheetController } from "./timesheet.controller";
import { UserController } from "./user.controller";
import { TimesheetService } from "../services/timesheet.service";
import { UserService } from "../services/user.service";

const timesheetService = new TimesheetService();
const timesheetController = new TimesheetController(timesheetService);

const userService = new UserService();
const userController = new UserController(userService);

export { timesheetController, userController };
