import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import Header from '../../components/Header'
import { Button } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import createTrip from '../../functions/createTrip'

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

  const handleSubmit = (event) => {
    event.preventDefault()
    createTrip(body)
  }


  let dateNow = new Date().toLocaleDateString()
  const yearNow = dateNow.substring(6)
  const monthNow = dateNow.substring(3, 5)
  const dayNow = dateNow.substring(0, 2)

  console.log(yearNow, monthNow, dayNow)
  return (
    <div>
      <Header />
      {dateNow}
      <form onSubmit={handleSubmit}>
        <input
          required
          placeholder='Nome'
          name={'name'}
          value={form.name}
          onChange={handleInput}
          type={'text'}
          pattern={'(.*[a-z]){5}'}
          title="Nome deve ter no mínimo 5 letras"
        />
        <select
          required
          name={'planet'}
          value={form.planet}
          onChange={handleInput}
        >
          <option value={null}> Escolha um planeta </option>
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
          min={`${yearNow}-${monthNow}-${dayNow}`}
        />
        <textarea
          required
          placeholder='Descrição'
          name={'description'}
          value={form.description}
          onChange={handleInput}
          type={'text'}
          minLength={'30'}
          title="Texto deve ter no mínimo 30 letras"
        />
        <input
          required
          placeholder='Duração'
          name={'durationInDays'}
          min={50}
          value={form.durationInDays}
          onChange={handleInput}
          type={'number'}
        />
        <button>Criar</button>
      </form>
      <Button onClick={() => history.push('/admin/trips/list')}>Voltar</Button>

    </div>
  )
}

export default CreateTripPage