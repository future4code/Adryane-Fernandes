import express from 'express'
import { GetProfileById } from './controller/getProfileById'

export const app = express()

app.use(express.json())

const getProfileById = new GetProfileById()
app.get("/users/profile/:id", getProfileById.handle)

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003")
})