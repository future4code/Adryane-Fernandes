import { Icon } from "@chakra-ui/react"
import ButtonPattern from "../components/ButtonPattern"
import { Message, Container } from '../styles/ErrorStyles'
import { useHistory } from 'react-router-dom'
import { IoIosRocket } from 'react-icons/io'

function Error() {
  const history = useHistory()
  return <Container>
    <Icon as={IoIosRocket} h={100} w={100} />
    <Message>Ops! Essa página não existe.</Message>
    <ButtonPattern
      onClick={(() => history.push('/'))}
      margin={'1rem'}
      name={'Voltar para a página principal'}
    />
  </Container>
}

export default Error