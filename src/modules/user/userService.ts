import UserRepository from "./userRepository";

/**
 * Handles the business logic of creating users
 */

export default class UserService {
  private repository: UserRepository;

  constructor() {
    this.repository = new UserRepository(); // Initialize an UserRepository Index to access the data.
  }

  async createUser(firstName: string, lastName: string): Promise<any> {
    try {
      return await this.repository.createUser(firstName, lastName);
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
