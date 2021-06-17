import express from "express"

export const app = express()
app.use(express.json())

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003")
})