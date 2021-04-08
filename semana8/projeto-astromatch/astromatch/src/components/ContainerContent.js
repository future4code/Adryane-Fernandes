import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ChakraProvider, extendTheme, Button } from "@chakra-ui/react"
import { CardContent, ContainerLogo, Logo, ColorRed, ContainerButtonClean } from '../styles/ContainerContentStyles'
import ScreenMatchs from './ScreenMatchs'
import ScreenList from './ScreenList'
import { urlApi } from '../axiosConfig/apiConfig'



const colors = {
  brand: {
    darkRed: '#BF0B1A',
    red: '#D90D32',
    wine: '#400A14',
    lightPink: '#F2DBD8'
  }
}

const theme = extendTheme({ colors })

function ContainerContent() {
  const [screen, setScreen] = useState('match')
  const [profile, setProfile] = useState({})

  useEffect(() => {
    axios.get(`${urlApi}/person`)
      .then((response) => {
        setProfile(response.data.profile)
        console.log(response.data.profile)
      }).catch((err) => {
        console.log(err.data)
      })
  }, [])

  const changeScreen = () => {
    if (screen === 'match') {
      setScreen('matchList')
    } else if (screen === 'matchList') {
      setScreen('match')
    }
  }

  const render = () => {
    if (screen === 'match') {
      return <ScreenMatchs
        onClick={changeScreen}
        photo={profile.photo}
        name={profile.name}
        age={profile.age}
        bio={profile.bio}
      />
    } else if (screen === 'matchList') {
      return <ScreenList onClick={changeScreen} />
    }
  }

  const ButtonClean = () => {
    if (screen === 'match') {
      return (
        <ContainerButtonClean>
          <Button
            bg='white'
            color='brand.red'

            _hover={{
              border: '1px',
              borderColor: 'brand.red'
            }}

            _active={{
              bg: "rgba(255, 255, 255, 0.25)",
              transform: "scale(0.98)",
            }}

            _focus={{
              boxShadow: "0 0 1px 2px rgba(255, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, .15)"
            }}
          >Limpar matchs</Button>
        </ContainerButtonClean>
      )
    }
  }



  return (
    <ChakraProvider theme={theme}>
      <CardContent>
        <ContainerLogo>
          <Logo>Astro<ColorRed>Match</ColorRed></Logo>
        </ContainerLogo>
        {render()}
      </CardContent >
      {ButtonClean()}

    </ChakraProvider>
  )
}

export default ContainerContent