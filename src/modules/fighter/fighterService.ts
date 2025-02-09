import Fighter from "./fighterModel";

export default class FighterService {
  private fighters: Fighter[];

  constructor() {
    this.fighters = [];
  }

  createFighter(firstName: string, lastName: string): Fighter {
    const newFighter = new Fighter(firstName, lastName);
    this.fighters.push(newFighter);
    return newFighter;
  }

  getFighters(): Fighter[] {
    return this.fighters;
  }
}
