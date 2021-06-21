import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";

async function getProfile(req: Request, res: Response): Promise<void> {
  try {
    const token = req.headers.authorization as string;
    if (!token) {
      res.statusCode = 403;
      throw new Error("not authorized");
    }

    const { id } = getTokenData(token);

    const [profile] = await connection.raw(`
      SELECT id, name, email FROM user_cookenu
      WHERE id = "${id}"
    `)

    res.send(profile[0]);
  } catch (error) {
    if(error.message.includes("jwt expired")){
      res.status(403).send({message: "Token expired"})
    }
    
    res.send({ message: error.message || error.sqlMessage });
  }
}

export default getProfile;
