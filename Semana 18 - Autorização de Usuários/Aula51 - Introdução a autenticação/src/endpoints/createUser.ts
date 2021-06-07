import { Request, Response } from "express";
import connection from '../connection'
import generatedId from "../services/generatedId";
import generatedtoken from "../services/generatedToken";
import emailIsValid from "../validation/emailIsValid";
import passwordIsValid from "../validation/passwordIsValid";

async function createUser(req: Request, res: Response) {
  try {
    const {email, password} = req.body

    if(!email){
      res.statusCode = 400
      throw new Error("Email not entered");
    }
    emailIsValid(email)

    if(!password){
      res.statusCode = 400
      throw new Error("Password not entered");
    }
    passwordIsValid(password)
    
    const id = generatedId()

    await connection.raw(`
      INSERT INTO user (id, email, password)
      VALUES(
        "${id}",
        "${email}",
        "${password}"
      )
    `)

    const token = generatedtoken({id})

    res.status(201).send({ token: token})
  } catch (error) {
    res.status(500).send({ message: error.message || error.sqlMessage})
  }
}

export default createUser