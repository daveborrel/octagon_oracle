// userRepository.ts
import { ObjectId } from "mongodb";
import { collections } from "../../config/database/database";
import User from "./userModel";
import * as dotenv from "dotenv";

import { UserDoesNotExistError, InvalidCredentialsError } from "./userErrors";

const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;
const EXPIRY_TIME = 3600;

const jwt = require("jsonwebtoken");

/**
 * Handles calling the MongoDB database
 */

export default class UserRepository {
  async createUser(username: string, password: string): Promise<any> {
    const hashedPassword = this.hashPassword(password);
    const newUser = new User(username, hashedPassword);
    try {
      await collections.users?.insertOne(newUser);
      return newUser;
    } catch (error) {
      console.error("Unable to add user", error);
    }
  }

  /**
   * Returns the users with a limit of 10 per request
   * @returns
   */
  async getListOfUsers(): Promise<any> {
    try {
      const user = await collections.users?.find({}, { limit: 10 }).toArray();
      console.log("Retrieved 10 Users");
      return user;
    } catch (error) {
      console.error("Could not retrieve list of users", error);
      throw error;
    }
  }

  /**
   * Returns a specific user based on the query
   * @returns
   */
  async getUser(query): Promise<any> {
    try {
      const user = await collections.users?.findOne(query);
      console.log(user);
      return user;
    } catch (error) {
      console.error("Could not retrieve user", error);
      throw error;
    }
  }

  async findUserByUsername(username): Promise<any> {
    try {
      const user = await collections.users?.findOne({ username: username });
      return user;
    } catch (error) {
      console.error("User does not exist", error);
      throw error;
    }
  }

  async deleteUser(query): Promise<any> {
    try {
      const user = await collections.users?.deleteOne(query);
      console.log(user);
      return user;
    } catch (error) {
      console.error("Could not delete user", error);
      throw error;
    }
  }

  async addFighterToUser(userID: ObjectId, fighterID: ObjectId): Promise<any> {
    try {
      console.log(userID);
      const user = await collections.users?.updateOne(
        { _id: new ObjectId(userID) },
        {
          $push: {
            favouriteFighters: new ObjectId(fighterID),
          },
        }
      );
      console.log(user);
      return user;
    } catch (error) {
      console.error("Could not add fighter to the user", error);
      throw error;
    }
  }

  async login(username: string, password: string): Promise<any> {
    dotenv.config();
    const user = await collections.users?.findOne({ username: username });

    if (!user) {
      throw new UserDoesNotExistError("Username does not exist.");
    }

    if (bcrypt.compareSync(password, user.password)) {
      return jwt.sign(user, process.env.MY_SECRET, { expiresIn: EXPIRY_TIME });
    } else {
      throw new InvalidCredentialsError("Invalid credentials.");
    }
  }

  private hashPassword(password: string): string {
    const salt = bcrypt.salt(SALT_ROUNDS);
    const hashedValue = bcrypt.hashSync(password, salt);
    return hashedValue;
  }
}
