import { UserDatabase } from "../../data/user/UserDatabase";
import { user } from "../../model/types";
import { generateToken } from "../../services/authenticator";
import { generateId } from "../../services/generateId";
import { hashCreate } from "../../services/hashManager";

export async function signupBusiness(user: user): Promise<string> {
  try {
    if (!user.name) {
      throw new Error("Field 'name' is empty, and it is mandatory.");
    }
    if (!user.email) {
      throw new Error("Field 'email' is empty, and it is mandatory.");
    }
    if (!user.password) {
      throw new Error("Field 'password' is empty, and it is mandatory.");
    }

    const id: string = generateId();

    if(!id){
      throw new Error("Error generating id");
    }

    const hashPassword: string = hashCreate(user.password);
    if(!hashPassword){
      throw new Error("Password Encryption Error");
    }

    const dataUser = {
      id,
      name: user.name,
      email: user.email,
      password: hashPassword
    }

    const database = new UserDatabase()
    database.insertUser(dataUser)

    const token: string = generateToken({ id });
    if(!hashPassword){
      throw new Error("Not authorized. Unable to generate authorization.");
    }

    return token
  } catch (error) {
    throw new Error(error.message);
  }
}
