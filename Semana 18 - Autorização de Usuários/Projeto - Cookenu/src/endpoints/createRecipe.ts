import { Request, Response } from "express";
import connection from "../connection";
import { currentDate } from "../function/currentDate";
import { getTokenData } from "../services/authenticator";
import { idGenerator } from "../services/idGenerator";
import { authenticatorData } from "../types";

async function createRecipe(req: Request, res: Response): Promise<void> {
  try {
    const { title, description } = req.body;
    const token = req.headers.authorization as string;

    if (!title) {
      res.statusCode = 400;
      throw new Error("empty title");
    }
    if (!description) {
      res.statusCode = 400;
      throw new Error("empty description");
    }
    if (!token) {
      res.statusCode = 403;
      throw new Error("not authorized");
    }

    const idRecipe: string = idGenerator();
    const idUser: authenticatorData = getTokenData(token);

    await connection.raw(`
      INSERT INTO recipe_cookenu (id, title, description, creation_date, user_id)
      VALUES(
        "${idRecipe}",
        "${title}",
        "${description}",
        "${currentDate()}",
        "${idUser.id}"
      );
    `);

    res.status(201).send({ message: "created" });
  } catch (error) {
    if(error.message.includes("jwt expired")){
      res.status(403).send({message: "Token expired"})
    }
    
    res.send({ message: error.message || error.sqlMessage });
  }
}

export default createRecipe;
