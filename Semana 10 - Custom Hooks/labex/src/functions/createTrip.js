import axios from 'axios'
import {urlApi, headersConfig} from '../apiConfig/axiosConfig'

function createTrip(body){
     axios.post(`${urlApi}/trips`, body, headersConfig)
    .then((res) => {
        alert('Viagem criada')
    }).catch((err) => {
        alert('Viagem não criada')
        console.log(err)
    })
}

export default createTrip