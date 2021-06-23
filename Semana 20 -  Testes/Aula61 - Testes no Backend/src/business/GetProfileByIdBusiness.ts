import { GetProfileByIdData } from "../data/GetProfileByIdData";
import { user } from "../model/interfaces";

export class GetProfileByIdBusiness {
  async execute(id: string): Promise<user> {
    const getProfileByIdData = new GetProfileByIdData()

    if (!id) {
      throw new Error("id not informed");
    }

    const user: user = await getProfileByIdData.selectUser(id)
    if(!user){
      throw new Error("user not exist");
    }

    return user
  }
}
