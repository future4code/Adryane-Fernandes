import { Character } from "../src/model/interfaces";
import { performAttack } from "../src/performAttack";

test("Verificação com a informações válidas", () => {
  const validatorMock = jest.fn(() => {
    return true;
  });

  const attacker: Character = {
    name: "Perceus",
    life: 1500,
    defense: 200,
    power: 600,
  };

  const defender: Character = {
    name: "Lilith",
    life: 1500,
    defense: 400,
    power: 800,
  };

  performAttack(attacker, defender, validatorMock as any);

  // expect(defender.life).toEqual(1300);
  expect(validatorMock).toHaveBeenCalled();
  expect(validatorMock).toHaveBeenCalledTimes(2);
  expect(validatorMock).toHaveReturnedTimes(2);
});

test("Verificando erro se informação invalida", () => {
  expect.assertions(1)

  try {
    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: Character = {
      name: "Perceus",
      life: 1500,
      defense: 200,
      power: 600,
    };
  
    const defender: Character = {
      name: "Lilith",
      life: 1500,
      defense: 400,
      power: 800,
    };

    performAttack(attacker, defender, validatorMock as any);
  } catch (error) {
    expect(error.message).toBe("Invalid Character")
  }
})