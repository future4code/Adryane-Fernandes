import { useEffect, useState } from 'react'
import axios from 'axios'
import {BASE_URL, headersConfig} from '../APIConfig/axiosConfig'

function useRequestData(initialState, finalUrl) {
  const [data, setData] = useState(initialState)
  
  useEffect(() => {
    axios.get(`${BASE_URL}${finalUrl}`, headersConfig)
    .then((res) => {
      setData(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [finalUrl, data])

  return data
}

export default useRequestData