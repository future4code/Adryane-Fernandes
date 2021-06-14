import { user } from "../model/types";
import { connection } from "./connection";

async function insertUser(user: user){
  try {
    await connection.raw(`
      INSERT INTO user_aula55 (id, name, email, password, role)
      VALUES(
        "${user.id}",
        "${user.name}",
        "${user.email}",
        "${user.password}",
        "${user.role}"
      )
    `);

  } catch (error) {
    throw new Error(error.message);
    
  }
}

export default insertUser