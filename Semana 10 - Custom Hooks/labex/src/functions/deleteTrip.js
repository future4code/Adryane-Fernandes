import axios from 'axios'
import { urlApi, headersConfig } from '../apiConfig/axiosConfig'


const deleteTrip = (id) => {
    axios.delete(`${urlApi}/trips/${id}`, headersConfig)
    .then((res) => { 

    }).catch((err) => { })
}

export default deleteTrip