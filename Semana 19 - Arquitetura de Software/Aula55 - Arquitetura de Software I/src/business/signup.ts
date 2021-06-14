import insertUser from "../data/insertUser";
import { user, USER_ROLES } from "../model/types";
import { generateToken } from "../services/authenticator";
import { generateId } from "../services/generateId";
import { createHash } from "../services/hashManager";

async function signup(user: user): Promise<string> {
  try {
    if (!user.name || !user.email || !user.password) {
      throw new Error("name, email and password are mandatory fields");
    }
    if (!(user.role in USER_ROLES)) {
      throw new Error("role can only be 'NORMAL' or 'ADMIN'");
    }

    const id: string = generateId();
    const hashPassword: string = createHash(user.password);

    const userData = {
      ...user,
      id,
      password: hashPassword
    }
    insertUser(userData)

    const token: string = generateToken({ id, role: user.role });

    return token
  } catch (error) {
    throw new Error(error.message);
  }
}

export default signup
