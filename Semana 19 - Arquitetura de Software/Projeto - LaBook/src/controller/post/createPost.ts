import { Request, Response } from "express";
import createPostBusiness from "../../business/post/createPostBusiness";
import { postByBody} from "../../model/types";

const createPost = async (req: Request, res: Response) => {
  try {
    const { photo, description, type } = req.body;
    const token: string = req.headers.authorization as string;

    const postData: postByBody = {
      photo,
      description,
      type
    }

    createPostBusiness(postData, token)

    res.status(201).send({ message: "created!" });
  } catch (error) {
    res.send({ message: error.message || error.sqlMessage });
  }
};

export default createPost