import { Request, Response } from "express";
import { ExpenseService } from "../services/expense.service";

export class ExpenseController {
  private readonly expenseService: ExpenseService;

  constructor(expenseService: ExpenseService) {
    this.expenseService = expenseService;
  }

  getAllExpenses = async (req: Request, res: Response) => {
    try {
      const expenses = await this.expenseService.getAllExpenses();

      res.status(200).send(expenses);
    } catch (error) {
      res.status(400).send(`Error saving timesheet data: ${error.message}`);
    }
  };

  getExpenseById = async (req: Request, res: Response) => {
    try {
      const expense = await this.expenseService.getExpenseById(
        Number(req.params.id)
      );
      res.status(200).send(expense);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  createExpense = async (req: Request, res: Response) => {
    try {
      const expense = await this.expenseService.addExpense(req.body);
      res.status(200).send(expense);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  updateExpense = async (req: Request, res: Response) => {
    try {
      const expense = await this.expenseService.updateExpense(
        Number(req.params.id),
        req.body
      );
      res.status(200).send(expense);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  removeExpense = async (req: Request, res: Response) => {
    try {
      const expense = await this.expenseService.removeExpense(req.params.id);

      res.status(200).send(expense);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
}
