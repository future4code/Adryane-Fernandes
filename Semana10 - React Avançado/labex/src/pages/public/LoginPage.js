import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
// import useInput from '../../hooks/useInput'
import useForm from '../../hooks/useForm'
import Header from '../../components/Header'
import login from '../../functions/login'
import ImageBackground from '../../assents/backgroundLogin.jpg'
import { token } from '../../apiConfig/axiosConfig'
import { ContainerForm, Container, Image, Phrase, ContainerPhrase, Phrase2 } from '../../styles/page/LoginPageStyles'
import { Input, Button } from '@chakra-ui/react'


function LoginPage() {
  const inicialState = {
    email: '',
    password: ''
  }
  const [form, onChange] = useForm(inicialState)


  const history = useHistory()

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  useEffect(() => {
    if (token) {
      history.push('/admin/trips/list')
    }

  }, [history])

  const body = {
    email: form.email,
    password: form.password
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(form)
    login(history, body)
  }

  return (
    <Container>
      <ContainerForm>
        <Header />
        <form onSubmit={handleSubmit}>
          <input
            // required
            name={'email'}
            placeholder={'E-mail'}
            value={form.email}
            onChange={onChange}
            type={'email'}
          />
          <input
            // required
            name={'password'}
            placeholder={"Senha"}
            value={form.password}
            onChange={onChange}
            type={'password'}
          // pr="4.5rem"
          // type={show ? "text" : "password"}
          />

          {/* <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Mostrar senha" : "Esconder senha"}
          </Button> */}
          <button>Entrar</button>
          {/* <Button onClick={history.goBack}>
            voltar
          </Button> */}
        </form>
      </ContainerForm>


      <ContainerPhrase>
        <Phrase>Bem-vindo(a), <Phrase2>comandante!</Phrase2></Phrase>
      </ContainerPhrase>
      <Image src={ImageBackground} alt='imagem com astronauta e et se olhando' />
    </Container>

  )
}

export default LoginPage