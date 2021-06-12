import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";

async function getProfile(req: Request, res: Response): Promise<void> {
  try {
    const authorization: string | undefined = req.headers.authorization;
    if (!authorization) {
      res.statusCode = 403;
      throw new Error("not authorized");
    }

    const { id } = getTokenData(authorization!);

    const [profile] = await connection.raw(`
      SELECT id, name, email FROM user_cookenu
      WHERE id = "${id}"
    `)

    res.send(profile);
  } catch (error) {
    res.status(500).send({ message: error.message || error.sqlMessage });
  }
}

export default getProfile;
