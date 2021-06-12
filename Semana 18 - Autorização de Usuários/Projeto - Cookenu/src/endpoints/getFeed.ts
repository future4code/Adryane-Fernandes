import { Request, Response } from "express";
import connection from "../connection";
import { userExist } from "../function/userExist";
import { getTokenData } from "../services/authenticator";

async function getFeed(req: Request, res: Response): Promise<void> {
  try {
    const authorization: string | undefined = req.headers.authorization;
    if (!authorization) {
      res.statusCode = 403;
      throw new Error("not authorized");
    }

    const { id } = getTokenData(authorization!);
    userExist(id)

    const [profile] = await connection.raw(`
      SELECT recipe_cookenu.id, title, description, creation_date, user_cookenu.id, user_cookenu.name
      FROM user_cookenu
      JOIN recipe_cookenu
      ON user_id = user_cookenu.id;
    `)

    res.send(profile);
  } catch (error) {
    if(error.message.includes("jwt expired")){
      res.status(403).send({message: "Token expired"})
    }
    
    res.send({ message: error.message || error.sqlMessage });
  }
}

export default getFeed;
