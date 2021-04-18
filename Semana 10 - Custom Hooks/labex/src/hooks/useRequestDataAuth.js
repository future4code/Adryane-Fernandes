import axios from "axios"
import { useEffect, useState } from "react"
import { urlApi, token } from '../apiConfig/axiosConfig'

const useRequestDataAuth = (urlFinal, initialState) => {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        axios.get(`${urlApi}${urlFinal}`, {
            headers: {
                auth: token
            }
        })
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }, [urlFinal, data])


    return data
}

export default useRequestDataAuth