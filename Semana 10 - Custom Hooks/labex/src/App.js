import React from 'react'
import Router from './routes/Router'
import GlobalStyle from './styles/GlobalStyles'
import { ChakraProvider,  extendTheme } from "@chakra-ui/react"

const colors = {
  brand: {
    ice: '#C5C3BE',
    blue: '#4D69B1',
    orange: '#D98F3B',
    purple: '#181154',
    bege: '#F0EBE1'

  }
}

const theme = extendTheme({colors})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router />
      <GlobalStyle />
    </ChakraProvider>
  );
}

export default App;
