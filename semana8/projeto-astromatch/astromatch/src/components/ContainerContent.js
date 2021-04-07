import React, { useState } from 'react'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { CardContent, ContainerLogo, Logo, ColorRed, ContainerButton } from '../styles/ContainerContentStyles'
import { Button } from "@chakra-ui/react"

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
  const [page, setPage] = useState('match')

  const render = () => {
    if (page === 'match') {
      return
    } else if (page === 'matchList') {
      return
    }
  }

  return (
    <ChakraProvider theme={theme}>
      <CardContent>
        <ContainerLogo>
          <Logo>Astro<ColorRed>Match</ColorRed></Logo>
        </ContainerLogo>
        {render}
      </CardContent >

      <ContainerButton>
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
      </ContainerButton>
    </ChakraProvider>
  )
}

export default ContainerContent