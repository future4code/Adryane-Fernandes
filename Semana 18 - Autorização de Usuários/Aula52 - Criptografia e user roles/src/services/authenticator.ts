import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types/types";

export function generatedtoken(payload: authenticationData): string {
  const token = jwt.sign(payload, process.env.JWT_KEY!, { expiresIn: "5min" });

  return token;
}

export function getTokenData(token: string): authenticationData {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
    role: payload.role,
  };
  
  return result;
}
