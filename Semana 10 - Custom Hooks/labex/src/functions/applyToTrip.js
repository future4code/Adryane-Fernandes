import axios from "axios"
import { urlApi } from "../apiConfig/axiosConfig"

function applyToTrip(id, body){
    axios.post(`${urlApi}/trips/${id}/apply`, body)
    .then((res) => {
        alert('cadastrada')
    })
    .catch((err) => console.log(err))
}

export default applyToTrip