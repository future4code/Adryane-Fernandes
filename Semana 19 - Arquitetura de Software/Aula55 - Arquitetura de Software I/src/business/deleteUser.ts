import deleteUserData from "../data/deleteUserData";
import verifyToken from "../data/verifyToken";
import { authenticatorData, USER_ROLES } from "../model/types";
import { getTokenData } from "../services/authenticator";


async function deleteUser(token: string, id: string): Promise<void> {
  try {
    if(!token){
      throw new Error("not authorization");
    }

    const tokenData: authenticatorData = getTokenData(token)
    verifyToken(tokenData)

    if(tokenData.role === USER_ROLES.NORMAL){
      throw new Error("Only administrators can delete a user");
    }

    deleteUserData(id)
  } catch (error) {
    throw new Error(error.message);
  }
}

export default deleteUser;