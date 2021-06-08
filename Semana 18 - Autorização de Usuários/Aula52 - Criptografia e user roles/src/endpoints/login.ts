import { Request, Response } from "express";
import connection from "../connection";
import { generatedtoken } from "../services/authenticator";
import { compareHash } from "../services/hashManager";
import emailIsValid from "../validation/emailIsValid";

async function login(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body;

    if (!email) {
      res.statusCode = 400;
      throw new Error("Email not entered");
    }
    emailIsValid(email);

    if (!password) {
      res.statusCode = 400;
      throw new Error("Password not entered");
    }


    const [user] = await connection.raw(`
      SELECT * FROM user
      WHERE email = "${email}";
    `);

    if(!compareHash(password, user[0].password)){
      res.statusCode = 401;
      throw new Error("incorrect password");
    }

    const token = generatedtoken({
      id: user[0].id,
      role: user.role
    });

    res.send({ token: token });
  } catch (error) {
    res.status(500).send({ message: error.message || error.sqlMessage });
  }
}

export default login;
