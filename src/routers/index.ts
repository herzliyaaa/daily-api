import { Router } from "express";
import userRouter from "./user.route";

const routes = Router();

routes.use("/v1/users", userRouter);

export default routes;
