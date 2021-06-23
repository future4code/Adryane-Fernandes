import { Request, Response } from "express";
import { GetProfileByIdBusiness } from "../business/GetProfileByIdBusiness";
import { user } from "../model/interfaces";

export class GetProfileById {
  async handle(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id;
    const getProfileByIdBusiness = new GetProfileByIdBusiness()

    const user: user = await getProfileByIdBusiness.execute(id)

    res.send(user);
  }
}

