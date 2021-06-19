import { PostDatabase } from "../../data/post/PostDatabase";
import { post } from "../../model/types";
import { CustomError } from "../error/CustomError";

export const searchPostByIdBusiness = async (id: string) => {
  try {
    const postDatabase = new PostDatabase()

    const result = await postDatabase.selectById(id)

    return result
  } catch (error) {
    throw new CustomError(error.statusCode, error.message);
  }
};
