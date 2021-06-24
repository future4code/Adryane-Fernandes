import { Request, Response } from "express";
import { searchPostByIdBusiness } from "../../business/post/searchPostByIdBusiness";

export const searchPostById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await searchPostByIdBusiness(id);

    res.status(200).send(result);
  } catch (error) {
    res.status(error.statusCode).send({ message: error.message });
  }
};
