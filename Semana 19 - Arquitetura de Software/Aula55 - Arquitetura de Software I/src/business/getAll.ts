import { connection } from "../data/connection";
import selectAllUsers from "../data/selectAllUsers";
import verifyToken from "../data/verifyToken";
import { authenticatorData, user } from "../model/types";
import { getTokenData } from "../services/authenticator";


async function getAll(token: string): Promise<user[]> {
  try {
    const tokenData: authenticatorData = getTokenData(token);
    
    verifyToken(tokenData)
    const users = await selectAllUsers();

    return users
  } catch (error) {
    throw new Error(error.message);
  }
}

export default getAll;