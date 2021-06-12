import { Request, Response } from "express";
import connection from "../connection";
import { userExist } from "../function/userExist";
import { getTokenData } from "../services/authenticator";
import { authenticatorData } from "../types";

async function unfollowUser(req: Request, res: Response): Promise<void> {
  try {
    const authorization: string | undefined = req.headers.authorization;
    const userToUnfollowId: string = req.body.userToUnfollowId;

    if (!authorization) {
      res.statusCode = 403;
      throw new Error("not authorized");
    }
    if (!userToUnfollowId) {
      res.statusCode = 400;
      throw new Error("parameter is missing");
    }

    const idFollower: authenticatorData = getTokenData(authorization);
    userExist(idFollower.id)

    await connection.raw(`
      DELETE FROM followers_cookenu 
      WHERE followed_id = "${userToUnfollowId}";
    `);

    res.send({ message: "Unfollowed successfully" });
  } catch (error) {
    if(error.sqlMessage && error.sqlMessage.includes("unauthorized token")){
      res.statusCode = 403
    }
    
    res.send({ message: error.message || error.sqlMessage });
  }
}

export default unfollowUser;
