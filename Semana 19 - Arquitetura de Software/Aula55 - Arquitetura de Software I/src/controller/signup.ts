import { Request, Response } from "express";
import signupBusiness from "../business/signup";

async function signup(req: Request, res: Response): Promise<void> {
  try {
    const {name, email, password, role} = req.body

    const token = await signupBusiness({name, email, password, role})
    
    res.send({ token })
  } catch (error) {
    res.status(500).send({ message: error.message || error.sqlMessage });
  }
}

export default signup