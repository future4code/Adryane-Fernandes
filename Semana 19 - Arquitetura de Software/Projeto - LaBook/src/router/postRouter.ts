import { Router } from "express";
import createPost from "../controller/post/createPost";
import { searchPostById } from "../controller/post/searchPostById";

export const postRouter = Router();

postRouter.get("/:id", searchPostById);
postRouter.post("create", createPost);
