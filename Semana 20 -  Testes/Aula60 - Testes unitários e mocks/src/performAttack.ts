import { Character } from "./model/interfaces";

export function performAttack(attacker: Character, defender: Character, validate: (input: Character) => boolean){
  if(!validate(attacker) || !validate(defender)){
    throw new Error ("Invalid Character")
  }

  if(defender.defense < attacker.power){
    defender.life - (attacker.power - defender.defense)
  }
}