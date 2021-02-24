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

let semiFinal = [1320, 880, 550, 220]
let decisao3Lugar = [660, 440, 330, 170]
let final = [1980, 1320, 880, 330]

let localJogo, jogo, precoIngresso, titulo

if (tipoDeJogo === 1 || tipoDeJogo === 2) {
    const etapaDeJogo = Number(prompt('Digite o número correspondente a etapa do jogo: (1- semi-final / 2- Decisão do 3° lugar / 3- Final)'))


    if (etapaDeJogo >= 1 && etapaDeJogo <= 3) {

        const categoria = Number(prompt('Digite a categoria: (1, 2, 3 ou 4)'))
        if (categoria >= 1 && categoria <= 4) {
            const quantIngressos = Number(prompt('Digite a quantidade de ingressos:'))
            switch (etapaDeJogo) {
                case 1:
                    jogo = 'Semifinal'
                    switch (categoria) {
                        case 1:
                            precoIngresso = semiFinal[0]
                            break
                        case 2:
                            precoIngresso = semiFinal[1]
                            break
                        case 3:
                            precoIngresso = semiFinal[2]
                            break
                        case 4:
                            precoIngresso = semiFinal[3]
                            break
                    }
                    break

                case 2:
                    jogo = 'Decisão do 3° lugar'

                    switch (categoria) {
                        case 1:
                            precoIngresso = decisao3Lugar[0]
                            break
                        case 2:
                            precoIngresso = decisao3Lugar[1]
                            break
                        case 3:
                            precoIngresso = decisao3Lugar[2]
                            break
                        case 4:
                            precoIngresso = decisao3Lugar[3]
                            break
                    }
                    break

                case 3:
                    jogo = 'Final'

                    switch (categoria) {
                        case 1:
                            precoIngresso = final[0]
                            break
                        case 2:
                            precoIngresso = final[1]
                            break
                        case 3:
                            precoIngresso = final[2]
                            break
                        case 4:
                            precoIngresso = final[3]
                            break
                    }
                    break
            }

            if (tipoDeJogo === 1) {
                localJogo = 'Nacional'
                titulo = 'Jogo internacional'
                precoIngresso = precoIngresso * 4.10
            } else {
                localJogo = 'Internacional'
                titulo = 'Jogo internacional'
            }

            let total = precoIngresso * quantIngressos

            console.log(titulo)
            console.log('')
            console.log('----------Dados da compra----------')
            console.log('Nome do cliente:', nomeCompleto)
            console.log('Tipo do jogo:', localJogo)
            console.log('Etapa do jogo', jogo)
            console.log('Categoria:', categoria)
            console.log('Quantidade de ingressos:', quantIngressos)
            console.log('')
            console.log('---------------Valores-------------')
            console.log('Valor do ingresso:', precoIngresso)
            console.log('Valor total:', total)  
        } else {
            console.log('Categoria digitada não condiz com as opções.')
            console.log('Compra encerrada')
        }
    } else {
        console.log('Etapa do jogo digitada não condiz com as opções.')
        console.log('Compra encerrada')
    }
} else {
    console.log('Tipo de jogo digitado não condiz com as opções.')
    console.log('Compra encerrada')
}
