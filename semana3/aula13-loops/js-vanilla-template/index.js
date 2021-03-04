//Interpretação de texto
//EXERCÍCIO 1
/*
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
*/
//O código está somando o contador à variável valor a cada loop
// será impresso: 15

//EXERCÍCIO 2
/*
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
        console.log(numero)
    }
}
*/
//a. 19 21 23 25 27 30
//b. Sim, só precisaria criar uma variavel i 

//DeESAFIO 
/*
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}
*/
//resposta:
// 0
// 00
// 000
// 0000



//Escrita de código
//EXERCÍCIO 3
const arrayOriginal = [10, 22, 31, 46, 57, 64, 79, 81, 92, 104]

//a.
for (const contador of arrayOriginal) {
    console.log(contador)
}


console.log(' ') //separar as respostas no console

//b.
for (const numero of arrayOriginal) {
    let divisao = numero / 10
    console.log(divisao)
}


console.log(' ') //separar as respostas no console

//c.
let arrayPar = []
for (let i = 0; i < arrayOriginal.length; i++) {
    const numero = arrayOriginal[i];
    if (arrayOriginal[i] % 2 === 0) {
        arrayPar.push(numero)
    }
}
console.log(arrayPar)


console.log(' ') //separar as respostas no console

//d.
let index = 0
let arrayFrases = []
for (const contador of arrayOriginal) {
    arrayFrases.push('O elemento ' + index + ' é o número: ' + contador)
    index++
}
console.log(arrayFrases)


console.log(' ') //separar as respostas no console

//e.
let maior = 0
for (const numero of arrayOriginal) {
    if (numero > maior) {
        maior = numero
    }
}
console.log('O maior número é ' + maior)

console.log(' ') //separar as respostas no console



//DESAFIO 1
const numeroADescobrir = prompt('Digite o número que está pensando: ')
console.log('Que comecem os jogos!')
let numeroJogado = 0
let tentativas = 0

while (numeroADescobrir !== numeroJogado) {
    numeroJogado = prompt('Digite o número pensado:')
    console.log('O número chutado foi: ', numeroJogado)
    if (numeroJogado > numeroADescobrir) {
        console.log('Errrrou, é menor.')
    } else if (numeroJogado < numeroADescobrir) {
        console.log('Errrrou, é maior.')
    } else {
        console.log('Acertou!')
    }
    tentativas++
    
    if (tentativas === 10) {
        console.log('Ta dificil de ler essa mente em, deixa eu te ajudar.')
        console.log('A resposta está entre', numeroADescobrir-8, 'e', Number(numeroADescobrir)+9)
    }
}


console.log('Houveram ' + contador + ' tentativas')


//DESAFIO 2
const numeroComputador = Math.floor(Math.random() * (100+1))
console.log(numeroComputador)
console.log('O computador já fez sua escolha.')
console.log('Que comecem os jogos!')
let numeroJogador = 0
let tentativas = 0

while (numeroComputador !== numeroJogador) {
    numeroJogador = Number(prompt('Digite o número jogado pelo computador: '))
    console.log('O número chutado foi: ', numeroJogador)

    if (numeroJogador > numeroComputador) {
        console.log('Errrrou, é menor.')
    } else if (numeroJogador < numeroComputador) {
        console.log('Errrrou, é maior.')
    } else {
        console.log('Acertou!')
    }
    tentativas++
    
    if (tentativas === 3) {
        console.log('Ta dificil? deixa eu te ajudar.')
        console.log('A resposta está entre', (numeroComputador-8), 'e',(numeroComputador+9))
    }
}


console.log('Houveram ' + tentativas + ' tentativas')