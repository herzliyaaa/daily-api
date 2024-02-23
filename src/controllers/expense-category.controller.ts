import { Request, Response } from "express";
import { ExpenseCategoryService } from "../services/expense-category.service";

export class ExpenseCategoryController {
  private readonly expenseCategoryService: ExpenseCategoryService;

  constructor(expenseCategoryService: ExpenseCategoryService) {
    this.expenseCategoryService = expenseCategoryService;
  }

  getAllExpenseCategory = async (req: Request, res: Response) => {
    try {
      const expenseCategorys = await this.expenseCategoryService.getAllExpenseCategories();

      res.status(200).send(expenseCategorys);
    } catch (error) {
      res.status(400).send(`Error saving timesheet data: ${error.message}`);
    }
  };

  getExpenseCategoryById = async (req: Request, res: Response) => {
    try {
      const expenseCategory = await this.expenseCategoryService.getExpenseCategoryById(
        Number(req.params.id)
      );
      res.status(200).send(expenseCategory);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  createExpenseCategory = async (req: Request, res: Response) => {
    try {
      const expenseCategory = await this.expenseCategoryService.addExpenseCategory(
        req.body
      );
      res.status(200).send(expenseCategory);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  updateExpenseCategory = async (req: Request, res: Response) => {
    try {
      const expenseCategory = await this.expenseCategoryService.updateExpenseCategory(
        Number(req.params.id),
        req.body
      );
      res.status(200).send(expenseCategory);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  removeExpenseCategory = async (req: Request, res: Response) => {
    try {
      const expenseCategory = await this.expenseCategoryService.removeExpenseCategory(req.params.id);

      res.status(200).send(expenseCategory);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
}
