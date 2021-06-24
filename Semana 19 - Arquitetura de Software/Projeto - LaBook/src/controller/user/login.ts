import { Request, Response } from "express";
import loginBusiness from "../../business/user/loginBusiness";
import { user } from "../../model/types";


const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const dataUser: user = {
      email,
      password,
    };
    
    const token = await loginBusiness(dataUser); 

    res.status(200).send({token});
  } catch (error) {
    res
      .status(error.statusCode)
      .send({ message: error.message || error.sqlMessage });
  }
};

export default login;
