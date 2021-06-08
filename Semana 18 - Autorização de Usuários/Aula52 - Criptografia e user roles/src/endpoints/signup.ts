import { Request, Response } from "express";
import connection from "../connection";
import generatedId from "../services/generatedId";
import { generatedtoken } from "../services/authenticator";
import emailIsValid from "../validation/emailIsValid";
import passwordIsValid from "../validation/passwordIsValid";
import { createHash } from "../services/hashManager";
import { USER_ROLES } from "../types/types";

async function signup(req: Request, res: Response): Promise<void> {
  try {
    const { email, password, role } = req.body;

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

    if (!(role in USER_ROLES)) {
      res.statusCode = 400;
      throw new Error("Role must be 'NORMAL' or 'ADMIN'");
    }

    const id = generatedId();

    await connection.raw(`
      INSERT INTO user (id, email, password, role)
      VALUES(
        "${id}",
        "${email}",
        "${createHash(password)}",
        "${role}"
      )
    `);

    const token = generatedtoken({ id, role });

    res.status(201).send({ token: token });
  } catch (error) {
    res.status(500).send({ message: error.message || error.sqlMessage });
  }
}

export default signup;
