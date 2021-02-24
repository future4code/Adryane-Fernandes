/*EXERCÍCIO 1
a = 10
b = 10

console.log(b)
//Será impresso o que está na variável b, ou seja: 10.

b = 5
console.log(a, b)*/
// Será impresso o que está na variável a e b, ou seja: 10 5.


/*EXERCÍCIO 2
a = 10
b = 20
c = a
b = c
a = b

console.log(a, b, c)*/
//Será impresso a, b e c: 10 20 a


// // 1
let nome
let idade
console.log('Tipo do nome:', typeof nome) 
console.log('Tipo da idade:', typeof idade)
// //Por serem variáveis sem uma atribuição, não foi definido um tipo. Sendo assim, indefinido.

nome = prompt('Digite seu nome:')
idade = prompt('Digite sua idade:')
console.log('Tipo do nome:', typeof nome) 
console.log('Tipo da idade:', typeof idade)
// //Agora que foram atribuidos valores, seus tipos passaram a ser string, até mesmo o 'idade'

console.log('Olá', nome, ', você tem', idade, 'anos.')


// // 2
const serie = prompt('Qual sua série favorita?')
const filme = prompt('Qual seu filme favorito?')
const heroi = prompt('Qual héroi mais gosta?')
const musica = prompt('Qual música é sua favorita?')
const anime = prompt('Qual seu anime favorito?')

console.log('1. Série favorita:')
console.log('RESPOSTA:', serie)
console.log('2. Filme favorito:')
console.log('RESPOSTA:', filme)
console.log('3. Herói favorito:')
console.log('RESPOSTA:', heroi)
console.log('4. Música favorita:')
console.log('RESPOSTA:', musica)
console.log('5. Anime favorito:')
console.log('RESPOSTA:', anime)

// 3
let comidasFavoritas = ['Estrogonofe', 'Carne assada', 'Escondidinho', 'Lasanha', 'Macarronese']

console.log(comidasFavoritas)
console.log('Essas são minhas comidas favoritas:')
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

comidasFavoritas[1] = prompt('Qual a sua comida favorita?')
console.log('Gostei da sua escolha, vou pôr na minha lista:',comidasFavoritas)

// 4
const perguntas = ['Você bebeu água hoje?', 'Você tem bicho de estimação?', 'Você mora com os pais?']
const respostas = [true, false]

console.log(perguntas[0], respostas[1])
console.log(perguntas[1], respostas[0])
console.log(perguntas[2], respostas[0])



