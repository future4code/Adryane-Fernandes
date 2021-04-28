import axios from 'axios'
import { urlApi } from '../APIConfig/urlApi'

const signup = (body) => {
  axios.post(`${urlApi}/signup`, body)
    .then((res) => {
      window.localStorage.setItem('token', res.data.token)
    }).catch((err) => {
      alert(err)
    })
}

export default signup