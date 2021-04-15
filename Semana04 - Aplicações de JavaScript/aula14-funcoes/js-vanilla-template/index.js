//Interpretação de texto
//EXERCÍCIO 1
/*
function minhaFuncao(variavel) {
    return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
*/
//a. 10 
//   50

//b.Não aconteria nada, já que a função n foi chamada



//EXERCÍCIO 2
/*
let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Chijo"];

const outraFuncao = function(array) {
    for (let i = 0; i < 2; i++) {
        console.log(array[i])
    }
}

outraFuncao(arrayDeNomes)
*/
//a. Serão os nomes impressos em cada linha
//b. Serião impressos:
//Amanda
//Caio



//EXERCÍCIO 
/*
const metodo = (array) => {
    let arrayFinal = [];
      
    for (let x of array) {
        if (x % 2 === 0) {
            arrayFinal.push(x * x)
        }
    }
      
    return arrayFinal;
}
*/
//Ela transforma uma array numérica em outra com números pares, um nome para ela podia ser "criarArrayPar'


//Escrita de código
//EXERCÍCIO 4
//a.
let apresentacao = () => {
    console.log('Oi, me chamo Adryane. Tenho 20 anos e moro no Rio de janeiro e sou estudante.')
}

//b.
let apresentacaoUsuario = (nome, idade, cidade, estaEstudando) => {
    let simOuNao
    if (!estaEstudando) {
        simOuNao = 'não'
    } 
    console.log('Oi, me chamo ' + nome + '. Tenho', idade, 'e moro no ' + cidade + ' e ' + simOuNao +' sou estudante.')
}

//EXERCÍCIO 5
//a.
let somar = function (num1, num2) {
    let soma = num1 + num2
    return soma
}
let resultado = somar(5, 6)
console.log(resultado)

//b.
let verificandoMaior = function (numero1, numero2) {
    let primeiroMaiorIgual = false
    if (numero1 >= numero2) {
        primeiroMaiorIgual = true
    }
}

//c.
let repetirFrase10 = function (frase) {
    for (let i = 0; i < 10; i++) {
        console.log(frase)

    }
}
repetirFrase10('Eu sou Daenerys Targaryen, filha da Tormenta, a não queimada, mãe de Dragões, rainha de Mereen, rainha dos andalos e dos primeiros homens, Senhora dos sete reinos, Khaleesi dos dothraki, a primeira de seu nome')

//EXERCÍCIO 6
//a.
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function tamanhoArray(lista) {
    let tamanho = lista.length
    return tamanho
}

//b.
function parOuNao(numero) {
    let resposta
    if (numero % 2 === 0) {
        resposta = true
    } else {
        resposta = false
    }
    return resposta
}

//c.
function quantidadePares(listaNumeros) {
    let pares = 0
    for (const numero of listaNumeros) {
        if (numero % 2 === 0) {
            pares++
        }
    }
    return pares
}

//d. 
function quantPares2(listaNumeros) {
    let numerosPares = 0
    for (const numero of listaNumeros) {
        let par = parOuNao(numero)

        if (par) {
            numerosPares++
        }
    }
    return numerosPares
}


