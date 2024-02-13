import { Router } from "express";

import { timesheetController } from "../controllers";

const router = Router();
router.get("/fetch", timesheetController.saveTimesheetData);

export default router;
