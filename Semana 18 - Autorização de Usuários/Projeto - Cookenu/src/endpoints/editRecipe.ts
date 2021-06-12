import { Request, Response } from "express";
import connection from "../connection";
import { userExist } from "../function/userExist";
import { getTokenData } from "../services/authenticator";
import { authenticatorData, USER_ROLES } from "../types";

async function editRecipe(req: Request, res: Response): Promise<void> {
  try {
    const idRecipe: string = req.params.id;
    const { title, description } = req.body;
    const token: string | undefined = req.headers.authorization;

    if (!idRecipe) {
      res.statusCode = 400;
      throw new Error("parameter is missing");
    }
    if (!title || !description) {
      res.statusCode = 400;
      throw new Error("incomplete information in body");
    }
    if (!token) {
      res.statusCode = 403;
      throw new Error("not authorized");
    }

    const tokenData: authenticatorData = getTokenData(token!);
    userExist(tokenData.id)
    if(tokenData.role === USER_ROLES.ADMIN){
      res.statusCode = 403
      throw new Error("only users with 'NORMAL' role can edit a post");
    }

    const [userRecipeId] = await connection.raw(`
      SELECT user_id
      FROM recipe_cookenu
      WHERE id = "${idRecipe}";
    `)

    if(userRecipeId[0].user_id !== tokenData.id){
      res.statusCode = 403
      throw new Error("Not authorized. Post does not belong to the user who made the request.");
    }

    await connection.raw(`
      UPDATE recipe_cookenu
      SET title = "${title}", description = "${description}"
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

export default editRecipe;
