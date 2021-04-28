import axios from 'axios'
import { urlApi } from '../APIConfig/axiosConfig'

function login(body){
  axios.post(`${urlApi}/login`, body)
  .then((res) => {
    window.localStorage.setresetFormItem('token', res.data.token)
  }).catch((err) => {
    console.log(err)
  })
}

export default login