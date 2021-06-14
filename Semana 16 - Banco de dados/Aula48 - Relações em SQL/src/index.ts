import { Response, Request } from "express";
import app from "./app";
import { connection } from "./connection";

app.get("/", async (req: Request, res: Response) => {
  try {
    const [result] = await connection.raw(`
      SELECT * FROM Actor
    `);

    res.status(201).send(result);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});
app.get("/actors", async (req: Request, res: Response) => {
  try {
    const gender = req.query.gender;

    enum genderOptions {
      FEMALE = "female",
      MALE = "male",
    }

    if (gender !== genderOptions.FEMALE && gender !== genderOptions.MALE) {
      throw new Error("invalid gender");
    }

    const [result] = await connection.raw(`
      SELECT COUNT(*) AS "Number ${gender}"
      FROM Actor
      WHERE gender = "${gender}"
    `);

    res.status(201).send(result);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

app.get("/actors/:name", async (req: Request, res: Response) => {
  try {
    const name = req.params.name;

    if (!name) {
      throw new Error("name was not passed");
    }

    const [result] = await connection.raw(`
      SELECT * FROM Actor
      WHERE name LIKE "%${name}%"
    `);

    res.send(result);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

app.put("/actors/:id/update", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const salary = req.body.salary;

    if (!id || !salary) {
      throw new Error("incomplete information");
    }

    await connection("Actor")
      .update({
        salary: salary,
      })
      .where({
        id: id,
      });

    res.status(201).send("salary update");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.delete("/actors/delete/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    connection("Actor").delete().where({ id: id });

    res.send("Actor deleted!");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
