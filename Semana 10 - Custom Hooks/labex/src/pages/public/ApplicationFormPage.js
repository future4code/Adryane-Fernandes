import React from 'react'
import useRequestData from '../../hooks/useRequestData'
import { useHistory } from 'react-router-dom'
import applyToTrip from '../../functions/applyToTrip'
import useForm from '../../hooks/useForm'
import Header from '../../components/Header'
import { Form, Container } from '../../styles/page/public/ApplicationFormPage'


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
      <Header />
      <Container>
        <Form onSubmit={submitForm}>
          <input
            required
            name={'name'}
            placeholder={'Nome'}
            value={form.name}
            onChange={handleInput}
            type={'text'}
            pattern={'(.*[a-z]){3}'}
            title="Nome deve ter no mínimo 3 letras"
          />
          <input
            required
            name={'age'}
            placeholder={'Idade'}
            value={form.age}
            onChange={handleInput}
            type={'number'}
            min={18}
          />

          <input
            required
            name={'profession'}
            placeholder={'Profissão'}
            value={form.profession}
            onChange={handleInput}
            minlength={5}
            title="Nome deve ter no mínimo 5 caracteres"
          />
          <input
            required
            name={'country'}
            placeholder={'País'}
            value={form.country}
            onChange={handleInput}
          />
          <textarea
            required
            name={'applicationText'}
            placeholder={'Motivo'}
            value={form.applicationText}
            onChange={handleInput}
            minlength={30}
            title="Nome deve ter no mínimo 3 letras"
          />
          <select
            required
            name={'trip'}
            value={form.trip}
            onChange={handleInput}
          >
            <option> - </option>
            {selectTrips}
          </select>
          <button>Enviar</button>
          <button onClick={() => history.push('/trips/list')}> Voltar </button>

        </Form>

      </Container>
    </>
  )
}

export default ApplicationFormPage