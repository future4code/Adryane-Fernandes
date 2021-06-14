import { Request, Response } from "express";
import getAllBusiness from '../business/getAll'

async function getAll(req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string;

    const users = await getAllBusiness(token)

    res.send(users);
  } catch (error) {
    res.status(500).send({ message: error.message || error.sqlMessage });
  }
}

export default getAll;
