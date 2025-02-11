import UserRepository from "./userRepository";

/**
 * Handles the business logic of creating users
 */

export default class UserService {
  private repository: UserRepository;

  constructor() {
    this.repository = new UserRepository(); // Initialize an UserRepository Index to access the data.
  }

  // createUser(firstName: string, lastName: string): User {
  //   const newUser = new User(firstName, lastName);
  //   this.users.push(newUser);
  //   return newUser;
  // }

  async getUser(id: string) {
    // Add any business logic here
    return await this.repository.getUser(id);
  }
}
