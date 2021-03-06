import { compare } from "../../services/hashManager"
import { selectUserByEmail } from "../../data/user/selectUserByEmail"
import { generateToken } from "../../services/authenticator"
import { loginData, user } from "../../model/user"

export const loginBusiness = async (
   userData: loginData
): Promise<string> => {
   if (!userData.email || !userData.password) {
      throw new Error("'email' e 'senha' são obrigatórios")
   }

   const user: user = await selectUserByEmail(userData.email)

   if (!user) {
      throw new Error("Usuário não encontrado ou senha incorreta")
   }

   const passwordIsCorrect: boolean = await compare(userData.password, user.password)

   if (!passwordIsCorrect) {
      throw new Error("Usuário não encontrado ou senha incorreta")
   }

   const token: string = generateToken({
      id: user.id,
      role: user.role
   })

   return token
}