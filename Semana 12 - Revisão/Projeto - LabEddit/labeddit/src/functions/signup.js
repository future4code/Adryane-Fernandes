import axios from 'axios'
import { urlApi } from '../APIConfig/urlApi'

const signup = (body) => {
  axios.post(`${urlApi}/signup`, body)
    .then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
      alert(err)
    })
}

export default signup