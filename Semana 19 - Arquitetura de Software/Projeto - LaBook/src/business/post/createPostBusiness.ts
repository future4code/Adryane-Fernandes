import { PostDatabase } from "../../data/post/PostDatabase";
import { authenticationData, postByBody, post } from "../../model/types";
import { getTokenData } from "../../services/authenticator";
import { generateId } from "../../services/generateId";
import { currentDate } from "../date/currentDate";
import { CustomError } from "../error/CustomError";

const createPostBusiness = (post: postByBody, token: string) => {
  try {
    const tokenData: authenticationData = getTokenData(token);

    const id: string = generateId();

    const dataPost: post = {
      id: id,
      photo: post.photo,
      description: post.description,
      type: post.type,
      createdAt: currentDate(),
      authorId: tokenData.id
    }

    const postDatabase = new PostDatabase()
    postDatabase.insertPost(dataPost)
  } catch (error) {
    throw new CustomError(error.statusCode, error.message);
  }
};

export default createPostBusiness;
