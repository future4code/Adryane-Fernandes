import { app } from "./controller/app"
import { createTask } from './controller/task/createTask'
import { getTaskById } from './controller/task/getTaskById'
import { taskRouter } from "./routes/taskRouter"
import { userRouter } from "./routes/userRouter"

userRouter.use("/user", userRouter)
taskRouter.use("/task", taskRouter)

