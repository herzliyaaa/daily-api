import { TimesheetController } from "./timesheet.controller";
import { UserController } from "./user.controller";

import { TimesheetService } from "../services/timesheet.service";
import { UserService } from "../services/user.service";

import { ExpenseCategoryController } from "./expense-category.controller";
import { ExpenseCategoryService } from "../services/expense-category.service";

const timesheetService = new TimesheetService();
const timesheetController = new TimesheetController(timesheetService);

const userService = new UserService();
const userController = new UserController(userService);

const expenseCategoryService = new ExpenseCategoryService();
const expenseCategoryController = new ExpenseCategoryController(
  expenseCategoryService
);

export { timesheetController, userController, expenseCategoryController };
