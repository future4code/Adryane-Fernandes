import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import Header from '../../components/Header'
import login from '../../functions/login'
import ImageBackground from '../../assents/backgroundLogin.jpg'
import { token } from '../../apiConfig/axiosConfig'
import { ContainerForm, Container, Image, Phrase, ContainerPhrase, Phrase2 } from '../../styles/page/LoginPageStyles'
import { Input, Button } from '@chakra-ui/react'


function LoginPage() {
  const [email, handleLogin] = useInput('')
  const [password, handlePassword] = useInput('')

  const history = useHistory()

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  useEffect(() => {
    if (token) {
      history.push('/admin/trips/list')
    }

  }, [history])


  const body = {
    email: email,
    password: password
  };

  return (
    <Container>
      <ContainerForm>
        <Header />
        <Input
          placeholder={'Email'}
          value={email}
          onChange={handleLogin}
          type='email'
        />

        <Input
          value={password}
          onChange={handlePassword}
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Senha"
        />
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Mostrar senha" : "Esconder senha"}
        </Button>
        <Button onClick={() => login(history, body)}>
          Entrar
        </Button>
        <Button onClick={history.goBack}>
          voltar
        </Button>
      </ContainerForm>


      <ContainerPhrase>
        <Phrase>Bem-vindo(a), <Phrase2>comandante!</Phrase2></Phrase>
      </ContainerPhrase>
      <Image src={ImageBackground} alt='imagem com astronauta e et se olhando' />
    </Container>

  )
}

export default LoginPage