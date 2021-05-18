function whatHistorcalAgeIsThatDate(year: number, complement?: string): string {
  const date = new Date()

  let historicalAge: string
  if(year > 100000 && complement?.toLocaleLowerCase() === 'ac'){
    historicalAge = 'Época fora dos registros'
  } else if(year <= 100000 && year > 4000 && complement?.toLocaleLowerCase() === 'ac'){
    historicalAge = 'Pré-história'
  } else if(year <= 4000 && year > 476 && complement?.toLocaleLowerCase() === 'ac'){
    historicalAge = 'Idade Antiga'
  }else if(year <= 476 && year >= 0 && complement?.toLocaleLowerCase() === 'ac'){
    historicalAge = 'Idade Média'
  }else if(year > 0 && year <= 1453 && (complement?.toLocaleLowerCase() === 'dc' || !complement?.toLocaleLowerCase())){
    historicalAge = 'Idade Média'
  }else if(year > 1453 && year <= 1789 && (complement?.toLocaleLowerCase() === 'dc' || !complement?.toLocaleLowerCase())){
    historicalAge = 'Idade Moderna'
  }else if(year > 1789 &&  year <= date.getFullYear() && (complement?.toLocaleLowerCase() === 'dc' || !complement?.toLocaleLowerCase())){
    historicalAge = 'Idade Contemporânea (até os dias atuais)'
  }else{
    historicalAge = 'O futuro teremos que esperar para saber'
  }

  return historicalAge
}

console.log(whatHistorcalAgeIsThatDate(2025, 'dc'))