import { useEffect, useState } from 'react'
import axios from 'axios'
import {urlApi, headerConfig} from '../APIConfig/axiosConfig'

function useRequestData(initialState, finalUrl) {
  const [data, setData] = useState(initialState)
  useEffect(() => {
    axios.get(`${urlApi}${finalUrl}`, headerConfig)
    .then((res) => {
      setData(res.data.posts)
    })
    .catch((err) => {
      alert(err)
    })
  }, [finalUrl, data])

  return data
}

export default useRequestData