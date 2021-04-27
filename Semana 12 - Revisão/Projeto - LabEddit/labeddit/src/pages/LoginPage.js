import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { goToRegister } from '../router/coordinator'
import { InputGroup, InputRightElement } from '@chakra-ui/react'
import { InputPattern } from "../components/InputPattern"
import { ButtonPattern } from '../components/ButtonPattern'
import { Container, Card, Title, Text, ButtonRegister } from '../styles/pages/LoginStyles'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import Footer from '../components/Footer'

function LoginPage() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const history = useHistory()

  return <Container>
    <Card>
      <Title>Login</Title>
      <InputPattern
        placeholder="Email"
      />

      <InputGroup>
        <InputPattern
          placeholder="Senha"
          type={show ? "text" : "password"}
        />
        <InputRightElement>
          <ButtonPattern
            marginBottom={'-.1rem'}
            onClick={handleClick}
            background={'rgba(255, 255, 255, 0)'}
            color={'#000'}
            bgHover={'white'}
            text={show ? <ViewIcon /> : <ViewOffIcon />}
            boxShadow={'none'}
            bgActive={'white'}
          />
        </InputRightElement>
      </InputGroup>

      <ButtonPattern
        text={'Entrar'}
      />
      <Text>Não tem uma conta? Se <ButtonRegister onCLick={() => goToRegister(history)}>cadastre</ButtonRegister> agora</Text>
    </Card>
    <Footer 
      background={'rgb(0, 0, 0)'}
      color={'white'}
    />
  </Container>
}

export default LoginPage