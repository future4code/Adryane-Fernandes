import React from 'react'
import { Input, Button, Select } from '@chakra-ui/react'
import useInput from '../../hooks/useInput'
import useRequestData from '../../hooks/useRequestData'
import { useHistory } from 'react-router-dom'
import applyToTrip from '../../functions/applyToTrip'
import useForm from '../../hooks/useForm'


function ApplicationFormPage() {
  const initialState = {
    name: '',
    age: '',
    applicationText: '',
    profession: '',
    country: '',
    trip: ''
  }
  const [form, handleInput] = useForm(initialState)

  const history = useHistory()
  const tripsList = useRequestData('/trips', {})

  const selectTrips = tripsList.trips && tripsList.trips.map((trip) => {
    return <option value={trip.id}>{trip.name}</option>
  })

  const body = {
    name: form.name,
    age: form.age,
    applicationText: form.applicationText,
    profession: form.profession,
    country: form.country
  }

  const submitForm = (event) => {
    event.preventDefault()
    applyToTrip(form.trip, body)
  }

  return (
    <>
      <h1>ApplicationFormPage</h1>
      <form onSubmit={submitForm}>
        <input
          name={'name'}
          placeholder={'Nome'}
          value={form.name}
          onChange={handleInput}
        />
        <input
          name={'age'}
          placeholder={'Idade'}
          value={form.age}
          onChange={handleInput}
        />
        <input
          name={'applicationText'}
          placeholder={'Motivo'}
          value={form.applicationText}
          onChange={handleInput}
        />
        <input
          name={'profession'}
          placeholder={'Profissão'}
          value={form.profession}
          onChange={handleInput}
        />
        <input
          name={'country'}
          placeholder={'País'}
          value={form.country}
          onChange={handleInput}
        />
        <select
          name={'trip'}
          value={form.trip}
          onChange={handleInput}
        >
          <option> - </option>
          {selectTrips}
        </select>
        <button>Enviar</button>
        {/* <button onClick={history.goBack}> Voltar </button> */}
      </form>
    </>
  )
}

export default ApplicationFormPage