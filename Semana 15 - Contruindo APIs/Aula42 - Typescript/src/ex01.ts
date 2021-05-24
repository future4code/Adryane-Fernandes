// a) Dá erro e diz que aquela variavel só pode receber string

// b) Adicionamos um | entre os dois tipo. Ex.: meuNumero: number | string 

// c) e d)
enum coresDoArcoIris {
  VERMELHO = 'Vermelho',
  LARANJA = 'Laranja',
  AMARELO = 'Amarelo',
  VERDE = 'Verde',
  AZUL = 'Azul',
  VIOLETA = 'Violeta'
}

type pessoa = {
  nome: string,
  idade: number,
  corFavorita: string
}

const pessoa1: pessoa = {
  nome: 'Luiz',
  idade: 10,
  corFavorita: coresDoArcoIris.AMARELO
}
const pessoa2: pessoa = {
  nome: 'Maria',
  idade: 8,
  corFavorita: coresDoArcoIris.AZUL
}
const pessoa3: pessoa = {
  nome: 'Julia',
  idade: 13,
  corFavorita: coresDoArcoIris.LARANJA
}
const pessoa4: pessoa = {
  nome: 'Pedro',
  idade: 6,
  corFavorita: coresDoArcoIris.VIOLETA
}
