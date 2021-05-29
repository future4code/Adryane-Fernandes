import { Request, Response } from "express";
import { app } from "./app";
import { connection } from "./connection";

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = await connection.raw(`
      SELECT * FROM users
      WHERE id = ${id}
    `);

    res.status(200).send(result[0]);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

app.put("/user", async (req: Request, res: Response) => {
  try {
    const { name, nickname, email } = req.body;

    if (!name || !nickname || !email) {
      throw new Error("incomplete information");
    }


    await connection.raw(`
      INSERT INTO users (name, nickname, email)
      VALUES(
        "${name}",
        "${nickname}",
        "${email}"
      )
    `);

    res.status(201).send("created user");
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});
