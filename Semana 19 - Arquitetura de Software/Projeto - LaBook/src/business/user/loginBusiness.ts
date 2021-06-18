import { UserDatabase } from "../../data/user/UserDatabase";
import { user } from "../../model/types";
import { CustomError } from "../error/CustomError";

const loginBusiness = async (user: user) => {
  try {
    // const database = new UserDatabase();
    console.log(user)

    if(!user.email || !user.password){      
      throw new CustomError(400, "The fields 'name' and 'password' are required.");
    }

    // const [result] = await database.selectUser(user.email);
    // if(result.length === 0){
    //   console.log({ a: "ta vaziooo"})
    //   throw new CustomError(404, "No results");
    // }


    // const user: user = {
    //   id: queryResult[0].id,
    //   name: queryResult[0].name,
    //   email: queryResult[0].email,
    //   password: queryResult[0].password,
    // };

    // const passwordIsCorrect: boolean = await compare(password, user.password);

    // if (!passwordIsCorrect) {
    //   res.statusCode = 401;
    //   message = "Invalid credentials";
    //   throw new Error(message);
    // }

    // const token: string = generateToken({
    //   id: user.id,
    // });
  } catch (error) {
    throw new CustomError(error.statusCode, error.message);
  }
};

export default loginBusiness;
