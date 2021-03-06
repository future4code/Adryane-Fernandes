import { Request, Response } from "express";
import connection from "../connection";
import { idGenerator } from "../services/idGenerator";
import { createHash } from "../services/hashManager";
import { generetedToken } from "../services/authenticator";
import validEmail from "../validations/validEmail";
import validPassword from "../validations/validPassword";
import { USER_ROLES } from "../types";

async function signup(req: Request, res: Response): Promise<void> {
  try {
    const { email, name, role, password } = req.body;

    if(!email || !name || !password){
      res.statusCode = 400
      throw new Error("incomplete information");
    }

    if(!validEmail(email)){
      res.statusCode = 400
      throw new Error("email format incorrect");
    }
    if(!validPassword(password)){
      res.statusCode = 400
      throw new Error("Password too short, it must be at least 6 characters");
    }
    if(!(role in USER_ROLES)){
      res.statusCode = 400
      throw new Error("role was not passed, or parameter is different from 'NORMAL' or 'ADMIN'");
    }

    const id: string = idGenerator();
    const hashPassword: string = createHash(password);

    const token: string = generetedToken({ id, role });


    await connection.raw(`
      INSERT INTO user_cookenu (id, name, email, password, role)
      VALUES(
        "${id}",
        "${name}",
        "${email}",
        "${hashPassword}",
        "${role}"
      )
    `)

    res.status(201).send({ token });
  } catch (error) {
    if(error.sqlMessage && error.sqlMessage.includes("Duplicate")){
      res.statusCode = 400;
      res.send({message: "Email is already registered"});
    }

    res.send({ message: error.message || error.sqlMessage });
  }
}

export default signup;
