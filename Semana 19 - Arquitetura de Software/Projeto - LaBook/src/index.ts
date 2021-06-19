import { app } from "./controller/app";
import { userRouter } from "./router/userRouter";
import { postRouter } from "./router/postRouter";

app.use('/users', userRouter)
app.use('/posts', postRouter)
