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



//DESAFIOS
//1
let conversaoFparaK = (77 - 32)*5 / 9 + 273.15
let conversaoCparaF = 80 * 9 / 5 + 32
let conversaoCparaK = 30 + 273.15
let conversaoCparaF2 = 30 * 9 / 5 + 32


console.log('77°F em Kelvin fica ' +  conversaoFparaK + 'K')
console.log('80°C em fahrenheit fica ' +  conversaoCparaF + '°F')
console.log('30°C em fahrenheit fica ' +  conversaoCparaF2 + '°F e em Kelvin fica ' + conversaoCparaK + 'K')


//2
const quilowattExemplo = 280*0.05 
console.log('Uma casa que consumiur 280 quilowatt-hora pagará: R$' + quilowattExemplo)
let quilowattConsumido = prompt('Digite quantos quilowatt-hora foram consumidos: ')
let valorTotal = quilowattConsumido*0.05 - (quilowattConsumido*0.05 )*15/100
console.log('O total a ser pago é R$' + valorTotal)


//3
let libra = 20
let onca = 10
let milha = 100
let pes = 50
let galao = 103.56

let xicara = prompt('Digite quantas xícaras para converter para litro: ')

let libraKilo = libra/2.2046
let oncaKilo = onca/35.274
let milhaMetro = milha/0.00062137
let pesMetro = pes/3.28084
let galaoLitro = galao/0.264172
let xicaraLitro = xicara/4.227

console.log(libra + 'lb equivalem a ' + libraKilo + 'Kg')
console.log(onca + 'oz equivalem a ' + oncaKilo + 'Kg')
console.log(milha + 'mi equivalem a ' + milhaMetro + 'm')
console.log(pes + 'ft equivalem a ' + pesMetro + 'm')
console.log(galao + 'gal equivalem a ' + galaoLitro + 'l')
console.log(xicara + 'xic equivalem a ' + xicaraLitro + 'l')


