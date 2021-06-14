import { app } from "./controller/app";
import signup from "./controller/signup";
import login from "./controller/login";

app.post("/signup", signup)
app.post("/login", login)