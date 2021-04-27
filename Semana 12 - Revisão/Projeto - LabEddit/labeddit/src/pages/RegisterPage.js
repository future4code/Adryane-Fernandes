import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { goToLogin } from '../router/coordinator'
import { InputGroup, InputRightElement } from '@chakra-ui/react'
import { InputPattern } from "../components/InputPattern"
import { ButtonPattern } from '../components/ButtonPattern'
import { Container, Card, Title, Text, ButtonRegister } from '../styles/pages/RegisterStyles'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Button, ContainerButton } from '../styles/ButtonFormStyles'
import Footer from '../components/Footer'
import useForm from '../hooks/useForm'

function RegisterPage() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const history = useHistory()

  const initialState = {
    email: '',
    password: '',
    username: ''
  }
  const [form, onChange, resetForm] = useForm(initialState)

  const onSubmitForm = (event) => {
    event.preventDefault()
    resetForm()
  }

  return <Container>
    <Card>
      <Title>Cadastro</Title>

      <form onSubmit={onSubmitForm}>
        <InputPattern
          placeholder="Nome"
          type={'text'}
          name={'username'}
          value={form.username}
          onChange={onChange}
        />
        <InputPattern
          placeholder="Email"
          type={'email'}
          name={'email'}
          value={form.email}
          onChange={onChange}
        />

        <InputGroup>
          <InputPattern
            placeholder="Senha"
            name={'password'}
            value={form.password}
            onChange={onChange}
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

        <ContainerButton>
          <Button type={'submit'}>Cadastrar</Button>
        </ContainerButton>
      </form>
      <Text>Já tem uma conta? Faça <ButtonRegister onCLick={() => goToLogin(history)}>login</ButtonRegister> agora</Text>
    </Card>
    <Footer
      background={'rgb(0, 0, 0)'}
      color={'white'}
    />
  </Container>
}

export default RegisterPage