import React from 'react'
import { Input, Button, Select } from '@chakra-ui/react'
import useInput from '../../hooks/useInput'
import useRequestData from '../../hooks/useRequestData'
import { useHistory } from 'react-router-dom'
import applyToTrip from '../../functions/applyToTrip'

function ApplicationFormPage() {
  const [name, handleName] = useInput('')
  const [age, handleAge] = useInput('')
  const [applicationText, handleApplicationText] = useInput('')
  const [profession, handleProfession] = useInput('')
  const [country, handleCountry] = useInput('')
  const [trip, handleTrip] = useInput('')


  const history = useHistory()
  const tripsList = useRequestData('/trips', {})

  const selectTrips = tripsList.trips && tripsList.trips.map((trip) => {
    return <option value={trip.id}>{trip.name}</option>
  })

  const body = {
    name,
    age,
    applicationText,
    profession,
    country
  }

  
  return (
    <>
      <h1>ApplicationFormPage</h1>
      <Input
        placeholder={'Nome'}
        value={name}
        onChange={handleName}
      />
      <Input
        placeholder={'Idade'}
        value={age}
        onChange={handleAge}
      />
      <Input
        placeholder={'Motivo'}
        value={applicationText}
        onChange={handleApplicationText}
      />
      <Input
        placeholder={'Profissão'}
        value={profession}
        onChange={handleProfession}
      />
      <Input
        placeholder={'País'}
        value={country}
        onChange={handleCountry}
      />
      <Select
        value={trip}
        onChange={handleTrip}
      >
        <option> - </option>
        {selectTrips}
      </Select>
      <Button onClick={() => applyToTrip(trip, body)}>Enviar</Button>
      <Button onClick={history.goBack}> Voltar </Button>
    </>
  )
}

export default ApplicationFormPage