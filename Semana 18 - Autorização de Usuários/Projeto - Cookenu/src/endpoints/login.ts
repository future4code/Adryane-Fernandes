import { Request, Response } from "express";
import connection from "../connection";
import { generetedToken } from "../services/authenticator";
import { compareHash } from "../services/hashManager";

async function login(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body;

    if(!email || !password){
      res.statusCode = 400
      throw new Error("incomplete information");
    }

    const [user] = await connection.raw(`
      SELECT * FROM user_cookenu
      WHERE email = "${email}"
    `);

    if(!user[0]){
      res.statusCode = 404
      throw new Error("email not found");
    }

    const databaseHashPassword: string = user[0].password
    const passwordIsCorrect: boolean = compareHash(password, databaseHashPassword)

    if(!passwordIsCorrect){
      res.statusCode = 400
      throw new Error("incorrect password");
    }

    const id: string = user[0].id
    const token: string = generetedToken({ id, role: user[0].role })


    res.send({ token });
  } catch (error) {
    res.send({ message: error.message || error.sqlMessage });
  }
}

export default login