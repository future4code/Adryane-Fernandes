import axios from 'axios'
import { BASE_URL } from '../APIConfig/axiosConfig'
import { goToFeed } from '../router/coordinator'

function login(body, resetForm, history){
  axios.post(`${BASE_URL}/login`, body)
  .then((res) => {
    window.localStorage.setItem('token', res.data.token)
    resetForm()
    goToFeed(history)
  }).catch((err) => {
    alert(err.response.data.message)
  })
}

export default login