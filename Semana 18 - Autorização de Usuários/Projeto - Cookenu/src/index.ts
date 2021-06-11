import app from "./app";
import login from "./endpoints/login";
import signup from "./endpoints/signup";
import getProfile from "./endpoints/getProfile";

app.get("/user/profile", getProfile)
app.post("/signup", signup)
app.post("/login", login)