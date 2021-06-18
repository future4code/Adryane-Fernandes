import { UserDatabase } from "../../data/user/UserDatabase";
import { user } from "../../model/types";
import { generateToken } from "../../services/authenticator";
import { generateId } from "../../services/generateId";
import { hashCreate } from "../../services/hashManager";
import { CustomError } from "../error/CustomError";
import { ValidateData } from "../validation/ValidateData";

export async function signupBusiness(user: user): Promise<string> {
  try {
    const validateData = new ValidateData()
    const database = new UserDatabase()

    validateData.isEmpty(user.name, "name")
    validateData.isEmpty(user.email, "email")
    validateData.isEmpty(user.password, "password")

    const id: string = generateId();
    validateData.internalError(id, "Error generating id")

    const hashPassword: string = hashCreate(user.password);
    validateData.internalError(hashPassword, "Password encryption error")

    const dataUser = {
      id,
      name: user.name,
      email: user.email,
      password: hashPassword
    }

    database.insertUser(dataUser)

    const token: string = generateToken({ id });
    validateData.notAuthorization(token)
    
    return token
  } catch (error) {
    throw new CustomError(error.statusCode, error.message);
  }
}
