import Router from "./router/Router";
import GlobalStyles from "./styles/GlobalStyles";
import { AllPages } from './styles/AppStyles'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';

const theme = extendTheme({
  colors: {
    brand: {
      orange: '#E34234',
      blueDark: "#050533",
      blue: "#0D698B"
    },
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AllPages>
        <BrowserRouter>
          <GlobalStyles />
          <Header />
          <Router />
        </BrowserRouter>
      </AllPages>
    </ChakraProvider>
  );
}

export default App;
