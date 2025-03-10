export class UserNameExistsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UserNameExistsError";
    Object.setPrototypeOf(this, UserNameExistsError.prototype);
  }
}
