import * as jwt from "jsonwebtoken"
import {authenticationData} from '../types/types'

function getData(token: string): authenticationData {
    const payload = jwt.verify(token, process.env.JWT_KEY!) as any
    const result = {
      id: payload.id
    }

    return result
}

export default getData