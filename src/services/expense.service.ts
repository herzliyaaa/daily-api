import { DataSource } from "typeorm";
import connectDB from "../data-source";
import { Expense } from "../interfaces/Expense";

export class ExpenseService {
  private readonly connection: DataSource;

  constructor() {
    this.connection = connectDB;
  }

  async getAllExpenses() {
    try {
      const repository = this.connection.getRepository("expense");

      return await repository.find();
    } catch (error) {
      console.log(error);
      throw new Error(`Failed to save data to the database: ${error}`);
    }
  }

  async getExpenseById(expenseId: number) {
    try {
      const repository = this.connection.getRepository("expense");

      return await repository.findOneBy({
        id: expenseId,
      });
    } catch (error) {
      console.log(error);
      throw new Error(`Failed to save data to the database: ${error}`);
    }
  }

  async addExpense(expense: Expense) {
    try {
      const { description, amount, userId, expenseCategoryId } = expense;
      const repository = this.connection.getRepository("expense");

      return await repository.save({
        description,
        amount,
        userId,
        expenseCategoryId,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async updateExpense(expenseId: number, expenseCategories: Expense) {
    try {
      const { description, amount, userId, expenseCategoryId } =
        expenseCategories;
      const repository = this.connection.getRepository("expense");

      const expense = await repository.findOneBy({
        id: expenseId,
      });
      if (!expense) {
        throw new Error(`User with id ${expenseId} not found`);
      }

      expense.description = description;
      expense.amount = amount;
      expense.userId = userId;
      expense.expenseCategoryId = expenseCategoryId;

      const updatedExpense = await repository.save(expense);

      return updatedExpense;
    } catch (error) {
      console.log(error);
      throw new Error(`Failed to update user: ${error.message}`);
    }
  }

  async removeExpense(expenseId) {
    const repository = this.connection.getRepository("expense");
    const expense = await repository.findOneBy({
      id: expenseId,
    });
    if (!expense) {
      throw new Error(`User with id ${expenseId} not found`);
    }

    return await repository.remove(expense);
  }
}
