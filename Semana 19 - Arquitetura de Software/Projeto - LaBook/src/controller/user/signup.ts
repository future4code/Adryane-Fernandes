import { Request, Response } from "express";
import { signupBusiness } from "../../business/user/signupBusiness";



export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const dataUser = {
      name, email, password
    }
    
    const token = await signupBusiness(dataUser)

    res.status(201).send({ token })
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message });
  }
}