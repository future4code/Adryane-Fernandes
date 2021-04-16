import axios from 'axios'
import {urlApi, headersConfig, token} from '../apiConfig/axiosConfig'

function createTrip(body){
     axios.post(`${urlApi}/trips`, body, {
        headers: {
            auth: token
        }})
    .then((res) => {
        console.log(res.data.trip)
    }).catch((err) => {
        console.log(err)
    })
}

export default createTrip