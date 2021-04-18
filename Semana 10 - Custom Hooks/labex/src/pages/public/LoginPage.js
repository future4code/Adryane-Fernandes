import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import Header from '../../components/Header'
import login from '../../functions/login'
import ImageBackground from '../../assents/backgroundLogin.jpg'
import { token } from '../../apiConfig/axiosConfig'
import { ButtonGroup, ContainerForm, Container, Image, Phrase, ContainerPhrase, Phrase2, Form } from '../../styles/page/public/LoginPageStyles'
import InputPattern from '../../components/form/InputPattern'
import ButtonPattern from '../../components/ButtonPattern'
import Footer from '../../components/Footer'
import { ButtonSend } from '../../styles/component/ButtonSendStyles'

function LoginPage() {
  const initialState = {
    email: '',
    password: ''
  }
  const [form, handleInput] = useForm(initialState)


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
    login(history, body)
  }

  return (
    <Container>
      <ContainerForm>

        <Form onSubmit={handleSubmit}>
          <Header colorLogo={'red'} />
          <InputPattern
            label={'Email'}
            name={'email'}
            placeholder={'usuario@gmail.com'}
            value={form.email}
            onChange={handleInput}
            type={'email'}
            pattern={'[^@ \t\r\n]+@[^@ \t\r\n]+\\.[^@ \t\r\n]+'}
          />
          <InputPattern
            label={'Senha'}
            name={'password'}
            placeholder={"******"}
            value={form.password}
            onChange={handleInput}
            type={show ? "text" : "password"}
          />
          <ButtonPattern
            onClick={handleClick}
            name={show ? "Esconder senha" : "Mostrar senha"}
            variant={'ghost'}
            color={'black'}
            margin={'-2rem'}
          />
          <ButtonGroup>
            <ButtonSend>Entrar</ButtonSend>
            <ButtonPattern
              onClick={() => history.push('/')}
              name={'Voltar'}
              variant={'ghost'}
              color={'black'}
            />
          </ButtonGroup>
        </Form>
        <Footer />
      </ContainerForm>


      <ContainerPhrase>
        <Phrase>Bem-vindo(a), <Phrase2>comandante!</Phrase2></Phrase>
      </ContainerPhrase>
      <Image src={ImageBackground} alt='imagem com astronauta e et se olhando' />
    </Container >

  )
}

export default LoginPage