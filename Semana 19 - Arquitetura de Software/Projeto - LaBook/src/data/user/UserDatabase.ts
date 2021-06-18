import { user } from "../../model/types";
import { BaseDatabase } from "../BaseDatabase";

export class UserDatabase extends BaseDatabase{
  constructor(){
    super();
  }

  public insertUser = async (user: user): Promise<void> => {

      await this.connection.raw(`
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