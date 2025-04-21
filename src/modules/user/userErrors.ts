export class UserNameExistsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UserNameExistsError";
    Object.setPrototypeOf(this, UserNameExistsError.prototype);
  }
}

export class InvalidCredentialsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidCredentialsError";
    Object.setPrototypeOf(this, InvalidCredentialsError.prototype);
  }
}

export class UserDoesNotExistError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UserDoesNotExistError";
    Object.setPrototypeOf(this, UserDoesNotExistError.prototype);
  }
}
