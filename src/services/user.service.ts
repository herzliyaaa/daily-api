import { DataSource } from "typeorm";
import connectDB from "../data-source";
export class UserService {
  private readonly connection: DataSource;

  constructor() {
    this.connection = connectDB;
  }

  async getAllUsers() {
    try {
      const repository = this.connection.getRepository("user");

      return await repository.find();
    } catch (error) {
      console.log(error);
      throw new Error(`Failed to save data to the database: ${error}`);
    }
  }

  async getUserById(userId) {
    try {
      const repository = this.connection.getRepository("user");

      return await repository.findOneBy({
        id: userId,
      });
    } catch (error) {
      console.log(error);
      throw new Error(`Failed to save data to the database: ${error}`);
    }
  }

  async addUser(user) {
    try {
      const { name, email, username, password } = user;
      const repository = this.connection.getRepository("user");

      return await repository.save({
        name,
        email,
        username,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async updateUser(userId: any, user: any) {
    try {
      const { name, email, username, password } = user;
      const repository = this.connection.getRepository("user");

      // Find the user to update
      const userToUpdate = await repository.findOneBy({ id: userId });
      if (!userToUpdate) {
        throw new Error(`User with id ${userId} not found`);
      }

      // Update user properties
      userToUpdate.name = name;
      userToUpdate.email = email;
      userToUpdate.username = username;
      userToUpdate.password = password;

      // Save the updated user
      const updatedUser = await repository.save(userToUpdate);

      return updatedUser;
    } catch (error) {
      console.log(error);
      throw new Error(`Failed to update user: ${error.message}`);
    }
  }

  async removeUser(userId) {
    const repository = this.connection.getRepository("user");
    const userToRemove = await repository.findOneBy({ id: userId });
    if (!userToRemove) {
      throw new Error(`User with id ${userId} not found`);
    }

    return await repository.remove(userToRemove);
  }
}
