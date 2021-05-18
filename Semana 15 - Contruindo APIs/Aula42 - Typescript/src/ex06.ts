let historicalAge: string;
function whatHistorcalAgeIsThatDate(year: number, complement?: string): string {
  const date = new Date();

  if (complement?.toLocaleLowerCase() === "ac") {
    if (year > 100000) {
      historicalAge = "Época fora dos registros";
    } else if (year <= 100000 && year > 4000) {
      historicalAge = "Pré-história";
    } else if (year <= 4000 && year > 476) {
      historicalAge = "Idade Antiga";
    } else if (year <= 476 && year >= 0) {
      historicalAge = "Idade Média";
    }
  } else {
    if (year > 0 && year <= 1453) {
      historicalAge = "Idade Média";
    } else if (year > 1453 && year <= 1789) {
      historicalAge = "Idade Moderna";
    } else if (year > 1789 && year <= date.getFullYear()) {
      historicalAge = "Idade Contemporânea (até os dias atuais)";
    } else {
      historicalAge = "O futuro teremos que esperar para saber";
    }
  }

  return historicalAge;
}

console.log(whatHistorcalAgeIsThatDate(1500, 'ac'));
