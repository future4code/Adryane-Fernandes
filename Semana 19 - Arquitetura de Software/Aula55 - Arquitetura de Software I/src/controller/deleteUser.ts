import { Request, Response } from "express";
import deleteUserBusiness from '../business/deleteUser'

async function deleteUser(req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string;
    const id: string = req.params.id

    deleteUserBusiness(token, id)

    res.send(res.send({message: "User deleted successfully"}));
  } catch (error) {
    res.status(500).send({ message: error.message || error.sqlMessage });
  }
}

export default deleteUser;
