import { connection } from "../../data/BaseDatabase";
import { UserDatabase } from "../../data/user/UserDatabase";
import { user } from "../../model/types";
import { generateToken } from "../../services/authenticator";
import { generateId } from "../../services/generateId";
import { hashCreate } from "../../services/hashManager";

export async function signupBusiness(user: user): Promise<string> {
  try {
    if (!user.name || !user.email || !user.password) {
      throw new Error('"name", "email" and "password" must be provided');
    }

    const id: string = generateId();

    const hashPassword: string = hashCreate(user.password);

    const dataUser = {
      id,
      name: user.name,
      email: user.email,
      password: hashPassword
    }

    const database = new UserDatabase()
    database.insertUser(dataUser)

    const token: string = generateToken({ id });

    return token
  } catch (error) {
    throw new Error(error.message);
  }
}
