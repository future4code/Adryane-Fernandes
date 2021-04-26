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
   let contador = 0
   while (contador < 2) {
      //sorteando cartas
      resultadoUsuario = comprarCarta()
      resultadoPc = comprarCarta()

      valorUsuario += resultadoUsuario.valor
      cartasUsuario.push(resultadoUsuario.texto)
      valorPC += resultadoPc.valor
      cartasPc.push(resultadoPc.texto)
      contador++
   }

   // mostrando resultado
   console.log('Resultado: ')
   console.log('Usuário -  cartas:', cartasUsuario, '- pontuação', valorUsuario)
   console.log('Computador -  cartas:', cartasPc, '- pontuação', valorPC)

   //verificando ganhador
   console.log('+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-')
   if (valorUsuario > valorPC) {
      console.log('Parabéns! Você ganhou 😄🎉')
   } else if (valorPC > valorUsuario) {
      console.log('Não foi dessa vez, o computador ganhou. 😔')
   } else {
      console.log('Deu empate! 😳')
   }
   console.log('+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-')


} else {
   //caso de o usuário não queira jogar
   console.log('Jogo encerrado.')
   console.log('Poxa, que pena! Deixa pra próxima. 😄')
}
