
//Exercício 1
function inverteArray(array) {
   return array.reverse()
}

//Exercício 2
function retornaNumerosParesElevadosADois(array) {
   let novaArray = []
   for (const num of array) {
      if (num % 2 === 0) {
         novaArray.push(Math.pow(num, 2))
      }
   }
   return novaArray
}

//Exercício 3
function retornaNumerosPares(array) {
   let arrayPar = []
   for (const numero of array) {
      if (numero % 2 === 0) {
         arrayPar.push(numero)
      }
   }
   return arrayPar
}

//Exercício 4
function retornaMaiorNumero(array) {
   let maiorNumero = 0
   for (const numero of array) {
      if (numero > maiorNumero) {
         maiorNumero = numero
      }
   }
   return maiorNumero
}

//Exercício 5
function retornaQuantidadeElementos(array) {
   return array.length
}

//Exercício 6
function retornaExpressoesBooleanas() {
   const resposta = [false, false, true, true, true]
   return resposta
}

//Exercício 7
function retornaNNumerosPares(n) {
   let numerosPares = []
   for (let numero = 0; numero <= n + 3; numero++) {
      if (numero % 2 === 0) {
         numerosPares.push(numero)

      }
   }
   return numerosPares
}


// Exercício 8
function checaTriangulo(a, b, c) {
   if (a === b && b === c) {
      return 'Equilátero'
   } else if (a !== b && b !== c && a !== c) {
      return 'Escaleno'
   } else {
      return 'Isósceles'
   }
}

// Exercício 9
function comparaDoisNumeros(num1, num2) {
   let comparandoNumeros = {
      maiorNumero: 0,
      maiorDivisivelporMenor: false,
      diferenca: 0
   }
   let menorNumero = 0

   //Verificando Maior num
   if (num1 > num2) {
      comparandoNumeros.maiorNumero = num1
      menorNumero = num2
   } else {
      comparandoNumeros.maiorNumero = num2
      menorNumero = num1
   }

   //Verificando se são divisiveis
   if (comparandoNumeros.maiorNumero % menorNumero === 0) {
      comparandoNumeros.maiorDivisivelporMenor = true
   }

   //diferença
   comparandoNumeros.diferenca = comparandoNumeros.maiorNumero - menorNumero

   return comparandoNumeros
}

// Exercício 10
function segundoMaiorEMenor(array) {
   let maior = Math.max.apply(Math, array)
   let menor = Math.min.apply(Math, array)

   //pegando segundo maior
   let segMaior = 0

   for (const numero of array) {
      if (numero > segMaior && numero !== maior) {
         segMaior = numero
      }
   }

   //pegando segundo menor
   let segMenor = maior

   for (const numero of array) {

      if (numero < segMenor && numero > menor) {
         segMenor = numero
      }
   }

   resultado = [segMaior, segMenor]
   return resultado
}

//Exercício 11
function ordenaArray(array) {
   function ordenando(a, b) {
      return (a - b)
   }

   return array.sort(ordenando)
}

// Exercício 12
function filmeFavorito() {
   const filmeFavorito = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   return filmeFavorito
}

// Exercício 13

function imprimeChamada() {
   const imprimindoFilmeFav = {
      ...filmeFavorito()
   }
   let frase = `Venha assistir ao filme ${imprimindoFilmeFav.nome}, de ${imprimindoFilmeFav.ano}, dirigido por ${imprimindoFilmeFav.diretor} e estrelado por ${imprimindoFilmeFav.atores[0]}, ${imprimindoFilmeFav.atores[1]}, ${imprimindoFilmeFav.atores[2]}, ${imprimindoFilmeFav.atores[3]}.`

   return frase
}

// Exercício 14
function criaRetangulo(lado1, lado2) {
   const propriedadeTriangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2 * (lado1 + lado2),
      area: lado1 * lado2
   }

   return propriedadeTriangulo
}

