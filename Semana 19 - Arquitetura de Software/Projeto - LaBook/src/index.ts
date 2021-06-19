import { authenticationData, user, post } from "./model/types";
import { hashCreate } from "./services/hashManager";
import { generateId } from "./services/generateId";
import { generateToken } from "./services/authenticator";
import { signup } from "./controller/user/signup";
import { app } from "./controller/app";
import login from "./controller/user/login";
import createPost from "./controller/post/createPost";
import { searchPostById } from "./controller/post/searchPostById";

app.post("/users/signup", signup);
app.post("/users/login", login);

app.post("/posts/create", createPost)
app.get("/posts/:id", searchPostById)