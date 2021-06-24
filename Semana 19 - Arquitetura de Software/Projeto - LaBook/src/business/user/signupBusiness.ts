import { UserDatabase } from "../../data/user/UserDatabase";
import { user } from "../../model/types";
import { generateToken } from "../../services/authenticator";
import { generateId } from "../../services/generateId";
import { hashCreate } from "../../services/hashManager";
import { CustomError } from "../error/CustomError";
import emailIsValid from "../validation/emailIsValid";
import passwordIsValid from "../validation/passwordIsValid";

export async function signupBusiness(user: user): Promise<string> {
  try {
    
    if(!user.name || !user.email || !user.password){
      throw new CustomError(400, "The fields 'name', 'email', and 'password' are required.");
    }
    emailIsValid(user.email)
    passwordIsValid(user.password)

    const id: string = generateId();
    if(!id){
      throw new CustomError(500, "Error generating id");
    }
    
    const hashPassword: string = hashCreate(user.password);
    if(!hashPassword){
      throw new CustomError(500, "Password encryption error");
    }
    
    const dataUser = {
      id,
      name: user.name,
      email: user.email,
      password: hashPassword
    }
    
    const database = new UserDatabase()
    database.insertUser(dataUser)
    
    const token: string = generateToken({ id });
    if(!token){
      throw new CustomError(401, "Not authorized. Unable to generate authorization."); 
    }
    
    return token
  } catch (error) {
    throw new CustomError(error.statusCode, error.message);
  }
}
