import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header'
import { Main, Container, Tittle, Subtittle } from '../../styles/page/public/HomePageStyles'
import ButtonSolid from '../../components/ButtonPattern'
import Footer from '../../components/Footer'

function HomePage() {
  const history = useHistory()
  return (
    <Container>
      <Header
        colorLogo={'black'}
        isHome={true}
      />
      <Main>
        <Tittle>Um universo de possibilidades</Tittle>
        <Subtittle>viagens espaciais a menos de um ano-luz de distância</Subtittle>
        <ButtonSolid
          onClick={() => history.push('/trips/list')}
          name={'Veja as viagens disponíveis'}
          bg={'brand.darkRed'}
          margin={'1rem'}
          colorHover={'rgb(255, 80, 100)'}
        />

      </Main>
      <Footer />
    </Container>
  )
}

export default HomePage