import axios from 'axios'
import { urlApi, token } from '../apiConfig/axiosConfig'

const deleteTrip = (id) => {
    axios.delete(`${urlApi}/trips/${id}`, {
        headers: {
            auth: token
        }
    }).then((res) => { }).catch((err) => { })
}

export default deleteTrip