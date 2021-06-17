import { user } from "../../model/types";
import { connection } from "../BaseDatabase";

export class UserDatabase {
  insertUser = async (user: user): Promise<void> => {
    await connection.raw(`
      INSERT INTO user_labook (id, name, email, password)
      VALUES(
        "${user.id}",
        "${user.name}",
        "${user.email}",
        "${user.password}"
      )
    `);
  }
}