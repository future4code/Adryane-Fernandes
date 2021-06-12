import { Request, Response } from "express";
import connection from "../connection";
import { userExist } from "../function/userExist";
import { getTokenData } from "../services/authenticator";

async function getOtherProfile(req: Request, res: Response): Promise<void> {
  try {
    const idOtherProfile: string | undefined = req.params.id
    const token: string | undefined = req.headers.authorization
    if(!idOtherProfile){
      res.statusCode = 400
      throw new Error("parameter is missing");
    }
    if(!token){
      res.statusCode = 403
      throw new Error("not authorized");
    }

    const { id } = getTokenData(token!)
    userExist(id)

    const [profile] = await connection.raw(`
      SELECT id, name, email FROM user_cookenu
      WHERE id = "${idOtherProfile}";
    `)

    res.send(profile[0])
  } catch (error) {
    if(error.message.includes("jwt expired")){
      res.status(403).send({message: "Token expired"})
    }
    
    res.send({ message: error.message || error.sqlMessage });
  }
}

export default getOtherProfile