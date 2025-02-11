// userRepository.ts
import { collections } from "./database";
import User from "./userModel";

export default class UserRepository {
  async getUser(id: string): Promise<User | null> {
    return await collections.users?.findOne({ _id: id });
  }
}
