import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import Header from '../../components/Header'
import { Input, Button } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import createTrip from '../../functions/createTrip'

import axios from 'axios'
import { urlApi, headersConfig, token } from '../../apiConfig/axiosConfig'


function CreateTripPage() {
  useProtectedPage()

  const history = useHistory()

  const initialState = {
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: 0,
  }

  const [form, handleInput] = useForm(initialState)

  const body = {
    name: form.name,
    planet: form.planet,
    date: form.date,
    description: form.description,
    durationInDays: form.durationInDays
  }
  // 

  const handleSubmit = (event) => {
    event.preventDefault()
    createTrip(body)
  }


  return (
    <div>
      <Header />

      <form onSubmit={handleSubmit}>
        <input
          required
          placeholder='Nome'
          name={'name'}
          value={form.name}
          onChange={handleInput}
          type={'text'}
          pattern={'(.*[a-z]){5}'}
        />
        <select
          required
          name={'planet'}
          value={form.planet}
          onChange={handleInput}
        >
          <option> Escolha um planeta </option>
          <option value={'mercurio'}>Mercúrio</option>
          <option value={'venus'}>Vênus</option>
          <option value={'terra'}>Terra</option>
          <option value={'marte'}>Marte</option>
          <option value={'jupiter'}>Júpiter</option>
          <option value={'saturno'}>Saturno</option>
          <option value={'urano'}>Urano</option>
          <option value={'netuno'}>Netuno</option>
        </select>

        <input
          required
          placeholder='Data'
          name={'date'}
          value={form.date}
          onChange={handleInput}
          type={'date'}
        />
        <input
          required
          placeholder='Descrição'
          name={'description'}
          value={form.description}
          onChange={handleInput}
          type={'text'}
        />
        <input
          required
          placeholder='Duração'
          name={'durationInDays'}
          value={form.durationInDays}
          onChange={handleInput}
          type={'number'}
        />
        <button>Criar</button>
        {/* <Button onClick={history.goBack}>Voltar</Button> */}
      </form>
    </div>
  )
}

export default CreateTripPage