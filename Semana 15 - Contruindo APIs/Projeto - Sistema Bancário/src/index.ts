import express, { Request, Response } from "express";
import cors from "cors";
import accounts from "./accounts";
import calculatingAge from "./functions/calculatingAge";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/account/all", (req: Request, res: Response) => {
  try {
    res.status(200).send(accounts);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.get("/account/balance", (req: Request, res: Response) => {
  try {
    const name = String(req.query.name).toLowerCase()
    const cpf = Number(req.query.cpf)

    if(!name || !cpf){
      throw new Error("missing information");
    }

    const customerAccount = accounts.filter((client) => client.cpf === cpf && client.name.toLowerCase().includes(name))

    if(customerAccount.length === 0){
      throw new Error("invalid cpf or name");
    }

    const result = {
      id:  customerAccount[0].id,
      balance: customerAccount[0].balance
    }

    res.status(200).send(result)

  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

app.post("/account/create", (req: Request, res: Response) => {
  try {
    const { name, cpf, birthDate } = req.body;

    if (!name || !cpf || !birthDate) {
      throw new Error("incomplete information");
    }

    for (const client of accounts) {
      if (client.cpf === cpf) {
        throw new Error("cpf already registered");
      }
    }

    const age = calculatingAge(birthDate);

    if (age < 18) {
      throw new Error("under 18 cannot open an account");
    }

    const newAccount = {
      id: accounts.length + 1,
      name,
      cpf,
      birthDate,
      balance: 0,
      extract: [],
    };

    accounts.push(newAccount);

    res.end();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.put("/account/add/balance", (req: Request, res: Response)  => {
  try {
    const {name, cpf, value} = req.body

    if(!name || !cpf){
      throw new Error("missing information");
    }
    if(!value){
      throw new Error("missing value");
    }

    const customerAccount = accounts.map((client) => {
      if(client.cpf === cpf && client.name.toLowerCase().includes(name.toLowerCase())){
        client.balance += value
      }
    })

    if(customerAccount.length === 0){
      throw new Error("invalid name or cpf");
    }

    res.end()
  } catch (error) {
    res.status(400).send({message: error.message})
  }
})

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
