import { Request, Response } from "express";
import connection from "../connection";
import { generatedtoken } from "../services/authenticator";
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

    const [result] = await connection.raw(`
      SELECT * FROM user
      WHERE email = "${email}" AND password = "${password}";
    `);

    const token = generatedtoken(result[0].id);

    res.send({ token: token });
  } catch (error) {
    res.status(500).send({ message: error.message || error.sqlMessage });
  }
}

export default login;
