import User from "./userModel";

/**
 * Handles the business logic of creating users
 */

export default class UserService {
  private users: User[];

  constructor() {
    this.users = []; // Initialize an empty array to store users
  }

  createUser(firstName: string, lastName: string): User {
    const newUser = new User(firstName, lastName);
    this.users.push(newUser);
    return newUser;
  }

  getUsers(): User[] {
    return this.users;
  }
}
