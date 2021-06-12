import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { idGenerator } from "../services/idGenerator";

async function createRecipe(req: Request, res: Response): Promise<void> {
  try {
    const { title, description } = req.body;
    const authorization = req.headers.authorization;

    if (!title) {
      res.statusCode = 400;
      throw new Error("empty title");
    }
    if (!description) {
      res.statusCode = 400;
      throw new Error("empty description");
    }
    if (!authorization) {
      res.statusCode = 403;
      throw new Error("not authorized");
    }

    const idRecipe = idGenerator();
    const idUser = getTokenData(authorization);

    await connection.raw(`
      INSERT INTO recipe_cookenu (id, title, description, user_id)
      VALUES(
        "${idRecipe}",
        "${title}",
        "${description}",
        "${idUser.id}"
      );
    `);

    res.status(201).send({ message: "created" });
  } catch (error) {
    res.send({ message: error.message || error.sqlMessage });
  }
}

export default createRecipe;
