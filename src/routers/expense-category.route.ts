import { Router } from "express";

import { expenseCategoryController } from "../controllers";

const router = Router();
router.get("/category", expenseCategoryController.getAllExpenseCategory);
router.get("/category/:id", expenseCategoryController.getExpenseCategoryById);
router.post("/category/create", expenseCategoryController.createExpenseCategory);
router.patch("/category/:id", expenseCategoryController.updateExpenseCategory);
router.delete("/category/:id", expenseCategoryController.removeExpenseCategory);

export default router;
