import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types/types";

export function generatedtoken(input: authenticationData): string {
  console.log("input:", input)

  const token = jwt.sign(
    {
      id: input.id,
      role: input.role,
    },
    process.env.JWT_KEY!,
    { expiresIn: "1h" }
  );

  return token;
}

export function getTokenData(token: string): authenticationData {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  console.log("payload:", payload)
  const result = {
    id: payload.id,
    role: payload.role,
  };

  console.log("payload.role:", payload.role)
  return result;
}
