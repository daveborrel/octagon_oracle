// userRepository.ts
import { collections } from "./database";

export default class UserRepository {
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
