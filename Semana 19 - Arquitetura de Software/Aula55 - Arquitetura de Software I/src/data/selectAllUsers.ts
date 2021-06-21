import { user } from "../model/types";
import { connection } from "./connection";

async function selectAllUsers(): Promise<user[]> {
  try {
    const [users] = await connection.raw(`
      SELECT id, email, name, role FROM user_aula55;
    `);

    return users
  } catch (error) {
    throw new Error(error.message);
  }
}

export default selectAllUsers;