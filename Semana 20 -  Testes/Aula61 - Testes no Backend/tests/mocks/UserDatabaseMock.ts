import { Connection } from "../../src/data/Connection";
import { user, USER_ROLE } from "../../src/model/interfaces";


export class UserDatabaseMock{
  async selectUser(id: string): Promise<user | undefined> {
    if(id === "id_error"){
      return undefined
    }
    if(id === "id_sucess"){
      const userMock: user = {
        id,
        name: "Teste",
        email: "teste@email.com",
        role: USER_ROLE.NORMAL
      }

      return userMock
    } 
    
  }
}

export default new UserDatabaseMock()