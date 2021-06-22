import { character } from "./model/interfaces";

export function performAttack(attacker: character, defender: character, validate: (input: any) => boolean){
  if(!validate(attacker) || !validate(defender)){
    throw new Error ("Invalid Character")
  }

  if(defender.defense < attacker.power){
    defender.life - (attacker.power - defender.defense)
  }
}