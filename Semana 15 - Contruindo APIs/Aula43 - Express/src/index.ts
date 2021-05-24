import express, { Express, Request, Response } from "express";
import cors from "cors";
import { countries } from "./countries";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/countries/all", (req: Request, res: Response) => {
  const result = countries.map((country) => {
    return { id: country.id, name: country.name };
  });
  res.status(200).send(result);
});

app.get("/countries/:id", (req: Request, res: Response) => {
  try {
    if (isNaN(Number(req.params.id))) {
      throw new Error("Id must be a number");
    }

    const id = Number(req.params.id);

    const result = countries.find((country) => country.id === id);

    if (!result) {
      throw new Error("Could not find country with specified id");
    }

    res.status(200).send(result);

  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});



app.listen(3003, () => {
  console.log("Server in running in http://localhost:3003");
});
