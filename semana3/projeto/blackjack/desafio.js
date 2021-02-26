/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
//  */
console.log('+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-')
console.log('Bem-vindo(a) ao jogo de Blackjack! 🎲')
console.log('Me chamo Runa! 🙋‍♀️')
console.log('Eu serei a crupiê do jogo, a pessoa que dará as cartas.')
console.log('+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-')


// Variavel pc e usuário
let valorPC = 0
let valorUsuario = 0
let resultadoUsuario, resultadoPc
let cartasUsuario = []
let cartasPc = []

// Jogo
const vamosJogar = confirm('Vamos jogar?')

if (vamosJogar) {
   let contador = 1
   while (contador <= 2) {
      //sorteando cartas
      resultadoUsuario = comprarCarta()
      resultadoPc = comprarCarta()

      valorUsuario += resultadoUsuario.valor
      valorPC += resultadoPc.valor

      cartasUsuario.push(resultadoUsuario.texto)
      cartasPc.push(resultadoPc.texto)

      //testando se as primeiras cartas são 'A'
      if (contador === 0 && valorPC === 11 && valorUsuario === 11) {
         cartasUsuario.splice(0, 1)
         cartasPc.splice(0, 1)

         contador--
      }
      contador++
   }

   //Mostrando carta revelada do pc e mostrando pergunta
   let comprar1Carta = confirm('Suas cartas são: ' + cartasUsuario + '\nA carta revelada do computador é: ' + cartasPc[0] + '\nDeseja comprar mais uma carta?')

   //Comprar mais uma carta Usuário
   do {
      resultadoUsuario = comprarCarta()
      valorUsuario += resultadoUsuario.valor
      cartasUsuario.push(resultadoUsuario.texto)

      comprar1Carta = confirm('Suas cartas agora são: ' + cartasUsuario + '\nDeseja comprar outra carta?')
      if (valorUsuario === 21) {
         comprar1Carta = confirm('Você chegou a pontuação de: ' + valorUsuario + '\nDeseja continuar?')
      } else if (valorUsuario > 21) {
         alert('Você ultrapassou 21 pontos, e chegou a ' + valorUsuario + ' pontos')
         comprar1Carta = false
      }
   } while (comprar1Carta);

   //Se o usuário não chegou a 21, comprar mais uma carta PC
   if (valorUsuario <= 21) {
      do {
         resultadoUsuario = comprarCarta()
         valorUsuario += resultadoUsuario.valor
         cartasUsuario.push(resultadoUsuario.texto)
      } while (valorPC >= valorUsuario);
   }


   // // mostrando resultado
   // console.log('Resultado: ')
   // console.log('Usuário -  cartas:', cartasUsuario, '- pontuação', valorUsuario)
   // console.log('Computador -  cartas:', cartasPc, '- pontuação', valorPC)

   // //verificando ganhador
   // console.log('+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-')
   // if (valorUsuario > valorPC) {
   //    console.log('Parabéns! Você ganhou 😄🎉')
   // } else if (valorPC > valorUsuario) {
   //    console.log('Não foi dessa vez, o computador ganhou. 😔')
   // } else {
   //    console.log('Deu empate! 😳')
   // }
   // console.log('+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-')


} else {
   //caso de o usuário não queira jogar
   console.log('Jogo encerrado.')
   console.log('Poxa, que pena! Deixa pra próxima. 😄')
}