// Exercício 15
function anonimizaPessoa(pessoa) {
   const nomeAnonimo = {
      ...pessoa,
      nome: 'ANÔNIMO'
   }

   return nomeAnonimo
}

// Exercício 16
const arrayDePessoas = [
   { nome: "Pedro", idade: 20 },
   { nome: "João", idade: 10 },
   { nome: "Paula", idade: 12 },
   { nome: "Artur", idade: 89 }
]

// Exercício 16, letra A
function maioresDe18(arrayDePessoas) {
   const adultos = arrayDePessoas.filter((pessoa) => {
      if (pessoa.idade >= 20) {
         return true
      }
   })
   return adultos
}

// Exercício 16, letra B
function menoresDe18(arrayDePessoas) {
   const criancaAdolescente = arrayDePessoas.filter((pessoa) => {
      if (pessoa.idade < 20) {
         return true
      }
   })
   return criancaAdolescente
}

// Exercício 17, letra A
function multiplicaArrayPor2(array) {
   const arrayX2 = []
   for (const numero of array) {
      arrayX2.push(numero * 2)
   }
   return arrayX2
}

// Exercício 17, letra B
function multiplicaArrayPor2S(array) {
   const arrayX2String = array.map((numero) => {
      let numeroMultiplicado = numero * 2
      return String(numeroMultiplicado)
   })
   return arrayX2String
}

// Exercício 17, letra C
function verificaParidade(array) {
   const arrayString = array.map((numero) => {
      if (numero % 2 === 0) {
         return `${numero} é par`
      } else {
         return `${numero} é ímpar`
      }
   })
   return arrayString
}

// Exercício 18

const pessoas = [
   { nome: "Paula", idade: 12, altura: 1.8 },
   { nome: "João", idade: 20, altura: 1.3 },
   { nome: "Pedro", idade: 15, altura: 1.9 },
   { nome: "Luciano", idade: 22, altura: 1.8 },
   { nome: "Artur", idade: 10, altura: 1.2 },
   { nome: "Soter", idade: 70, altura: 1.9 }
]

//Exercício 18, letra A
function retornaPessoasAutorizadas() {
   const autorizados = pessoas.filter((pessoa) => {
      if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
         return true
      }
   })
   return autorizados
}


// Exercício 18, letra B
function retornaPessoasNaoAutorizadas() {
   const naoAutorizados = pessoas.filter((pessoa) => {
      if (pessoa.altura < 1.5 || pessoa.idade >= 60 || pessoa.idade <= 14) {
         return true
      }
   })
   return naoAutorizados
}


//Exercício 19

const consultas = [
   { nome: "João", genero: "masculino", cancelada: false, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: true, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: false, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: true, dataDaConsulta: "04/11/2019" }
 ]

function retornaEmailConsulta() {
   const respostaEmail = consultas.map((paciente) => {
      let tratamento = []
      if (paciente.genero === 'masculino') {
         tratamento[0] = 'Sr.'
         tratamento[1] = 'lembrá-lo'
      } else {
         tratamento[0] = 'Sra.'
         tratamento[1] = 'lembrá-la'
      }

      if (paciente.cancelada === false) {
         return `Olá, ${tratamento[0]} ${paciente.nome}. Estamos enviando esta mensagem para ${tratamento[1]} da sua consulta no dia ${paciente.dataDaConsulta}. Por favor, acuse o recebimento deste-email.`

      } else {
         return `Olá, ${tratamento[0]} ${paciente.nome}. Infelizmente sua consulta marcada para o dia ${paciente.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`

      }
   })
   return respostaEmail
}


//Exercício 20

const contas = [
   { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
   { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
   { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
   { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
   { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
   { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
   contas.forEach((cliente) => {
      let gastoTotal = 0
      for (const gasto of cliente.compras) {
         gastoTotal += gasto
      }

      let novoSaldo = cliente.saldoTotal - gastoTotal

      return cliente.saldoTotal = novoSaldo
   });
   return contas
}