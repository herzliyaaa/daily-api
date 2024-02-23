import { Router } from "express";
import timesheetRouter from "./timesheet.route";
import userRouter from "./user.route";
import expenseCategoryRouter from "./expense-category.route";
import expenseRouter from "./expense.route"


const routes = Router();
routes.use("/", timesheetRouter);
routes.use("/", userRouter);
routes.use("/", expenseCategoryRouter);
routes.use("/", expenseRouter)

export default routes;
