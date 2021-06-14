import { app } from "./controller/app";
import signup from "./controller/signup";
import login from "./controller/login";
import getAll from "./controller/getAll";

app.get("/user/all", getAll)

app.post("/signup", signup)
app.post("/login", login)