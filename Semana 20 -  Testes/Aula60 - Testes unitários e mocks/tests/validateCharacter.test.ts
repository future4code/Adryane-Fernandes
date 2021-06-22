import { Character } from "../src/model/interfaces";
import { validateCharacter } from "../src/validateCharacter";

describe("Teste da função de validar informações do caracter", () => {
  test("Falso para nome vazio", () => {
    const character: Character = {
      name: "",
      defense: 10,
      life: 20,
      power: 50
    }
    const result: boolean = validateCharacter(character)

    expect(result).toBe(false)
  });

  test("False para defesa igual a 0", () => {
    const character: Character = {
      name: "Lilith",
      defense: 0,
      life: 20,
      power: 50
    }
    const result: boolean = validateCharacter(character)

    expect(result).toBe(false)
  });

  test("False para vida igual a 0", () => {
    const character: Character = {
      name: "Lilith",
      defense: 20,
      life: 0,
      power: 50
    }
    const result: boolean = validateCharacter(character)

    expect(result).toBe(false)
  });

  test("False para poder igual a 0", () => {
    const character: Character = {
      name: "Lilith",
      defense: 10,
      life: 20,
      power: 0
    }
    const result: boolean = validateCharacter(character)

    expect(result).toBe(false)
  });

  test("Falso para campo numérico negativo", () => {
    const character: Character = {
      name: "Lilith",
      defense: -20,
      life: 20,
      power: 50
    }
    const result: boolean = validateCharacter(character)

    expect(result).toBe(false)
  });

  test("True se estiver tudo preenchido e acima de 0", () => {
    const character: Character = {
      name: "Lilith",
      defense: 20,
      life: 1500,
      power: 50
    }
    const result: boolean = validateCharacter(character)

    expect(result).toBe(true)
  });
});
