import { genSaltSync, hashSync, compareSync } from "bcryptjs";

export function createHash(plaiText: string): string {
  const salt = genSaltSync(12);
  const hash = hashSync(plaiText, salt);

  return hash;
}

export function compareHash(string: string, hash: string): boolean {
  return compareSync(string, hash);
}
