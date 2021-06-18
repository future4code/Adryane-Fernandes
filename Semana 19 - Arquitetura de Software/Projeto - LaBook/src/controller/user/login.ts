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

    // const dataUser: user = {
    //   email,
    //   password,
    // };
    // loginBusiness(dataUser);

    if (!email || !password) {
      throw new CustomError(
        400,
        "The fields 'name' and 'password' are required."
      );
    }

    const database = new UserDatabase();
    const [result] = await database.selectUser(email);
    if (result.length === 0) {
      throw new CustomError(404, "No results");
    }

    // const passwordIsCorrect: boolean = compareHash(
    //   password,
    //   result[0].password
    // );

    // console.log(passwordIsCorrect);

    // if (!passwordIsCorrect) {
    //   throw new CustomError(401, "Password incorrect");
    // }

    const token: string = generateToken({
      id: result[0].id,
    });

    res.status(200).send({token});
  } catch (error) {
    res
      .status(error.statusCode)
      .send({ message: error.message || error.sqlMessage });
  }
};

export default login;
