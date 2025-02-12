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

  async getUser() {
    try {
      return await this.repository.getUser();
    } catch (error) {
      throw error;
    }
  }
}
