import * as jwt from "jsonwebtoken";
import { authenticatorData } from "../model/types";

export function generateToken(input: authenticatorData): string {
  const token: string = jwt.sign(input, process.env.JWT_KEY!, { expiresIn: "1d" });

  return token;
}

export function getTokenData(token: string): authenticatorData {
  const payload = jwt.verify(token, process.env.JWT_KEY!) as any;

  const result: authenticatorData = {
    id: payload.id,
    role: payload.role,
  };

  return result;
}
