import { Request, Response } from "express";
import connection from "../connection";
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
    const [userExist] = await connection.raw(`
      SELECT id FROM user_cookenu
      WHERE id = "${idUser.id}";
    `);
    if (!userExist[0]) {
      res.statusCode = 403;
      throw new Error("unauthorized token");
    }

    const [recipe] = await connection.raw(`
      SELECT * FROM recipe_cookenu
      WHERE id = "${id}";
    `);

    res.send(recipe[0]);
  } catch (error) {
    res.send({ message: error.message || error.sqlMessage });
  }
}

export default getRecipe;
