import { CustomError } from "../error/CustomError";

function passwordIsValid(password: string): void {
  if (password.length < 6) {
    throw new CustomError(404, "Password must be more than 6 characters.");
  }
}

export default passwordIsValid;