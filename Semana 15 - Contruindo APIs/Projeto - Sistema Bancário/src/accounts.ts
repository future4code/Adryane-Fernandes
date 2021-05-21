export type client = {
  id: number;
  name: string;
  cpf: number;
  birthDate: string;
  balance: number;
  extract: spending[];
};

export type spending = {
  id: number,
  date: string;
  value: number;
  description: string;
};

export const accounts: client[] = [
  {
    id: 1,
    name: "Wanda Maximorff",
    cpf: 12345678985,
    birthDate: "01/05/1992",
    balance: 200000,
    extract: [
      {
        id: 1,
        date: "16/04/2021",
        value: 250000,
        description: "Terreno em Westview",
      },
      {
        id: 2,
        date: "17/04/2021",
        value: 120,
        description: "Frauda para os gêmeos",
      },
      {
        id: 3,
        date: "18/04/2021",
        value: 320,
        description: "Fantasias pro Halloween",
      }
    ]
  },
  {
    id: 2,
    name: "Julius",
    cpf: 78945612314,
    birthDate: "15/10/1975",
    balance: 0.05,
    extract: [
      {
        id: 1,
        date: "25/04/2021",
        value: 10,
        description: "Leite pras crianças",
      },
    ],
  },
  {
    id: 3,
    name: "Nath",
    cpf: 45612378974,
    birthDate: "07/08/1996",
    balance: 1000000,
    extract: [
      {
        id: 1,
        date: "21/03/2021",
        value: 1000,
        description: "Investimento no tesouro direto",
      },
      {
        id: 2,
        date: "17/04/2021",
        value: 2500,
        description: "Investimento em fundos imobiliários",
      },
    ],
  },
];

