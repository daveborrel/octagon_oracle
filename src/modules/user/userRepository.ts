// userRepository.ts
import { collections } from "../../config/database/database";
import User from "./userModel";

/**
 * Handles calling the MongoDB database
 */

export default class UserRepository {
  async createUser(username: string, password: string): Promise<any> {
    const newUser = new User(username, password);
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
  async getUsers(): Promise<any> {
    try {
      const user = await collections.users?.find({}, { limit: 10 }).toArray();
      console.log("Retrieved 10 Users");
      return user;
    } catch (error) {
      console.error("Could not retrieve user", error);
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
}
