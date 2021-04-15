import React from 'react'
import useRequestData from '../../hooks/useRequestData'
import { useHistory } from 'react-router-dom'
import { Button } from '@chakra-ui/react'


function ListTripsPage() {
  const history = useHistory()

  const tripsList = useRequestData('/trips', {})

  const orderlyTrips = tripsList.trips && tripsList.trips.map((trip) => {
    return (
      <div>
        {trip.name}

      </div>
    )
  })
  return (
    <div>
      <h1>ListTripsPage</h1>
      {orderlyTrips}
      <Button onClick={() => history.push('/trips/application')}>
        Se cadastrar</Button>
        <Button onClick={history.goBack}>Voltar</Button>
    </div>
  )
}

export default ListTripsPage