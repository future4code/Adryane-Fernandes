import userDatabase, { UserDatabase } from '../data/UserDatabase'
import { user } from "../model/interfaces";

export class GetProfileByIdBusiness {
  constructor(
    private userDatabase: UserDatabase
  ){

  }
  async execute(id: string): Promise<user> {
    if (!id) {
      throw new Error("id not informed");
    }

    const user: user = await this.userDatabase.selectUser(id)
    if(!user){
      throw new Error("user not exist");
    }

    return user
  }
}

export default new GetProfileByIdBusiness(userDatabase)