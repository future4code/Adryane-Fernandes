import { connection } from "../connection"
import { user, userModel } from "../../model/user"

export const selectUserByEmail = async (
   email: string
): Promise<user> => {
   try {
      const [result] = await connection("to_do_list_users")
         .select("*")
         .where({ email })

      return userModel(result[0])

   } catch (error) {
      throw new Error(error.slqMessage || error.message)
   }
}