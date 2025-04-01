import UserRepository from "./userRepository";
import { UserNameExistsError } from "./userErrors";
import { ObjectId } from "mongodb";

/**
 * Handles the business logic of creating users
 */

export default class UserService {
  private repository: UserRepository;

  constructor() {
    this.repository = new UserRepository(); // Initialize an UserRepository Index to access the data.
  }

  async createUser(username: string, password: string): Promise<any> {
    try {
      const user = await this.repository.findUserByUsername(username);
      if (user) {
        throw new UserNameExistsError("Username already exists");
      }
      return await this.repository.createUser(username, password);
    } catch (error) {
      throw error;
    }
  }

  async getListOfUser() {
    try {
      return await this.repository.getListOfUsers();
    } catch (error) {
      throw error;
    }
  }
  async getUserByQuery(query) {
    try {
      return await this.repository.getUser(query);
    } catch (error) {
      throw error;
    }
  }

  async deleteUsers(query) {
    try {
      if (query) {
        return await this.repository.deleteUser(query);
      }
    } catch (error) {
      throw error;
    }
  }

  async addFighterToUser(userID: ObjectId, fighterID: ObjectId) {
    try {
      return await this.repository.addFighterToUser(userID, fighterID);
    } catch (error) {
      throw error;
    }
  }
}
