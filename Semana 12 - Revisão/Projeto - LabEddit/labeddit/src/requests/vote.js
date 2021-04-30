import axios from 'axios'
import { BASE_URL, headersConfig } from '../APIConfig/axiosConfig'

function vote(id, body) {
  axios.put(`${BASE_URL}/posts/${id}/vote`, body, headersConfig)
    .then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
}

export default vote