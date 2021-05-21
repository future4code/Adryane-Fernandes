type client = {
  id: number;
  name: string;
  cpf: number;
  birthDate: string;
  balance: number;
  spending: number[];
};

export const accounts: client[] = [
  {
    id: 1,
    name: "Wanda Maximorff",
    cpf: 12345678985,
    birthDate: "01/05/1992",
    balance: 200000,
    spending: [1000, 500, 859, 6000],
  },
  {
    id: 2,
    name: "Julius",
    cpf: 78945612314,
    birthDate: "15/10/1975",
    balance: 0.05,
    spending: [2, 50, 15, 10],
  },
  {
    id: 3,
    name: "Nath",
    cpf: 45612378974,
    birthDate: "07/08/1996",
    balance: 1000000,
    spending: [200],
  },
];
