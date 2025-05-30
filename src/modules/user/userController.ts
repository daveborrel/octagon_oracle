import { Request, Response } from "express";
import UserService from "./userService";
import {
  InvalidCredentialsError,
  UserDoesNotExistError,
  UserNameExistsError,
} from "./userErrors";

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
        const { username, password } = req.body;

        if (!username || !password) {
          res.status(400).json({
            message:
              "Cannot create user. A username and password are required.",
          });
          return;
        }
        const newUser = await this.userService.createUser(username, password);
        res.status(201).json(newUser);
      }
    } catch (error) {
      if (error instanceof UserNameExistsError) {
        res.status(409).json({ error: error.message });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  };

  getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      if (req.method === "GET" && req.query.length) {
        const singleUser = await this.userService.getUserByQuery(req.query);
        res.status(200).json(singleUser);
      } else {
        const users = await this.userService.getListOfUser();
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

  login = async (req: Request, res: Response): Promise<void> => {
    try {
      if (req.method === "POST") {
        const { username, password } = req.body;

        if (!username || !password) {
          res.status(400).json({
            message: "Cannot Login. Requires username and password.",
          });
          return;
        }
        const userToken = await this.userService.login(username, password);

        res.status(200).json({
          token: userToken,
          success: true,
          redirectUrl: "/dashboard",
        });
      }
    } catch (error) {
      if (error instanceof InvalidCredentialsError) {
        res.status(401).json({ message: "Invalid credentials", error });
      } else if (error instanceof UserDoesNotExistError) {
        res.status(401).json({ message: "User does not exist.", error });
      } else {
        res.status(501).json({ message: "Internal server error." });
      }
    }
  };

  addFighterToUser = async (req: Request, res: Response): Promise<void> => {
    try {
      if (req.method === "PATCH") {
        const { userID, fighterID } = req.body;

        const singleUser = await this.userService.addFighterToUser(
          userID,
          fighterID
        );
        res.status(200).json(singleUser);
      }
    } catch (error) {
      res.status(500).json({ message: "Could not add fighter to user", error });
    }
  };
}
