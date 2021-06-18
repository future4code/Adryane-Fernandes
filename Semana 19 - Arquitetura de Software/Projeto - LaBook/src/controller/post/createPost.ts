import { Request, Response } from "express";
import { currentDate } from "../../business/date/currentDate";
import createPostBusiness from "../../business/post/createPostBusiness";
import { PostDatabase } from "../../data/post/PostDatabase";
import { authenticationData, postByBody, post } from "../../model/types";
import { getTokenData } from "../../services/authenticator";
import { generateId } from "../../services/generateId";

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