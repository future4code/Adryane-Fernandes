import axios from 'axios'
import { urlApi } from '../ApiConfig/urlApi'

const signup = async (body) => {
  try {
    const response = await axios.post(`${urlApi}`, body)
    console.log(response)
  } catch (err) {
    console.log(err)
    alert(err)
  }
}

export default signup