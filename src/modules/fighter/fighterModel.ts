export default class Fighter {
  firstName: string;
  lastName: string;
  promotion: string | null;
  weightClass: number | null;
  wins: number | null;
  losses: number | null;
  age: number | null;
  imageURL: string;

  constructor(firstName, lastName) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.promotion = null),
      (this.weightClass = null),
      (this.wins = null),
      (this.losses = null),
      (this.age = null),
      (this.imageURL = "");
  }
}
