import { Router } from "express";
import timesheetRouter from "./timesheet.route";
import userRouter from "./user.route";
import expenseCategoryRouter from "./expense-category.route";

const routes = Router();
routes.use("/", timesheetRouter);
routes.use("/", userRouter);
routes.use("/", expenseCategoryRouter);

export default routes;
