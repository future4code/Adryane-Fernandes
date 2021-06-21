import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types/types";

export function generatedtoken(input: authenticationData): string {

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
  const result = {
    id: payload.id,
    role: payload.role,
  };

  return result;
}
