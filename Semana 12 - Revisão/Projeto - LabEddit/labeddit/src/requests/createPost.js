import axios from 'axios'
import { BASE_URL, headersConfig } from '../APIConfig/axiosConfig'

function createPost(body) {
  axios.post(`${BASE_URL}/posts`, body, headersConfig)
    .then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
}

export default createPost