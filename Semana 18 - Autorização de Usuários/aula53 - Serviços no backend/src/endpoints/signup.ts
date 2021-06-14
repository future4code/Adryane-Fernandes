import { Request, Response } from "express";
import connection from "../connection";
import generatedId from "../services/generatedId";
import { generatedtoken } from "../services/authenticator";
import emailIsValid from "../validation/emailIsValid";
import passwordIsValid from "../validation/passwordIsValid";
import { createHash } from "../services/hashManager";
import { address, USER_ROLES } from "../types/types";
import getAddressInfo from "../services/getAddressInfo";

async function signup(req: Request, res: Response): Promise<void> {
  try {
    const { email, password, role, CEP, number, complement } = req.body;

    if (!email) {
      res.statusCode = 400;
      throw new Error("Email não informado");
    }
    emailIsValid(email);

    if (!password) {
      res.statusCode = 400;
      throw new Error("Senha não informada");
    }
    passwordIsValid(password);

    if (!(role in USER_ROLES)) {
      res.statusCode = 400;
      throw new Error("'Role' só poder ser 'NORMAL' ou 'ADMIN'");
    }

    if(!CEP || !number || !complement){
      res.statusCode = 400;
      throw new Error("As informações de endereço não foram preenchidas");
    }

    let address: address = await getAddressInfo(CEP) as address
    if(!address){
      res.statusCode = 404;
      throw new Error("CEP inválido");
    }


    const id = generatedId();
    await connection.raw(`
      INSERT INTO user (id, email, password, role)
      VALUES(
        "${id}",
        "${email}",
        "${createHash(password)}",
        "${role}"
      )
    `);
    await connection.raw(`
        INSERT INTO address (CEP, street, number, complement, neighborhood, city, state, user_id)
        VALUES(
          "${CEP}",
          "${address.street}",
          ${number},
          "${complement}",
          "${address.neighborhood}",
          "${address.city}",
          "${address.state}",
          "${id}"
        )
    `)

    const token = generatedtoken({ id, role });

    res.status(201).send({ token: token });
  } catch (error) {
    res.status(500).send({ message: error.message || error.sqlMessage });
  }
}

export default signup;
