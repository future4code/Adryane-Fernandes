import { Request, Response } from "express";
import { CustomError } from "../../business/error/CustomError";
import loginBusiness from "../../business/user/loginBusiness";
import { UserDatabase } from "../../data/user/UserDatabase";
import { user } from "../../model/types";
import { generateToken } from "../../services/authenticator";
import { compareHash } from "../../services/hashManager";

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
