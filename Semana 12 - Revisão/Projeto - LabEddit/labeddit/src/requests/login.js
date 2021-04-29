import axios from 'axios'
import { BASE_URL } from '../APIConfig/axiosConfig'

function login(body){
  axios.post(`${BASE_URL}/login`, body)
  .then((res) => {
    window.localStorage.setresetFormItem('token', res.data.token)
  }).catch((err) => {
    console.log(err)
  })
}

export default login