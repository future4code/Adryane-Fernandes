import axios from 'axios'
import {urlApi, headersConfig} from '../apiConfig/axiosConfig'

function createTrip(body){
     axios.post(`${urlApi}/trips`, body, headersConfig)
    .then((res) => {
        console.log(res.data.trip)
    }).catch((err) => {
        console.log(err)
    })
}

export default createTrip