import app from "./app";
import login from "./endpoints/login";
import signup from "./endpoints/signup";
import getProfile from "./endpoints/getProfile";
import getOtherProfile from "./endpoints/getOtherProfile";
import createRecipe from "./endpoints/createRecipe";
import getRecipe from "./endpoints/getRecipe";
import followUser from "./endpoints/followUser";
import unfollowUser from "./endpoints/unfollowUser";
import getFeed from "./endpoints/getFeed";
import editRecipe from "./endpoints/editRecipe";
import deleteRecipe from "./endpoints/deleteRecipe";
import deleteUser from "./endpoints/deleteUser";
import resetPassword from "./endpoints/resetPassword";

app.get("/user/profile", getProfile)
app.get("/user/feed", getFeed)
app.get("/user/:id", getOtherProfile)
app.get("/recipe/:id", getRecipe)

app.post("/signup", signup)
app.post("/login", login)
app.post("/user/follow", followUser)
app.post("/user/unfollow", unfollowUser)
app.post("/recipe", createRecipe)

app.put("/user/changePassword", resetPassword)
app.put("/recipe/:id/edit", editRecipe)

app.delete("/recipe/:id/delete", deleteRecipe)
app.delete("/user/:id/delete", deleteUser)