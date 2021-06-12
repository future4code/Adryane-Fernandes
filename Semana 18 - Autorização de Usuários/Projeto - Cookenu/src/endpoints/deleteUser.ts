import { Request, Response } from "express";
import connection from "../connection";
import { userExist } from "../function/userExist";
import { getTokenData } from "../services/authenticator";
import { authenticatorData, USER_ROLES } from "../types";

async function deleteUser(req: Request, res: Response): Promise<void> {
  try {
    const idUser: string = req.params.id;
    const token = req.headers.authorization as string;

    if (!idUser) {
      res.statusCode = 400;
      throw new Error("parameter is missing");
    }
    if (!token) {
      res.statusCode = 403;
      throw new Error("not authorized");
    }

    const tokenData: authenticatorData = getTokenData(token);
    userExist(tokenData.id)

    if(tokenData.role === USER_ROLES.NORMAL){
      res.statusCode = 403
      throw new Error("Not authorized. Only administrators can delete users.");

    }

    await connection.raw(`
      DELETE FROM followers_cookenu
      WHERE follower_id = "${idUser}"
    `)
    await connection.raw(`
      DELETE FROM recipe_cookenu
      WHERE user_id = "${idUser}"
    `)
    await connection.raw(`
      DELETE FROM user_cookenu
      WHERE id = "${idUser}"
    `)

    res.end()
  } catch (error) {
    if (error.message.includes("jwt expired")) {
      res.status(403).send({ message: "Token expired" });
    }

    res.send({ message: error.message || error.sqlMessage });
  }
}

export default deleteUser;