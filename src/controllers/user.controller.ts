import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
  private readonly userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
    this.getAllUser = this.getAllUser.bind(this);
    this.getUserById = this.getUserById.bind(this);
    this.createUser = this.createUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }

  async getAllUser(req: Request, res: Response) {
    try {
      const users = await this.userService.getAllUsers();
      console.log("🚀 ~ UserController ~ getAllUser ~ users:", users);

      res.status(200).send(users);
    } catch (error) {
      res.status(400).send(`Error saving timesheet data: ${error.message}`);
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const user = await this.userService.getUserById(req.params.id);
      console.log("🚀 ~ UserController ~ getUserById ~ user:", user);
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const user = await this.userService.addUser(req.body);
      console.log("🚀 ~ UserController ~ getUserById ~ user:", user);
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const user = await this.userService.updateUser(req.params.id, req.body);
      console.log("🚀 ~ UserController ~ getUserById ~ user:", user);
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  async removeUser(req: Request, res: Response) {
    try {
      const user = await this.userService.removeUser(req.params.id);
      console.log("🚀 ~ UserController ~ getUserById ~ user:", user);
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}
