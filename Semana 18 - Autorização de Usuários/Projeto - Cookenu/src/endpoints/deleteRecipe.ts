import { Request, Response } from "express";
import connection from "../connection";
import { userExist } from "../function/userExist";
import { getTokenData } from "../services/authenticator";
import { authenticatorData, USER_ROLES } from "../types";

async function deleteRecipe(req: Request, res: Response): Promise<void> {
  try {
    const idRecipe: string = req.params.id;
    const token: string | undefined = req.headers.authorization;

    if (!idRecipe) {
      res.statusCode = 400;
      throw new Error("parameter is missing");
    }
    if (!token) {
      res.statusCode = 403;
      throw new Error("not authorized");
    }

    const tokenData: authenticatorData = getTokenData(token!);
    userExist(tokenData.id)

    const [userRecipeId] = await connection.raw(`
      SELECT user_id
      FROM recipe_cookenu
      WHERE id = "${idRecipe}";
    `)

    if(userRecipeId[0].user_id !== tokenData.id && tokenData.role === USER_ROLES.NORMAL){
      res.statusCode = 403
      throw new Error("Not authorized. Post does not belong to the user who made the request.");
    }

    await connection.raw(`
      DELETE FROM recipe_cookenu
      WHERE id = "${idRecipe}"
    `)

    res.end()
  } catch (error) {
    if (error.message.includes("jwt expired")) {
      res.status(403).send({ message: "Token expired" });
    }

    res.send({ message: error.message || error.sqlMessage });
  }
}

export default deleteRecipe;
