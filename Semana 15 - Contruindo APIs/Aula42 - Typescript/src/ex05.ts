type calculation = {
  add: number;
  subtraction: number;
  multiplication: number;
  higherNumber: number | string;
};

function math(number1: number, number2: number): calculation {
  const add: number = number1 + number2;
  const subtraction: number = number1 - number2;
  const multiplication: number = number1 * number2;

  let higherNumber: number | string;
  if (number1 > number2) {
    higherNumber = number1;
  } else if (number2 > number1) {
    higherNumber = number2;
  } else {
    higherNumber = "Os números são iguais";
  }

  const numberInfo: calculation = {
    add,
    subtraction,
    multiplication,
    higherNumber,
  };

  return numberInfo;
}

console.table(math(2, 2));
