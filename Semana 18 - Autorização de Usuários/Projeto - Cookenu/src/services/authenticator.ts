import * as jwt from "jsonwebtoken";
import { authenticatorData } from "../types";

export function generetedToken(input: authenticatorData): string {
  return jwt.sign(
    {
      id: input.id,
      role: input.role,
    },
    process.env.JWT_KEY!,
    { expiresIn: "1h" }
  );
}

export function getTokenData(token: string): authenticatorData {
  const { id, role } = jwt.verify(
    token,
    process.env.JWT_KEY!
  ) as authenticatorData;

  return { id, role };
}
