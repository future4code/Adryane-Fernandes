import express from "express";
import { AddressInfo } from "net";
import login from "./endpoints/login";
import signup from "./endpoints/signup";

const app = express();
app.use(express.json());

app.post('/user/signup', signup)
app.post('/user/login', login)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error("Failure upon starting server.");
  }
});