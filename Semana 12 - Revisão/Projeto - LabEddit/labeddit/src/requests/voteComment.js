import axios from 'axios'
import { BASE_URL, headersConfig } from '../APIConfig/axiosConfig'

function voteComment(idPost, idComment, body){
  axios.put(`${BASE_URL}/posts/${idPost}/comment/${idComment}/vote`, body, headersConfig)
  .then((res) => {
    console.log(res.data)
  }).catch((err) => {
    alert(err.response.data.message)
  })
}

export default voteComment