import { connection } from "./connection";

async function deleteUserData(id: string): Promise<void>{
  try {
    await connection.raw(`
      DELETE FROM user_aula55
      WHERE id = "${id}"
    `);
  } catch (error) {
    throw new Error(error.message);
    
  }
}

export default deleteUserData