import Fighter from "../fighter/fighterModel";

export default class User {
  firstName: string;
  lastName: string;
  favouriteFighters: Fighter[];

  constructor(firstName, lastName) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.favouriteFighters = []);
  }
}
