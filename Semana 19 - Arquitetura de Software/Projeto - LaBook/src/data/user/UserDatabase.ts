import { user } from "../../model/types";
import { BaseDatabase } from "../BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private nameDatabase: string = "user_labook"

  constructor() {
    super();
  }

  public insertUser = async (user: user): Promise<void> => {
    await this.connection.raw(`
        INSERT INTO ${this.nameDatabase} (id, name, email, password)
        VALUES(
          "${user.id}",
          "${user.name}",
          "${user.email}",
          "${user.password}"
      )
    `);
  };

  public selectUser = async (email: string) => {
    const result = await this.connection.raw(`
      SELECT * FROM ${this.nameDatabase}
      WHERE email = "${email}"
    `)

    return result
  };
}
