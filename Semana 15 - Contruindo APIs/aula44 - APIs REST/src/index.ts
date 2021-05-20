import express, { Request, Response } from "express";
import cors from "cors";
import { users, types } from "./usersList";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(users);
});


app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
