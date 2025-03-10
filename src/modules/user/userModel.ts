import { ObjectId } from "mongodb";
import Fighter from "../fighter/fighterModel";

/**
 * Contains the User model
 */

export default class User {
  id?: ObjectId;
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  favouriteFighters: Fighter[];

  // Creates a user with a username and password
  constructor(username, password) {
    (this.username = username),
      (this.password = password),
      (this.favouriteFighters = []);
  }
}
