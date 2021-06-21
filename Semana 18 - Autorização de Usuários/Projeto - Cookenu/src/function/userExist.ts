import connection from "../connection";

export async function userExist(id: string): Promise<void> {
  const [userExist] = await connection.raw(`
    SELECT id FROM user_cookenu
    WHERE id = "${id}";
  `);

  if (!userExist[0]) {
    throw new Error("unauthorized token, id not in database");
  }
}
