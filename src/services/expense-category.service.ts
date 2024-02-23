import { DataSource } from "typeorm";
import connectDB from "../data-source";
import { ExpenseCategory } from "../interfaces/ExpenseCategory";

export class ExpenseCategoryService {
  private readonly connection: DataSource;

  constructor() {
    this.connection = connectDB;
  }

  async getAllExpenseCategories() {
    try {
      const repository = this.connection.getRepository("expenseCategory");

      return await repository.find();
    } catch (error) {
      console.log(error);
      throw new Error(`Failed to save data to the database: ${error}`);
    }
  }

  async getExpenseCategoryById(expenseCategoryId: number) {
    try {
      const repository = this.connection.getRepository("expenseCategory");

      return await repository.findOneBy({
        id: expenseCategoryId,
      });
    } catch (error) {
      console.log(error);
      throw new Error(`Failed to save data to the database: ${error}`);
    }
  }

  async addExpenseCategory(expenseCategory: ExpenseCategory) {
    try {
      const { category } = expenseCategory;
      const repository = this.connection.getRepository("expenseCategory");

      return await repository.save({
        category,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async updateExpenseCategory(
    expenseCategoryId: number,
    expenseCategories: ExpenseCategory
  ) {
    try {
      const { category } = expenseCategories;
      const repository = this.connection.getRepository("expenseCategory");

      const expenseCategory = await repository.findOneBy({
        id: expenseCategoryId,
      });
      if (!expenseCategory) {
        throw new Error(`User with id ${expenseCategoryId} not found`);
      }

      expenseCategory.category = category;

      const updatedExpenseCategory = await repository.save(expenseCategory);

      return updatedExpenseCategory;
    } catch (error) {
      console.log(error);
      throw new Error(`Failed to update user: ${error.message}`);
    }
  }

  async removeExpenseCategory(expenseCategoryId) {
    const repository = this.connection.getRepository("expenseCategory");
    const expenseCategory = await repository.findOneBy({
      id: expenseCategoryId,
    });
    if (!expenseCategory) {
      throw new Error(`User with id ${expenseCategoryId} not found`);
    }

    return await repository.remove(expenseCategory);
  }
}
