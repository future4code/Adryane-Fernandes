//Interpretação de código
// EXERCÍCIO 1
/*
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
    //O código pede um número ao usuário e verifica se é par. Se for par o usuário passa no teste, se for ímpar não passa. 
*/


// EXERCÍCIO 2
/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
*/
//a. Para dar o preço da fruta a partir do nome
//b. O preço da fruta maça é R$2.25
//c. O preço da fruta pêra é R$5 -  já que não tem break o código continuaria até o defalt e a var preco receberia 5


// EXERCÍCIO 3
/*
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
    let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
*/
//a. Pedindo ao usuário um número
//Essa mensagem é secreta

//b. Esse número passou no teste  
//Se for -10 não aparece nada


//Escrita de código
// EXERCÍCIO 4
// const idade = Number(prompt('Digite a sua idade: '))

// if (idaide>=18) {
//     console.log('Parabéns! Você pode dirigir.')
// } else {
//     console.log('Você é muito novo, não pode dirigir.')
// }


// EXERCÍCIO 5
// const turno = prompt('Digite a letra do turno em que você estuda: [M: matutino / V:Vespertino / N:Noturno]')

// if(turno === 'M' || turno === 'm'){
//     console.log('Bom dia!')
// } else if(turno === 'v' || turno === 'V'){
//     console.log('Boa tarde!')
// } else if (turno === 'N' || turno === 'n'){
//     console.log('Boa noite!')
// } else {
//     console.log('Comando inválido. Digite uma das letras acima. ')
// }

// EXERCÍCIO 6
// const turno = prompt('Digite a letra do turno em que você estuda: [M: matutino / V:Vespertino / N:Noturno]')

// switch (turno) {
//     case 'M':
//         console.log('Bom dia!')
//         break
//     case 'V':
//         console.log('Boa tarde!')
//         break
//     case 'N':
//         console.log('Boa noite!')
//         break
//     default:
//         console.log('Comando inválido.')
//         console.log('Digite uma das letras acima.')
//         console.log('(tente pôr a letra maiúscula)')
//  }

// EXERCÍCIO 7
// const generoFilme = prompt('Digite o gênero do filme: ')
// const precoFilme = Number(prompt('Digite o preço do ingresso: R$'))

// if(generoFilme === 'fantasia' || generoFilme === 'Fantasia' && precoFilme < 15){
//     console.log('Bom filme!')
// } else {
//     console.log('Escolha outro filme :(')
// }


//Desafios
// DESAFIO 1
// const generoFilme = prompt('Digite o gênero do filme: ')
// const precoFilme = Number(prompt('Digite o preço do ingresso: R$'))
// const snack = prompt('Qual snack você levará? (Pipoca, doces, chocolate...)')

// if(generoFilme === 'fantasia' || generoFilme === 'Fantasia' && precoFilme < 15){
//     console.log('Bom filme!')
//     console.log('... com ' + snack)
// } else {
//     console.log('Escolha outro filme :(')
// }

// DESAFIO 2
const nomeCompleto = prompt('Digite seu nome completo: ')
const tipoDeJogo = Number(prompt('Digite o número do tipo de jogo: (1- internacional / 2 - doméstico)'))
const etapaDeJogo = Number(prompt('Digite o número correspondente a etapa do jogo: (1- semi-final / 2- final)'))
const categoria = Number(prompt('Digite a categoria: (1, 2, 3 ou 4)'))
const quantIngressos = Number(prompt('Digite a quantidade de ingressos:'))

let semiFinal = [1320, 880, 550, 220]
let decisao3Lugar = [660, 440, 330, 170]
let final = [1980, 1320, 880, 330]

if (tipoDeJogo === 1) {
    
} else if (tipoDeJogo === 2){

}else{
    console.log('Digite uma opção válida.')
}


// let precoIngresso, total
// if (tipoDeJogo === 'DO' || tipoDeJogo === 'do'){
//     if (etapaDeJogo === 'SF' || etapaDeJogo === 'sf'){
//         switch (categoria){

//         }
//     }

// }
