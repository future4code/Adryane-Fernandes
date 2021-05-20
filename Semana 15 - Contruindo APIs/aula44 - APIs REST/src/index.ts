import express, { Request, Response } from "express";
import cors from "cors";
import { users, types, user } from "./usersList";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(users);
});

app.get("/users/search/", (req: Request, res: Response) => {
  try {
    const name = String(req.query.name).toLowerCase();

    if (!name) {
      throw new Error("missing parameter");
    }

    const result = users.filter((user) => user.name.toLowerCase() === name);

    if (!result) {
      throw new Error("user not found");
    }

    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

app.get("/users/:type", (req: Request, res: Response) => {
  try {
    const type = req.params.type.toUpperCase();

    if (type !== types.ADMIN && type !== types.NORMAL) {
      throw new Error("type must be admin or normal");
    }

    const result = users.filter((user) => user.type === type);

    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

app.post("/users/add", (req: Request, res: Response) => {
  try {
    const { id, age, email, name, type } = req.body;

    const body: user = {
      id,
      age,
      email,
      name,
      type,
    };

    if (!body) {
      throw new Error("complete filling");
    }

    users.push(body);

    res.status(200).send("ok");
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

app.put("/users/update", (req: Request, res: Response) => {
  try {
    const { id, age, email, name, type } = req.body;

    const body: user = {
      id,
      age,
      email,
      name,
      type,
    };

    users.forEach((user) => {
      if (user.id === body.id) {
        user.name = body.name + " -ALTERADO";
        user.age = body.age;
        user.email = body.email;
        user.type = body.type;
      }
    });

    res.end();
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

app.patch("/users/update/name",  (req: Request, res: Response) => {
  try {
    const { name, id } = req.body
    
    if(!name || !id ){
      throw new Error("incomplete information")
    }
    if(!name.includes("-ALTERADO")){
      throw new Error("the name has not been changed to be changed again ")
    }

    users.forEach((user) => {
      if(user.id === id && user.name.includes("-ALTERADO")){
        user.name = name + " -REAUTERADO"
      }
    })

    res.end()
  } catch (err) {
    res.status(400).send({ message: err.message })
  }
})

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
