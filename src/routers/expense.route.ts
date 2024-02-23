import { Router } from "express";

import { expenseController } from "../controllers";

const router = Router();
router.get("/expenses", expenseController.getAllExpenses);
router.get("/expense/:id", expenseController.getExpenseById);
router.post("/expense/create", expenseController.createExpense);
router.patch("/expense/:id", expenseController.updateExpense);
router.delete("/expense/:id", expenseController.removeExpense);

export default router;
