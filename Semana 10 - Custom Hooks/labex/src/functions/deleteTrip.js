import axios from 'axios'
import { urlApi, headersConfig } from '../apiConfig/axiosConfig'


const deleteTrip = (id) => {
    const res = window.confirm('Tem certeza que deseja apagar a viagem?')
    if (res) {
        axios.delete(`${urlApi}/trips/${id}`, headersConfig)
            .then((res) => {
            }).catch((err) => {
                alert('Viagem não apagada')
            })
    }

}

export default deleteTrip