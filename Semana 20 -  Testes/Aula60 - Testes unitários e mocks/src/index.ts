import { Character } from "./model/interfaces";
import { performAttack } from "./performAttack";
import { validateCharacter } from "./validateCharacter";

const attacker: Character = {
  name: "Goham",
  life: 1500,
  defense: 200,
  power: 250
}

const defender: Character = {
  name: "Lilith",
  life: 1500,
  defense: 50,
  power: 400
}

performAttack(attacker, defender, validateCharacter)