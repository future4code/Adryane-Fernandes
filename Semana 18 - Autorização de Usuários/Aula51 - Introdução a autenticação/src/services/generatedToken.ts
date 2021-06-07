import * as jwt from "jsonwebtoken";
import {authenticationData} from '../types/types'

function generatedtoken(id: authenticationData): string {
  const token = jwt.sign(
    { id: id }, 
    process.env.JWT_KEY!, 
    {expiresIn: "1min"}
  );

  return token
}

export default generatedtoken