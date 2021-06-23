import { user } from "../model/interfaces";
import { Connection } from "./Connection";

export class GetProfileByIdData extends Connection{
  async selectUser(id: string): Promise<user> {
    const [user] = await this.connection.raw(`
      SELECT * FROM user_aula61
      WHERE id = ${id}
    `);

    return user[0]
  }
}