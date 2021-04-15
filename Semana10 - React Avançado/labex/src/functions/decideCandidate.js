import axios from "axios"
import { urlApi, headersConfig } from '../apiConfig/axiosConfig'

function decideCandidate(body, tripId, candidateId){
    axios.put(`${urlApi}/trips/${tripId}/candidates/${candidateId}/decide`, body, headersConfig)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
}

export default decideCandidate