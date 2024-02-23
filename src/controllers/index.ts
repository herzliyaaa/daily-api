import { TimesheetController } from "./timesheet.controller";
import { UserController } from "./user.controller";
import { ExpenseCategoryController } from "./expense-category.controller";
import { ExpenseController } from "./expense.controller";

import { TimesheetService } from "../services/timesheet.service";
import { UserService } from "../services/user.service";
import { ExpenseCategoryService } from "../services/expense-category.service";
import { ExpenseService } from "../services/expense.service";

const timesheetService = new TimesheetService();
const userService = new UserService();
const expenseCategoryService = new ExpenseCategoryService();
const expenseService = new ExpenseService();

const timesheetController = new TimesheetController(timesheetService);
const userController = new UserController(userService);
const expenseCategoryController = new ExpenseCategoryController(
  expenseCategoryService
);
const expenseController = new ExpenseController(expenseService);

export {
  timesheetController,
  userController,
  expenseCategoryController,
  expenseController,
};
