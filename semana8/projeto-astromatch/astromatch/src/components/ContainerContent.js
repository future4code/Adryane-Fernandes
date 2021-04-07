import React, { useState } from 'react'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { CardContent, ContainerLogo, Logo, ColorRed} from '../styles/ContainerContentStyles'
import ScreenMatchs from './ScreenMatchs'

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
  const [screen, setPage] = useState('match')

  const render = () => {
    if (screen === 'match') {
      return <ScreenMatchs/>
    } else if (screen === 'matchList') {
      return
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

    </ChakraProvider>
  )
}

export default ContainerContent