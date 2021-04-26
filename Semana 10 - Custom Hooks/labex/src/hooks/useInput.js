import {useState} from 'react'

function useInput(initialState){
    const [value, setValue] = useState(initialState)
    const handleValue = (event) => setValue(event.target.value)

    return [value, handleValue]
}

export default useInput