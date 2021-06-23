import express, { Response, Request, NextFunction } from 'express'
import { GetProfileById } from './controller/getProfileById'
import "express-async-errors"

export const app = express()

app.use(express.json())

const getProfileById = new GetProfileById()
app.get("/users/profile/:id", getProfileById.handle)


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).send({ message: err.message });
  }

  return res.status(500).send({ message: "Internal Server Error" });
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003")
})