import { Request, Response } from "express";
import connection from "../connection";
import { userExist } from "../function/userExist";
import { getTokenData } from "../services/authenticator";
import { authenticatorData } from "../types";

async function getRecipe(req: Request, res: Response): Promise<void> {
  try {
    const id: string = req.params.id;
    const authorization: string | undefined = req.headers.authorization;
    if (!id) {
      res.statusCode = 400;
      throw new Error("parameter is missing");
    }
    if (!authorization) {
      res.statusCode = 403;
      throw new Error("not authorized");
    }

    const idUser: authenticatorData = getTokenData(authorization!);
    userExist(idUser.id)

    const [recipe] = await connection.raw(`
      SELECT * FROM recipe_cookenu
      WHERE id = "${id}";
    `);

    res.send(recipe[0]);
  } catch (error) {
    if(error.message.includes("jwt expired")){
      res.status(403).send({message: "Token expired"})
    }
    
    res.send({ message: error.message || error.sqlMessage });
  }
}

export default getRecipe;
