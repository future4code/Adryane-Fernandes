import { Request, Response } from "express";
import connection from "../connection";
import { idGenerator } from "../services/idGenerator";
import { validateRequest } from "../validations/validateRequest";
import { createHash } from "../services/hashManager";
import { generetedToken } from "../services/authenticator";

async function signup(req: Request, res: Response): Promise<void> {
  try {
    const { email, name, password } = req.body;

    validateRequest("Email", email);
    validateRequest("Name", name);
    validateRequest("Password", password);

    const id = idGenerator();
    const hashPassword = createHash(password);

    const token = generetedToken({ id });

    await connection.raw(`
      INSERT INTO user_cookenu (id, name, email, password)
      VALUES(
        "${id}",
        "${name}",
        "${email}",
        "${hashPassword}"
      )
    `)

    res.status(201).send({ token });
  } catch (error) {
    if (
      error.message.includes("Invalid") ||
      error.message.includes("least 6 characters") ||
      error.message.includes("not informed")
    ) {
      res.statusCode = 400;
    }

    if(error.sqlMessage.includes("Duplicate")){
      res.statusCode = 400;
      res.send({message: "Email is already registered"});
    }

    res.status(500).send({ message: error.message || error.sqlMessage });
  }
}

export default signup;
