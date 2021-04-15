import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import Header from '../../components/Header'
import { Input, Button } from '@chakra-ui/react'
import useInput from '../../hooks/useInput'
import { useHistory } from 'react-router-dom'

import axios from 'axios'
import {urlApi} from '../../apiConfig/axiosConfig'

function CreateTripPage() {
    useProtectedPage()

    const history = useHistory()

    const [name, handleName] = useInput('')
    const [planet, handlePlanet] = useInput('')
    const [date, handleDate] = useInput('')
    const [description, handleDescription] = useInput('')
    const [durationInDays, handleDuration] = useInput(0)

    

    const createTrip = () => {
        const body = {
            name: name,
            planet: planet,
            date: date,
            description: description,
            durationInDays: durationInDays
        }

        axios.post(`${urlApi}/trips`, body, {
            headers:{
                auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0'
            }
        })
        .then((res) => {
            console.log(res.data.trip)
            
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <Header />

            <Input
                placeholder='Nome'
                value={name}
                onChange={handleName}
            />
            <Input
                placeholder='Planeta'
                value={planet}
                onChange={handlePlanet}
            />
            <Input
                placeholder='Data'
                value={date}
                onChange={handleDate}
            />
            <Input
                placeholder='Descrição'
                value={description}
                onChange={handleDescription}
            />
            <Input
                placeholder='Duração'
                value={durationInDays}
                onChange={handleDuration}
            />
            <Button onClick={createTrip}>Criar</Button>
            <Button onClick={history.goBack}>Voltar</Button>
        </div>
    )
}

export default CreateTripPage