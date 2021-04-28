import axios from 'axios'
import { urlApi, headerConfig } from '../APIConfig/axiosConfig'

function createPost(body) {
  axios.post(`${urlApi}/posts`, body, headerConfig)
    .then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
}

export default createPost