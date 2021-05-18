// const countries = require("./countries")

// EX01
// a) usamos o comando 'process.argv' para acessar;

// b)
// if (!process.argv[2] && !process.argv[3]) {
//   console.log('\x1b[31mNenhum parâmetro foi passado\x1b[m')
// } else if (!process.argv[2] || !process.argv[3]) {
//   console.log('\x1b[33mEsperava 2 parâmetros, recebi 1\x1b[m')
// } else {
//   const result = `Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos.`
//   console.log('\x1b[32m', result, '\x1b[m')
// }

// c) 
// if (!process.argv[2] && !process.argv[3]) {
//   console.log('\x1b[31mNenhum parâmetro foi passado\x1b[m')
// } else if (!process.argv[2] || !process.argv[3]) {
//   console.log('\x1b[33mEsperava 2 parâmetros, recebi 1\x1b[m')
// } else {
//   const sevenYearsOlder = Number(process.argv[3]) + 7
//   const result = `Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos. Em sete anos você terá ${sevenYearsOlder}.`
//   console.log('\x1b[32m', result, '\x1b[m')
// }


// EX02
// let result
// let message = 'Resultado:'

// const number1 = Number(process.argv[3])
// const number2 = Number(process.argv[4])
// switch (process.argv[2].toLowerCase()) {
//   case 'add':
//     result = number1 + number2
//     break;
//   case 'sub':
//     result = number1 - number2
//     break;
//   case 'mult':
//     result = number1 * number2
//     break;
//   case 'div':
//     result = number1 / number2
//     break;
//   default:
//     message = 'Erro:'
//     result = "operação inválida"
//     break;
// }

// console.log(message, result)


// EX03
// let tasks = ['Correr até Madri']
// tasks.push(process.argv[2])

// console.log(tasks)
