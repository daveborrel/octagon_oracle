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

  // createUser = (req: Request, res: Response): void => {
  //   try {
  //     const { firstName, lastName } = req.body;

  //     if (!firstName || !lastName) {
  //       res
  //         .status(400)
  //         .json({ message: "First name and last name are required." });
  //       return;
  //     }

  //     const newUser = this.userService.createUser(firstName, lastName);
  //     res.status(201).json(newUser);
  //   } catch (error) {
  //     res.status(500).json({ message: "Internal Server Error", error });
  //   }
  // };

  getUser = async (req: Request, res: Response): Promise<void> => {
    try {
      if (req.method === "GET") {
        const users = await this.userService.getUser();
        res.status(200).json(users);
      }
    } catch (error) {
      res.status(500).json({ message: "Could not retrieve users", error });
    }
  };
}
