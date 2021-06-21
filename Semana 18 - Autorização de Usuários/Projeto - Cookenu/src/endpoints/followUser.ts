import { Request, Response } from "express";
import connection from "../connection";
import { userExist } from "../function/userExist";
import { getTokenData } from "../services/authenticator";
import { authenticatorData } from "../types";

async function followUser(req: Request, res: Response): Promise<void> {
  try {
    const token = req.headers.authorization as string;
    const userToFollowId: string = req.body.userToFollowId;

    if (!token) {
      res.statusCode = 403;
      throw new Error("not authorized");
    }
    if (!userToFollowId) {
      res.statusCode = 400;
      throw new Error("parameter is missing");
    }

    const idFollower: authenticatorData = getTokenData(token);
    userExist(idFollower.id)

    await connection.raw(`
      INSERT INTO followers_cookenu 
      VALUES(
        "${idFollower.id}",
        "${userToFollowId}"
      )
    `);

    res.send({ message: "Followed successfully" });
  } catch (error) {
    if(error.sqlMessage && error.sqlMessage.includes("unauthorized token")){
      res.statusCode = 403
    }
    if(error.message.includes("jwt expired")){
      res.status(403).send({message: "Token expired"})
    }
    
    res.send({ message: error.message || error.sqlMessage });
  }
}

export default followUser;
