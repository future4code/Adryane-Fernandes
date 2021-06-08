import { Request, Response } from "express";
import connection from "../connection";
import generatedId from "../services/generatedId";
import { generatedtoken } from "../services/authenticator";
import emailIsValid from "../validation/emailIsValid";
import passwordIsValid from "../validation/passwordIsValid";
import { createHash } from "../services/hashManager";

async function signup(req: Request, res: Response): Promise<void> {
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
    passwordIsValid(password);

    const id = generatedId();
    
    await connection.raw(`
      INSERT INTO user (id, email, password)
      VALUES(
        "${id}",
        "${email}",
        "${createHash(password)}"
      )
    `);

    const token = generatedtoken({ id });

    res.status(201).send({ token: token });
  } catch (error) {
    res.status(500).send({ message: error.message || error.sqlMessage });
  }
}

export default signup;
