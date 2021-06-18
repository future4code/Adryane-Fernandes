import { CustomError } from "../error/CustomError";

export class ValidateData {
  isEmpty = (data: any, nameData: string) => {
    if(!data){
      throw new CustomError(400, `Field '${nameData}' is empty, and it is mandatory.`);
    }
  }

  notAuthorization = (token: string) => {
    if(!token){
      throw new CustomError(401, "Not authorized. Unable to generate authorization.");
    }
  }

  internalError = (data: any, message: string) => {
    if(!data){
      throw new CustomError(500, message);
    }
  }

}