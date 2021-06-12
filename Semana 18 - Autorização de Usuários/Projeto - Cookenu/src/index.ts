import app from "./app";
import login from "./endpoints/login";
import signup from "./endpoints/signup";
import getProfile from "./endpoints/getProfile";
import getOtherProfile from "./endpoints/getOtherProfile";

app.get("/user/profile", getProfile)
app.get("/user/:id", getOtherProfile)
app.post("/signup", signup)
app.post("/login", login)