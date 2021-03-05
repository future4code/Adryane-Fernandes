
let arrayTeste = [0, 15, 13, 19, 28, 4, 8, 27]
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

// console.log(retornaNumerosPares(arrayTeste))

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
   for (let numero = 0; numero <= n+3; numero++) {
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
   } else if (a !== b && b !== c && a !== c){
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
      visivelporMenor: false,
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
   // implemente sua lógica aqui

}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui

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
   return `Venha assistir ao filme ${imprimindoFilmeFav.nome}, de ${imprimindoFilmeFav.ano}, dirigido por ${imprimindoFilmeFav.diretor} e estrelado por ${imprimindoFilmeFav.atores[0]}, ${imprimindoFilmeFav.atores[1]}, ${imprimindoFilmeFav.atores[2]}, ${imprimindoFilmeFav.atores[3]}`
}


// Exercício 14
function criaRetangulo(lado1, lado2) {
   const propriedadeTriangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2*(lado1+lado2),
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
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
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

function retornaPessoasAutorizadas(pessoas) {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas(pessoas) {
   // implemente sua lógica aqui
}

//Exercício 19

const consultas = [
   { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

function retornaEmailConsulta(consultas) {
   // implemente sua lógica aqui
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
   // implemente sua lógica aqui
}