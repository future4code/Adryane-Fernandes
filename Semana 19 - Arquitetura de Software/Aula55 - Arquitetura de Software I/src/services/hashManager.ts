import { genSaltSync, hashSync, compareSync } from "bcryptjs";

export function createHash(password: string): string {
  const salt: string = genSaltSync(12);
  const hash: string = hashSync(password, salt);

  return hash;
}

export function compareHash(password: string, hash: string): boolean {
  return compareSync(password, hash);
}
