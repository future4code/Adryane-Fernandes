import { Request, Response } from "express";
import connection from "../connection";
import { createRandomPassword } from "../function/createRandomPassword";
import { getTokenData } from "../services/authenticator";
import { createHash } from "../services/hashManager";
import transporter from "../services/transporter";
import { authenticatorData } from "../types";

async function resetPassword(req: Request, res: Response): Promise<void> {
  try {
    const email = req.body.email as string;
    if (!email) {
      res.statusCode = 400;
      throw new Error("Incomplete information on the body");
    }

    const [user] = await connection.raw(`
      SELECT id, name, email FROM user_cookenu
      WHERE email = "${email}"
    `);
    if (!user) {
      res.statusCode = 400;
      throw new Error("Unregistered email");
    }

    const newPassword = createRandomPassword();
    await transporter.sendMail({
      from: `Cookenu <${process.env.NODEMAILER_USER}>`,
      to: email,
      subject: "Nova senha",
      text: `Sua senha foi atualizada: ${newPassword}`,
    });

    const hashNewPassword = createHash(newPassword);
    await connection.raw(`
      UPDATE user_cookenu
      SET password = ${hashNewPassword}
      WHERE email = ${email};
    `);

    console.log({ hashNewPassword });
    res.end();
  } catch (error) {
    res.statusCode = 500;
    if (error.message.includes("jwt expired")) {
      res.status(403).send({ message: "Token expired" });
    }

    res.send({ message: error.message || error.sqlMessage });
  }
}

export default resetPassword;
