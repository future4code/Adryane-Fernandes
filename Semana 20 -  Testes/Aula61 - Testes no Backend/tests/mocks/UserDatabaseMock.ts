import { user, USER_ROLE } from "../../src/model/interfaces";


export class UserDatabaseMock{
  async selectUser(id: string): Promise<user> {
    const userMock: user = {
      id: "1",
      name: "Teste",
      email: "teste@email.com",
      role: USER_ROLE.NORMAL
    }

    return userMock
  }
}

export default new UserDatabaseMock()