import express, { Request, Response } from "express";
import cors from "cors";
import { users, types } from "./usersList";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/users/all", (req: Request, res: Response) => {
  res.status(200).send(users);
});

app.get("/users", (req: Request, res: Response) => {
  try {
    const type = String(req.query.type).toUpperCase()

    if(type !== types.ADMIN && type !== types.NORMAL){
      throw new Error("type must be admin or normal")
    }

    const result = users.filter((user) =>  user.type === type)

    res.status(200).send(result)
    
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
