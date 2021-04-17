import React from 'react'
import useRequestData from '../../hooks/useRequestData'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header'
import { Message, ButtonGroup, MessageAndButton, ContainerCards, Card, Tittle, Description, ContainerInfos, Infos, TittleInfos, Container, ContainerDateDuraction } from '../../styles/page/public/ListTripsPageStyles'
import Footer from '../../components/Footer'
import ButtonGhost from '../../components/ButtonGhost'
import ButtonSolid from '../../components/ButtonSolid'

// import Button from '@chakra-ui/react'


function ListTripsPage() {
  const history = useHistory()

  const tripsList = useRequestData('/trips', {})

  const orderlyTrips = tripsList.trips && tripsList.trips.map(
    (trip) => {

      let dateNow = trip.date
      const yearNow = dateNow.substring(0, 4)
      const monthNow = dateNow.substring(5, 7)
      const dayNow = dateNow.substring(8)
      return (
        <Card>
          <ContainerInfos>
            <Tittle>{trip.name}</Tittle>
            <ContainerDateDuraction>
              <Infos>
                <TittleInfos>Data:</TittleInfos>
                {dayNow}/{monthNow}/{yearNow}
              </Infos>
              <Infos>
                <TittleInfos>Duração:</TittleInfos>
                {trip.durationInDays} dias
              </Infos>
              <Infos>
                <TittleInfos>Planeta:</TittleInfos>
                {trip.planet}
              </Infos>
            </ContainerDateDuraction>
          </ContainerInfos>

          <div>
            <Description>{trip.description}</Description>
          </div>

        </Card>
      )
    })
  return (
    <Container>
      <Header />
      <MessageAndButton>
        <Message>Bem-vindo(a), viajante!</Message>
        <ButtonGroup>
          <ButtonGhost
            onClick={() => history.push('/')}
            name={'Voltar'}
            color={'black'}
          />
          <ButtonSolid
            onClick={() => history.push('/trips/application')}
            name={'Inscrever-se'}
          />
        </ButtonGroup>
      </MessageAndButton>
      <ContainerCards>
        {orderlyTrips}
      </ContainerCards>
      <Footer />
    </Container >
  )
}

export default ListTripsPage