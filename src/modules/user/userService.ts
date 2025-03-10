import UserRepository from "./userRepository";
import { UserNameExistsError } from "./userErrors";

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

  async getUsers() {
    try {
      return await this.repository.getUsers();
    } catch (error) {
      throw error;
    }
  }
  async getUser(query) {
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
}
