import { Request, Response } from "express";
import connection from "../connection";
import { getData } from "../services/authenticator";

async function getProfile(req: Request, res: Response): Promise<void> {
  try {
    const token = req.headers.authorization;
    const verificadToken = getData(token!);

    const [result] = await connection.raw(`
      SELECT * FROM user
      WHERE id = "${verificadToken.id}"
    `);

    res.send(result[0]);
  } catch (error) {
    if (error.message.includes("expired")) {
      res.statusCode = 401;
      res.send({ message: "Unauthorized" });
    }

    res.status(500).send({ message: error.message || error.sqlMessage });
  }
}

export default getProfile;
