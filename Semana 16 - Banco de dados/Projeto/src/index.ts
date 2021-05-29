import { Request, Response } from "express";
import { app } from "./app";
import { connection } from "./connection";
import formatDate from "./functions/formatDate";

app.get("/user/all", async (req: Request, res: Response) => {
  try {
    const result = await connection("users")

    res.status(200).send(result)
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const [result] = await connection.raw(`
      SELECT * FROM users
      WHERE id = ${id}
    `);

    if (!result[0]) {
      throw new Error("id does not exist");
    }

    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

app.get("/task/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const [user] = await connection.raw(`
      SELECT tasks.id, title, description, limit_date, status, creator_user_id, nickname
      FROM users
      JOIN tasks
      ON users.id = tasks.creator_user_id
      WHERE tasks.id = ${id};
    `);

    if (!user[0]) {
      throw new Error("User does not exist");
    }

    res.status(200).send(user);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

app.post("/user/edit/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { name, nickname } = req.body;

    if (!name || !nickname) {
      throw new Error("incomplete information");
    }

    const users = await connection("users");
    for (const user of users) {
      if (user.nickname === nickname) {
        throw new Error("nickname already exists");
      }
    }

    await connection.raw(`
      UPDATE users
      SET name = "${name}", nickname = "${nickname}"
      WHERE id = ${id}
    `);

    res.status(200).send("updated");
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

    const users = await connection("users");
    for (const user of users) {
      if (user.nickname === nickname) {
        throw new Error("nickname already exists");
      } else if (user.email === email) {
        throw new Error("email already exists");
      }
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

app.put("/task", async (req: Request, res: Response) => {
  try {
    const { title, description, limitDate, creatorUserId } = req.body;

    if (!title || !description || !limitDate || !creatorUserId) {
      throw new Error("incomplete information");
    }

    const users = await connection("users");
    for (const user of users) {
      if (user.creator_user_id === creatorUserId) {
        throw new Error("user not found");
      }
    }

    await connection.raw(`
      INSERT INTO tasks (title, description, limit_date, creator_user_id)
      VALUES(
        "${title}",
        "${description}",
        "${formatDate(limitDate)}",
        ${creatorUserId}
      )
    `);

    res.status(201).send("created task!");
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});
