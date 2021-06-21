import { Request, Response } from "express";
import loginBusiness from "../business/login";

async function login(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body;

    const token = await loginBusiness({ email, password });

    res.send({ token });
  } catch (error) {
    res.status(500).send({ message: error.message || error.sqlMessage });
  }
}

export default login;
