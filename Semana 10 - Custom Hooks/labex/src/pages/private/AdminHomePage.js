import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header'
import useProtectedPage from '../../hooks/useProtectedPage'
import deleteTrip from '../../functions/deleteTrip'
import useRequestDataAuth from '../../hooks/useRequestDataAuth'
import ButtonPattern from '../../components/ButtonPattern'
import { IconButton } from "@chakra-ui/react"
import { DeleteIcon } from '@chakra-ui/icons'
import { Container, Main, ButtonGroup, ButtonGroupRight, TripsList, Trip, TripName } from '../../styles/page/private/AdminHomePageStyles'
import Footer from '../../components/Footer'

function AdminHomePage() {
  useProtectedPage()

  const history = useHistory()
  const tripsList = useRequestDataAuth('/trips', {})

  const goToTripDatailsPage = (id) => {
    history.push(`/admin/trips/${id}`)
  }

  const logout = () => {
    window.localStorage.removeItem('token')
  }

  const tripsOrder = tripsList.trips && tripsList.trips.map((trip) => {
    return (
      <Trip key={trip.id} >
        <TripName onClick={() => goToTripDatailsPage(trip.id)}>{trip.name}</TripName>
        <IconButton
          onClick={() => deleteTrip(trip.id)}
          icon={<DeleteIcon />} />
      </Trip>
    )
  })

  return (
    <Container>
      <Header
        colorLogo={'red'}
      />
      <Main>
        <ButtonGroup>
          <ButtonPattern
            onClick={() => history.push('/admin/trips/create')}
            name={'Criar viagem'}
          />

          <ButtonGroupRight>
            <ButtonPattern
              onClick={() => history.push('/')}
              name={'Voltar'}
              variant={'ghost'}
              color={'black'}
            />
            <ButtonPattern
              onClick={logout}
              name={'Sair'}
            />
          </ButtonGroupRight>
        </ButtonGroup>
        <TripsList>
          {tripsOrder}
        </TripsList>
      </Main>
      <Footer />
    </Container>

  )

}

export default AdminHomePage