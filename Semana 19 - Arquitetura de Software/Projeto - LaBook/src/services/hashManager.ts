import { genSaltSync, hashSync, compareSync } from "bcryptjs";

export function hashCreate(password: string): string{
  const cost: number = Number(process.env.BCRYPT_COST)
  const salt: string = genSaltSync(cost)
  const hash: string = hashSync(salt)

  return hash
}

export function compareHash(password: string, hash: string): boolean {
  return compareSync(password, hash);
}