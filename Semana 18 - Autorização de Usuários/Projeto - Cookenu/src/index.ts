import app from "./app";
import login from "./endpoints/login";
import signup from "./endpoints/signup";
import getProfile from "./endpoints/getProfile";
import getOtherProfile from "./endpoints/getOtherProfile";
import createRecipe from "./endpoints/createRecipe";
import getRecipe from "./endpoints/getRecipe";
import followUser from "./endpoints/followUser";
import unfollowUser from "./endpoints/unfollowUser";

app.get("/user/profile", getProfile)
app.get("/user/:id", getOtherProfile)

app.get("/recipe/:id", getRecipe)


app.post("/signup", signup)
app.post("/login", login)
app.post("/user/follow", followUser)
app.post("/user/unfollow", unfollowUser)

app.post("/recipe", createRecipe)