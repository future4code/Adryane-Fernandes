import { Request, Response } from "express";
import { connection } from "../..";
import { generateToken } from "../../services/authenticator";
import { generateId } from "../../services/generateId";
import { hashCreate } from "../../services/hashManager";


export const signup = async (req: Request, res: Response) => {
  try {
    let message = "Success!";
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.statusCode = 406;
      throw new Error('"name", "email" and "password" must be provided');
    }

    const id: string = generateId();

    const hashPassword: string = hashCreate(password);

    await connection.raw(`
      INSERT INTO user_labook (id, name, email, password)
      VALUES(
        "${id}",
        "${name}",
        "${email}",
        "${hashPassword}"
      )
    `)

    const token: string = generateToken({ id })

    res.status(201).send({ message, token })
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message });
  }
}