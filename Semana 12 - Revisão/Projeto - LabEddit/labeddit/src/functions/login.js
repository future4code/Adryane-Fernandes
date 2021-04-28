import axios from 'axios'
import { urlApi } from '../APIConfig/urlApi'

function login(body){
  axios.post(`${urlApi}/login`, body)
  .then((res) => {
    window.localStorage.setItem('token', res.data.token)
  }).catch((err) => {
    console.log(err)
  })
}

export default login