import axios from "axios"
import { useEffect, useState } from "react"
import { urlApi } from '../apiConfig/axiosConfig'

const useRequestData = (urlFinal, initialState) => {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        axios.get(`${urlApi}${urlFinal}`)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }, [urlFinal])

    return data
}

export default useRequestData