import React from 'react'
import { useHistory } from 'react-router-dom'
import HeaderHome from '../../components/HeaderHome'
import { Main, Container, Tittle, Subtittle } from '../../styles/page/HomePageStyles'
import { Button } from '@chakra-ui/react'

function HomePage() {
  const history = useHistory()
  return (
    <Container>
      <HeaderHome />
      <Main>
        <Tittle>Um universo de possibilidades</Tittle>
        <Subtittle>viagens espaciais a menos de um ano-luz de distância</Subtittle>
        <Button onClick={() => history.push('/trips/list')}>
          Lista de viagens
        </Button>
      </Main>
    </Container>
  )
}

export default HomePage