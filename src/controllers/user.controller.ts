import { Request, Response } from "express";
import { UserService } from "../services/user.service";


export class UserController {
  private readonly userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  getAllUser = async (req: Request, res: Response) => {
    try {
      const users = await this.userService.getAllUsers();

      res.status(200).send(users);
    } catch (error) {
      res.status(400).send(`Error saving timesheet data: ${error.message}`);
    }
  };

  getUserById = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.getUserById(Number(req.params.id));
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  createUser = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.addUser(req.body);
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  updateUser = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.updateUser(req.params.id, req.body);
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  removeUser = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.removeUser(req.params.id);

      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
}
