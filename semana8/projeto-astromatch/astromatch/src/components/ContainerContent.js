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
  const [profile, setProfile] = useState([])
  const [listMatch, setListMatch] = useState([])

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = () => {
    axios.get(`${urlApi}/person`)
      .then((res) => {
        setProfile(res.data.profile)
      }).catch((err) => {
        console.log(err.data)
      })
  }

  const choosePerson = (key, choiseUser) => {
    const body = {
      id: key,
      choice: choiseUser
    }

    axios.post(`${urlApi}/choose-person`, body)
      .then((res) => {
        if (res.data.isMatch === true) {
          window.alert('Deu match!')
          const person = {
            id: profile.id,
            name: profile.name,
            photo: profile.photo
          }

          const newList = [...listMatch]
          newList.push(person)

          setListMatch(newList)
        }
        getProfile()
      })
      .catch((err) => {
        console.log(err.data)
      })
  }

  const clear = () => {
    axios.put(`${urlApi}/clear`)
      .then((res) => {
        console.log(res.data.message)
        setListMatch([])
        getProfile()
      }).catch((err) => {
        console.log(err.data)
      })
  }

  //////////
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
        onClickRecuse={() => choosePerson(profile.id, false)}
        onClickMatch={() => choosePerson(profile.id, true)}
        onClick={changeScreen}
        photo={profile.photo}
        name={profile.name}
        age={profile.age}
        bio={profile.bio}
      />      
    } else if (screen === 'matchList') {
      return <ScreenList
        onClick={changeScreen}
        list={listMatch}
        onClickLimpar={clear}
      />
    }
  }
  const ButtonClean = () => {
    if (screen === 'match') {
      return (
        <ContainerButtonClean>
          <Button
            onClick={clear}
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
          >Limpar matchs e lista de perfis </Button>
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