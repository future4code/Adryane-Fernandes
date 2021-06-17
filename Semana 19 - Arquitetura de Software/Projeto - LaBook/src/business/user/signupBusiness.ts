import { connection } from "../../data/BaseDatabase";
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

    await connection.raw(`
      INSERT INTO user_labook (id, name, email, password)
      VALUES(
        "${id}",
        "${user.name}",
        "${user.email}",
        "${hashPassword}"
      )
    `);

    const token: string = generateToken({ id });

    return token
  } catch (error) {
    throw new Error(error.message);
  }
}
