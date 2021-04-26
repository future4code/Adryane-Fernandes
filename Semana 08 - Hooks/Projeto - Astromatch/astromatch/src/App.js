import * as React from "react"
import GlobalStyle from './styles/GlobalStyles'
import ContainerContent from './pages/ContainerContent';
import { Container } from './styles/AppStyles'


function App() {
  return (
      <Container>
        <ContainerContent />
        <GlobalStyle />
      </Container>
  );
}

export default App;
