export class FighterExistsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "FighterExistsError";
    Object.setPrototypeOf(this, FighterExistsError.prototype);
  }
}
