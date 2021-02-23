/* 
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
    //a. false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)
    //b. false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
    //c. true

console.log("e. ", typeof resultado)
    //e. boolean
*/

/*
let array
console.log('a. ', array)
    //a. undefined

array = null
console.log('b. ', array)
    //b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
    //c. 11

let i = 0
console.log('d. ', array[i])
    //d. 3

array[i+1] = 19
console.log('e. ', array)
    //e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)
    //f. 9
*/

//1.
const idadeUsuario = prompt('Digite a sua idade:')
const idadeAmigo = prompt('Digite a idade do seu(sua) melhor amigo(a):')
numIdadeUsuario = Number(idadeUsuario)
numIdadeAmigo = Number(idadeAmigo)

idadeMaior = numIdadeUsuario > numIdadeAmigo
console.log('Sua idade é maior do que seu amigo?')
console.log(Boolean(idadeMaior))

let diferencaIdade = numIdadeUsuario - numIdadeAmigo
console.log('Diferença de idade: ', diferencaIdade)


//2.
const numPar = prompt('Digite um número par: ')
let restoDiv = numPar % 2
console.log(restoDiv)
    //Se o número for par o resto sempre será 0, já que essa é uma caracteristica de números pares. 
    //Se colocar número impar sempre restará 1.


//3
let listaDeTarefas = []
listaDeTarefas.push(prompt('Digite uma tarefa a ser adicionada: '))
listaDeTarefas.push(prompt('Digite uma tarefa a ser adicionada: '))
listaDeTarefas.push(prompt('Digite uma tarefa a ser adicionada: '))
console.log(listaDeTarefas)

let i = prompt('Escolha o índice de uma tarefa que você quer retirar(0, 1, 2):')
listaDeTarefas.splice(i, 1)
console.log(listaDeTarefas)


//4
const emailDoUsuario = prompt('Digite seu email: ')
const nomeDoUsuario = prompt('Digite seu nome: ')
console.log('O e-mail ' + emailDoUsuario + ' foi cadastrado com sucesso. Seja bem-vinda(a), ' + nomeDoUsuario + '!')




