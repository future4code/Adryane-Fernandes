import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ChakraProvider, extendTheme, Button } from "@chakra-ui/react"
import { CardContent, ContainerButtonClean } from '../styles/pages/ContainerContentStyles'
import { urlApi } from '../axiosConfig/apiConfig'
import ScreenProfiles from './ScreenProfiles'
import ScreenList from './ScreenList'
import IsMatch from '../components/IsMatch'
import NoProfileWarning from '../components/NoProfileWarning'
import Header from '../components/Header'

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
  const [isMatch, setIsMatch] = useState(false)

  useEffect(() => {
    getProfile()
  }, [])


  //Controllers
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

          const person = {
            id: profile.id,
            name: profile.name,
            photo: profile.photo
          }

          const newList = [...listMatch]
          newList.push(person)

          setIsMatch(true)
          setListMatch(newList)


        } else {
          getProfile()
        }

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

  // Functions
  const changeScreen = () => {
    if (screen === 'match') {
      setScreen('matchList')
    } else if (screen === 'matchList') {
      setScreen('match')
    }
  }

  const renderScreen = () => {
    if (screen === 'match') {
      if (profile) {
        return <ScreenProfiles
          onClickRecuse={() => choosePerson(profile.id, false)}
          onClickMatch={() => choosePerson(profile.id, true)}
          onClick={changeScreen}
          photo={profile.photo}
          name={profile.name}
          age={profile.age}
          bio={profile.bio}
        />
      } else {
        return <NoProfileWarning />
      }

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

  const alertMatch = (photo) => {
    return <IsMatch
      photoMatch={photo}
      onClickClose={() => {
        setIsMatch(false)
        getProfile()

      }}
      onClickList={() => {
        setScreen('matchList')
        setIsMatch(false)
        getProfile()
      }}
    />
  }


  return (
    <ChakraProvider theme={theme}>
      <CardContent>
        <Header 
          page={screen}
          onClickFire={changeScreen}
          onClickHeart={changeScreen}
        />
        {isMatch && alertMatch(profile.photo)}
        {renderScreen()}
      </CardContent >
      {ButtonClean()}
    </ChakraProvider>
  )
}

export default ContainerContent