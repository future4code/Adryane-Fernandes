import axios from 'axios'
import { BASE_URL } from '../APIConfig/axiosConfig'

const signup = (body) => {
  axios.post(`${BASE_URL}/signup`, body)
    .then((res) => {
      window.localStorage.setItem('token', res.data.token)
    }).catch((err) => {
      alert(err.response.data.message)
    })
}

export default signup