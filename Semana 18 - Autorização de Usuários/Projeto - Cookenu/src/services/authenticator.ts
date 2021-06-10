import * as jwt from "jsonwebtoken";
import { authenticatorData } from "../types";

export function generetedToken(input: authenticatorData): string {
  return jwt.sign(input, process.env.JWT_KEY!, { expiresIn: "1h" });
}

export function getToken(token: string): authenticatorData {
  const { id } = jwt.verify(token, process.env.JWT_KEY!) as authenticatorData;

  return { id };
}
