import { user, userLogin } from "../model/types";
import { connection } from "./connection";

async function selectUser(email: string): Promise<user> {
  try {
    const [result] = await connection.raw(`
      SELECT * FROM user_aula55
      WHERE email = "${email}";
    `);

    return result[0]
  } catch (error) {
    throw new Error(error.message);
  }
}

export default selectUser;
