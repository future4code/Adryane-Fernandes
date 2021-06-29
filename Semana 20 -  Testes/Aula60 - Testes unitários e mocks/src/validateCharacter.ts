import { Character } from "./model/interfaces";

export function validateCharacter(input: Character): boolean {
  if (
    !input.name ||
    !input.life ||
    !input.defense ||
    !input.power
  ) {
    return false;
  } else if (
    input.life < 0 ||
    input.power < 0 ||
    input.defense < 0
  ) {
    return false;
  } else {
    return true;
  }
}
