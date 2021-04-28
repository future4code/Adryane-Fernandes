import axios from 'axios'
import {urlApi, headerConfig} from '../APIConfig/axiosConfig'

function createPost(body){
  axios.post(`${urlApi}/posts`, headerConfig, body)
  .then((res) => {
    console.log(res.data)
  }).catch((err)=> {
    console.log(err)
  })
}

export default createPost