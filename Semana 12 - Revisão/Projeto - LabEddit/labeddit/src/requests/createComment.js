import axios from 'axios'
import { BASE_URL, headersConfig} from '../APIConfig/axiosConfig'

function createComment(body, id){
  axios.post(`${BASE_URL}/posts/${id}/comment`, body, headersConfig)
  .then((res) => {
    console.log(res.data)
  }).catch((err) => {
    alert(err.response.data.message)
  })
}

export default createComment