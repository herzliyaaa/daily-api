import { Router } from "express";
import timesheetRouter from "./timesheet.route";
import userRouter from "./user.route";

const routes = Router();
routes.use("/", timesheetRouter);
routes.use("/", userRouter);

export default routes;
