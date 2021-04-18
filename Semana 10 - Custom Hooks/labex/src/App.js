import React from 'react'
import Router from './routes/Router'
import GlobalStyle from './styles/GlobalStyles'
import { ChakraProvider,  extendTheme } from "@chakra-ui/react"

const colors = {
  brand: {
    lightGreen: '#5EDE67',
    darkGreen: '#007467',
    green: '#00AD66',
    yellow: '#FEAE33',
    orange: '#DD6847',
    darkRed: '#B0283E',
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
