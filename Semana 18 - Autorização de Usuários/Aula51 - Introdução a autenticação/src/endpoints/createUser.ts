import { Request, Response } from "express";
import connection from '../connection'
import generatedId from "../services/generatedId";

async function createUser(req: Request, res: Response) {
  try {
    const {email, password} = req.body
    const id = generatedId()

    await connection.raw(`
      INSERT INTO user (id, email, password)
      VALUES(
        "${id}",
        "${email}",
        "${password}"
      )
    `)


    res.status(201).send({ message: "created"})
  } catch (error) {
    res.status(500).send({ message: error.message || error.sqlMessage})
  }
}

export default createUser