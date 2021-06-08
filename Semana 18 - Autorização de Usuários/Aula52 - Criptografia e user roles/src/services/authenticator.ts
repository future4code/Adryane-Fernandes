import * as jwt from "jsonwebtoken";
import {authenticationData} from '../types/types'

export function generatedtoken(id: authenticationData): string {
  const token = jwt.sign(
    { id: id }, 
    process.env.JWT_KEY!, 
    {expiresIn: "5min"}
  );

  return token
}

export function getData(token: string): authenticationData {
    const payload = jwt.verify(token, process.env.JWT_KEY!) as any
    const result = {
      id: payload.id
    }

    return result
}