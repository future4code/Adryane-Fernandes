import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
// import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/users/all", async (req: Request, res: Response) => {
  try {
    const users = await connection.raw(`
    SELECT id, name, email, type
    FROM aula48_exercicio;
 `);

    if (!users[0].length) {
      res.statusCode = 404;
      throw new Error("No users found");
    }

    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message || error.sqlMessage);
  }
});

app.get("/users", async (req: Request, res: Response) => {
  try {
    const name = req.query.name as string;

    if (!name) {
      res.statusCode = 400;
      throw new Error("Incomplete parameters");
    }

    const [users] = await connection.raw(`
    SELECT id, name, email, type
    FROM aula48_exercicio
    WHERE LOWER(name) LIKE "%${name.toLowerCase()}%";    
 `);

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No users found");
    }

    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message || error.sqlMessage);
  }
});

const server = app.listen(3003, () => {
  console.log(`Server is running in http://localhost:3003`);
});
