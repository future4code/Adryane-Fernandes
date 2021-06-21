import { performPurchase } from "../src"
import { user } from "../src/interfaces"

describe("Testar função performPurchase", () => {
  test("Verificando resposta com saldo maior que o valor", () => {
    const user: user = {
      name: "Fulano",
      balance: 100
    }

    const result = performPurchase(user, 40)

    expect(result).toEqual({
      name: "Fulano",
      balance: 60
    })
  })

  test("Verificando resposta com saldo igual ao valor", () => {
    const user: user = {
      name: "Fulano",
      balance: 100
    }

    const result = performPurchase(user, 100)

    expect(result).toEqual({
      name: "Fulano",
      balance: 0
    })
  })

  test("Verificando resposta com saldo menor que o valor", () => {
    const user: user = {
      name: "Fulano",
      balance: 100
    }

    const result = performPurchase(user, 120)

    expect(result).toEqual(undefined)
  })
})