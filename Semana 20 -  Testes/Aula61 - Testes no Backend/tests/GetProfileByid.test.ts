import { GetProfileByIdBusiness } from "../src/business/GetProfileByIdBusiness";
import { UserDatabase } from "../src/data/UserDatabase";
import UserDatabaseMock from "./mocks/UserDatabaseMock";

test("Erro caso o usuário não exita", async () => {
  expect.assertions(1);

  try {
    const userBusinessMock = new GetProfileByIdBusiness(
      UserDatabaseMock as UserDatabase
    );

    const id = "id_error";

    await userBusinessMock.execute(id);
  } catch (error) {
    expect(error.message).toBe("user not exist");
  }
});

test("Caso de sucesso", async () => {
    const userBusinessMock = new GetProfileByIdBusiness(
      UserDatabaseMock as UserDatabase
    );

    const id = "id_sucess";

    const user = await userBusinessMock.execute(id);

    expect(user).toEqual({
      id,
      name: "Teste",
      email: "teste@email.com",
      role: "NORMAL"
    })

});

