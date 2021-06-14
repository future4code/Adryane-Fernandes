import { connection } from "../data/connection";
import selectUser from "../data/selectUser";
import { userLogin } from "../model/types";
import { generateToken } from "../services/authenticator";
import { compareHash } from "../services/hashManager";

async function login(user: userLogin): Promise<string> {
  try {
    if (!user.email || !user.password) {
      throw new Error("email and password are mandatory fields");
    }

    const result = await selectUser(user.email)
    if (!result) {
      throw new Error("email not registered");
    }

    const passwordIsCorrect = compareHash(user.password, result.password);
    if (!passwordIsCorrect) {
      throw new Error("incorrect password");
    }

    const dataUser = {
      id: result.id as string,
      role: result.role,
    };

    const token = generateToken(dataUser);

    return token;
  } catch (error) {
    throw new Error(error.message);
  }
}

export default login;
