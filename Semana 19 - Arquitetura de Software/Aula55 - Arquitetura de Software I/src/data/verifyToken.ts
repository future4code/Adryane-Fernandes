import { authenticatorData, user } from "../model/types";
import { connection } from "./connection";

async function verifyToken(tokenData: authenticatorData): Promise<void> {
  try {
    const [result] = await connection.raw(`
      SELECT id FROM user_aula55
      WHERE id = "${tokenData.id}"
    `);
    if (!result[0]) {
      throw new Error("Invalid token");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export default verifyToken;