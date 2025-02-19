import { Request, Response } from "express";
import UserService from "./userService";

/**
 * Handles the incoming requests and assigns workers
 */

export default class userController {
  private userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      if (req.method === "POST") {
        const { firstName, lastName } = req.body;

        if (!firstName || !lastName) {
          res
            .status(400)
            .json({ message: "First name and last name are required." });
          return;
        }
        const newUser = await this.userService.createUser(firstName, lastName);
        res.status(201).json(newUser);
      }
    } catch (error) {
      res.status(500).json({ message: "Could not create user", error });
    }
  };

  getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      if (req.method === "GET" && req.query.length) {
        const singleUser = await this.userService.getUser(req.query);
        res.status(200).json(singleUser);
      } else {
        const users = await this.userService.getUsers();
        res.status(200).json(users);
      }
    } catch (error) {
      res.status(500).json({ message: "Could not retrieve users", error });
    }
  };

  deleteUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      if (req.method === "DELETE") {
        const users = await this.userService.deleteUsers(req.query);
        res.status(200).json(users);
      }
    } catch (error) {
      res.status(500).json({ message: "Could not delete users", error });
    }
  };
}
