import  UserData from "../data/UserData";
import { user } from "../model/interfaces";

export class GetProfileByIdBusiness {
  async execute(id: string): Promise<user> {
    if (!id) {
      throw new Error("id not informed");
    }

    const user: user = await UserData.selectUser(id)
    if(!user){
      throw new Error("user not exist");
    }

    return user
  }
}

export default new GetProfileByIdBusiness()