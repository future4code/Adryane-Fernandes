import React  from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header'
import useProtectedPage from '../../hooks/useProtectedPage'
import { ButtonGroup, Button } from '@chakra-ui/react'

import deleteTrip from '../../functions/deleteTrip'
import useRequestDataAuth from '../../hooks/useRequestDataAuth'


function AdminHomePage() {
  useProtectedPage()  

  const history = useHistory()
  const tripsList = useRequestDataAuth('/trips', {})

  const goToTripDatailsPage = (id) => {
    history.push(`/admin/trips/${id}`)
  }

  const logout = () => {
    window.localStorage.removeItem('token')
    history.push('/login')
  }

  const tripsOrder = tripsList.trips && tripsList.trips.map((trip) => {
    return (
      <div onClick={() => goToTripDatailsPage(trip.id)} key={trip.id}>
        {trip.name}
        <Button onClick={() => deleteTrip(trip.id)}>X</Button>
      </div>
    )
  })

  return (
    <div>
      <Header />
      <ButtonGroup>
        <Button onClick={() => history.push('/admin/trips/create')}>Criar Viagem</Button>
        <Button onClick={logout}>Sair</Button>
      </ButtonGroup>
      {tripsOrder}
    </div>

  )

}

export default AdminHomePage