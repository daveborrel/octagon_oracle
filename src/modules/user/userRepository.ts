// userRepository.ts
import { collections } from "../../config/database/database";
import User from "./userModel";

export default class UserRepository {
  async createUser(firstName: string, lastName: string): Promise<any> {
    const newUser = new User(firstName, lastName);
    try {
      await collections.users?.insertOne(newUser);
      return newUser;
    } catch (error) {
      console.error("Unable to add user", error);
    }
  }

  async getUser(): Promise<any> {
    try {
      const user = await collections.users?.findOne({
        name: "Deluxe Loft Suite",
      });
      console.log(user._id);
      return user;
    } catch (error) {
      console.error("Could not retrieve user", error);
      throw error;
    }
  }
}
