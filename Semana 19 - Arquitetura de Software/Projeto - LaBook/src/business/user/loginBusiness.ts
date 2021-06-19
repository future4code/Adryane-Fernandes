import { UserDatabase } from "../../data/user/UserDatabase";
import { user } from "../../model/types";
import { generateToken } from "../../services/authenticator";
import { compareHash } from "../../services/hashManager";
import { CustomError } from "../error/CustomError";

const loginBusiness = async (user: user) => {
  try {
    if (!user.email || !user.password) {
      throw new CustomError(
        400,
        "The fields 'name' and 'password' are required."
      );
    }

    const database = new UserDatabase();
    const [result] = await database.selectUser(user.email);
    if (result.length === 0) {
      throw new CustomError(404, "Unregistered user");
    }

    const passwordIsCorrect: boolean = compareHash(
      user.password,
      result[0].password
    );
    if (!passwordIsCorrect) {
      throw new CustomError(401, "Password incorrect");
    }

    const token: string = generateToken({
      id: result[0].id,
    });

    return token;
  } catch (error) {
    throw new CustomError(error.statusCode, error.message);
  }
};

export default loginBusiness;
